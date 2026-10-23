const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

function uid() { return crypto.randomUUID(); }

function buildEvents(scripts) {
  if (!scripts || scripts.length === 0) return [];
  const events = [];
  for (const s of scripts) {
    const listen = s.type === 'afterResponse' ? 'test' : 'prerequest';
    events.push({
      listen,
      script: { type: 'text/javascript', exec: (s.code || '').split('\n') }
    });
  }
  return events;
}

function buildRequest(r) {
  const req = {
    method: r.method,
    header: [],
    url: { raw: r.url, host: [r.url] }
  };

  if (r.headers) {
    if (Array.isArray(r.headers)) {
      req.header = r.headers.map(h => ({ key: h.key, value: h.value }));
    } else {
      req.header = Object.entries(r.headers).map(([k, v]) => ({ key: k, value: v }));
    }
  }

  if (r.body) {
    if (r.body.type === 'json') {
      req.body = { mode: 'raw', raw: r.body.content, options: { raw: { language: 'json' } } };
    } else if (r.body.type === 'formdata') {
      req.body = { mode: 'formdata', formdata: r.body.content };
    } else if (r.body.type === 'urlencoded') {
      req.body = { mode: 'urlencoded', urlencoded: r.body.content };
    }
  }

  return req;
}

function buildItem(name, r) {
  return {
    name,
    id: uid(),
    request: buildRequest(r),
    response: [],
    event: buildEvents(r.scripts)
  };
}

// Minimal YAML parser for the simple key:value and block scalar structures used here
function parseYaml(content) {
  // Use a line-by-line state machine approach
  const lines = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
  return parseYamlLines(lines, 0, 0).value;
}

function getIndent(line) {
  let i = 0;
  while (i < line.length && line[i] === ' ') i++;
  return i;
}

function parseYamlLines(lines, startIdx, baseIndent) {
  const obj = {};
  let i = startIdx;
  
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Skip empty lines and comments
    if (trimmed === '' || trimmed.startsWith('#')) { i++; continue; }
    
    const indent = getIndent(line);
    if (indent < baseIndent) break;
    
    // Check for key: value
    const colonIdx = trimmed.indexOf(':');
    if (colonIdx === -1) { i++; continue; }
    
    const key = trimmed.substring(0, colonIdx).trim();
    const rest = trimmed.substring(colonIdx + 1);
    const restTrimmed = rest.trim();
    
    if (restTrimmed === '|-' || restTrimmed === '|') {
      // Block scalar
      const blockIndent = indent + 2;
      let blockLines = [];
      i++;
      while (i < lines.length) {
        const bLine = lines[i];
        const bTrimmed = bLine.trim();
        if (bTrimmed === '' && blockLines.length > 0) { blockLines.push(''); i++; continue; }
        if (bTrimmed === '') { i++; continue; }
        if (getIndent(bLine) < blockIndent) break;
        blockLines.push(bLine.substring(blockIndent));
        i++;
      }
      // Remove trailing empty lines for |-
      if (restTrimmed === '|-') {
        while (blockLines.length > 0 && blockLines[blockLines.length-1] === '') blockLines.pop();
      }
      obj[key] = blockLines.join('\n');
    } else if (restTrimmed === '') {
      // Could be a nested object or array
      i++;
      if (i >= lines.length) { obj[key] = null; continue; }
      const nextLine = lines[i];
      const nextTrimmed = nextLine.trim();
      if (nextTrimmed.startsWith('- ') || nextTrimmed === '-') {
        // Array
        const arr = [];
        const arrIndent = getIndent(nextLine);
        while (i < lines.length) {
          const aLine = lines[i];
          const aTrimmed = aLine.trim();
          if (aTrimmed === '' || aTrimmed.startsWith('#')) { i++; continue; }
          if (getIndent(aLine) < arrIndent) break;
          if (aTrimmed.startsWith('- ')) {
            const itemVal = aTrimmed.substring(2).trim();
            if (itemVal === '') {
              // Multi-line item
              i++;
              const sub = parseYamlLines(lines, i, arrIndent + 2);
              arr.push(sub.value);
              i = sub.nextIdx;
            } else {
              arr.push(parseScalar(itemVal));
              i++;
            }
          } else {
            break;
          }
        }
        obj[key] = arr;
      } else if (nextTrimmed !== '' && !nextTrimmed.startsWith('#')) {
        const nextIndent = getIndent(nextLine);
        if (nextIndent > indent) {
          const sub = parseYamlLines(lines, i, nextIndent);
          obj[key] = sub.value;
          i = sub.nextIdx;
        } else {
          obj[key] = null;
        }
      } else {
        obj[key] = null;
      }
    } else {
      obj[key] = parseScalar(restTrimmed);
      i++;
    }
  }
  
  return { value: obj, nextIdx: i };
}

function parseScalar(s) {
  if (s === 'null' || s === '~') return null;
  if (s === 'true') return true;
  if (s === 'false') return false;
  if (/^-?\d+$/.test(s)) return parseInt(s, 10);
  if (/^-?\d+\.\d+$/.test(s)) return parseFloat(s);
  // Quoted strings
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    return s.slice(1, -1).replace(/\\n/g, '\n').replace(/\\r/g, '\r').replace(/\\t/g, '\t').replace(/\\"/g, '"').replace(/\\\\/g, '\\');
  }
  return s;
}

const basePath = path.join(__dirname, 'postman', 'collections', 'API Express PostgreSQL');

function readYaml(p) {
  const content = fs.readFileSync(p, 'utf8');
  return parseYaml(content);
}

const colDef = readYaml(path.join(basePath, '.resources', 'definition.yaml'));

const folders = [
  { name: 'Produtos', dirName: 'Produtos', order: 1000 },
  { name: 'Clientes', dirName: 'Clientes', order: 2000 },
  { name: 'Pedidos', dirName: 'Pedidos', order: 3000 },
];

const folderItems = [];

for (const folder of folders) {
  const folderPath = path.join(basePath, folder.dirName);
  const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.request.yaml'));
  
  const itemsWithOrder = [];
  for (const file of files) {
    const filePath = path.join(folderPath, file);
    const r = readYaml(filePath);
    const name = file.replace('.request.yaml', '');
    itemsWithOrder.push({ name, r, order: r.order || 0 });
  }
  
  itemsWithOrder.sort((a, b) => a.order - b.order);
  
  const items = itemsWithOrder.map(({ name, r }) => buildItem(name, r));
  
  folderItems.push({
    name: folder.name,
    id: uid(),
    item: items,
    event: []
  });
}

const variables = [];
if (colDef.variables) {
  for (const [k, v] of Object.entries(colDef.variables)) {
    variables.push({ key: k, value: v || '', type: 'default' });
  }
}

const collection = {
  info: {
    _postman_id: uid(),
    name: 'API Express PostgreSQL',
    description: colDef.description || '',
    schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json'
  },
  item: folderItems,
  variable: variables
};

const output = JSON.stringify(collection, null, 2);
const outPath = path.join(__dirname, 'API Express PostgreSQL.postman_collection.json');
fs.writeFileSync(outPath, output, 'utf8');
console.log('Done! Written ' + output.length + ' bytes to ' + outPath);

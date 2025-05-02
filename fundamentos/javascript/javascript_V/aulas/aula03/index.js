const address = require("./address");
const person = require("./person");

const addr = new address("7 de setembro", 123, "centro", "Curitiba", "PR");
const p = new person("fulano", addr);

console.log(p);
console.log(p.address.fullAddress());

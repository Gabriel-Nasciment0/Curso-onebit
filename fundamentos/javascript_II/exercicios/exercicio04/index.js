let vagas = [];

function listarVagas() {
    const vagasEmTexto = vagas.reduce((textoVagas, vaga, indice) => {
        textoVagas += indice + ",";
        textoVagas += vaga.nome;
        textoVagas += `( ${vaga.candidatos.length}) candidatos \n`;
        return textoVagas;
    }, "");
    alert(vagasEmTexto);
}

function criarVaga() {
    let nome = prompt("qual o nome da vaga");
    let descricao = prompt("qual a descrição da vaga");
    let data = prompt("Qual a data limite (dd/mm/aaaa)");

    const confirmar = confirm(`
        Deseja criar uma vaga com essas informações
        
        Nome:${nome} descrição:${descricao} data: ${data}
        `);
    if (confirmar) {
        const novaVaga = { nome, descricao, data, candidatos: [] };
        vagas.push(novaVaga);
        alert("Vaga Criada");
    }
}

function exibirVaga() {
    let indice = prompt("Qual o indice da vaga:");
    let vaga = vagas[indice];
    let candidatosEmTexto = vaga.candidatos.reduce(
        (textoVagas, candidato) => `${textoVagas} \n - ${candidato} `,
        ""
    );
    alert(`
        Vaga nº: ${indice}
        Nome: ${vaga.nome}
        Descrição ${vaga.descricao}
        Data limite: ${vaga.data}
        Quantidade de Candidatos: ${vaga.candidatos.length}
        Candidatos inscritos ${candidatosEmTexto}
        `);
}

function inscreverCandidato() {
    let candidato = prompt("informe o nome do(a) candidato(a)");
    let indice = prompt(` qual vaga o(a) ${candidato} vai se candidatar:`);
    let vaga = vagas[indice];

    let confirmar = confirm(` 
    Deseja increver o(a) candidato(a) ${candidato} a vaga ${indice}? 
        Nome: ${vaga.nome}
        Descrição ${vaga.descricao}
        Data limite: ${vaga.data} 
        `);
    if (confirmar) {
        vaga.candidatos.push(candidato);
        alert("inscrição realizada");
    }
}

function excluirVaga() {
    let indice = prompt("qual o indice da vaga que deseja excluir");
    let vaga = vagas[indice];

    let confirmar = confirm(` 
       Tem certeza que deseja excluir a vaga ${indice}?
            Nome: ${vaga.nome}
            Descrição ${vaga.descricao}
            Data limite: ${vaga.data} 
            `);
    if (confirmar) {
        vagas.splice(indice, 1);
        alert("vaga excluida");
    }
}
function exibirMenu() {
    const opcao = prompt(
        "Cadastro de Vagas de Emprego" +
            "\n\nEscolha uma das opções" +
            "\n1. Listar vagas disponíveis" +
            "\n2. Criar uma nova vaga" +
            "\n3. Visualizar uma vaga" +
            "\n4. Inscrever um(a) candidato(a)" +
            "\n5. Excluir uma vaga" +
            "\n6. Sair"
    );
    return opcao;
}
function executar() {
    let opcao = "";
    do {
        opcao = exibirMenu();
        switch (opcao) {
            case "1":
                listarVagas();
                break;
            case "2":
                criarVaga();
                break;
            case "3":
                exibirVaga();
                break;
            case "4":
                inscreverCandidato();
                break;
            case "5":
                excluirVaga();
                break;
            case "6":
                alert("saindo...");
                break;

            default:
                alert("opção invalida");
                break;
        }
    } while (opcao !== "6");
}
executar();

let pessoas = [];
while (true) {
    let menu = prompt(`pessoas na fila ${pessoas.join(",")}

        Qual operação fazer:
        
        a) Novo passiente
        b) Consultar passiente
        c) Sair
        `).toLowerCase();
    let fila = "";
    if (menu === "a") {
        fila = prompt("qual o nome do pasciente");
        alert(`${fila} adicionada`);
        pessoas.push(fila);
    } else if (menu === "b") {
        alert(`${pessoas[0]} Sera atendido`);
        pessoas.shift();
    } else if (menu === "c") {
        if (pessoas.length === 0) {
            alert("Programa encerrado. Não há ninguém na fila.");
        } else {
            alert("Programa encerrado. Ainda há pacientes na fila.");
        }
        break;
    } else {
        alert("Erro");
    }
}

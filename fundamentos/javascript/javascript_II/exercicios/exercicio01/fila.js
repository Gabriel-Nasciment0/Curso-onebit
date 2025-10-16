let fila = [];
while (true) {
    let menu = prompt(`pessoas na fila ${fila.join(",")}

        Qual operação fazer:
        
        a) Novo passiente
        b) Consultar passiente
        c) Sair
        `).toLowerCase();
    let pessoas = "";
    if (menu === "a") {
        pessoas = prompt("qual o nome do pasciente");
        alert(`${pessoas} adicionada`);
        fila.push(pessoas);
    } else if (menu === "b") {
        alert(`${fila[0]} Sera atendido`);
        fila.shift();
    } else if (menu === "c") {
        if (fila.length === 0) {
            alert("Programa encerrado. Não há ninguém na fila.");
        } else {
            alert("Programa encerrado. Ainda há pacientes na fila.");
        }
        break;
    } else {
        alert("Erro");
    }
}

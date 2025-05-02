let valor = parseFloat(prompt("quanto de dinheiro voce tem:"));
let addRemov = 0;
do {
    let opcao = prompt(`
        voce tem ${valor} escolha uma opção
        a) Adcionar
        b) Remover
        c) Encerrar
        `).toLowerCase();
    if (opcao === "a") {
        addRemov = parseFloat(prompt("quanto sera adicionado:"));
        valor += addRemov;
    } else if (opcao === "b") {
        addRemov = parseFloat(prompt("quanto sera removido:"));

        valor -= addRemov;
    } else if (opcao === "c") {
        alert("Encerrando...");
        break;
    } else {
        alert("Erro...");
    }
} while (true);

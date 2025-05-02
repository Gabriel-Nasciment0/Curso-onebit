let cartas = [];
while (true) {
    let menu = prompt(`📋 Cartas na pilha: ${cartas.join(", ") || "Nenhuma"}
    
Escolha uma opção:
a) Adicionar carta
b) Retirar carta
c) Sair`).toLowerCase();

    if (menu === "a") {
        let pilha = prompt("Digite o nome da carta:");
        if (pilha) {
            cartas.push(pilha);
            alert(`✅ A carta "${pilha}" foi adicionada à pilha.`);
        } else {
            alert("⚠️ Nenhuma carta foi adicionada. Tente novamente.");
        }
    } else if (menu === "b") {
        if (cartas.length > 0) {
            let removida = cartas.shift();
            alert(`🃏 A carta "${removida}" foi retirada da pilha.`);
        } else {
            alert("⚠️ Não há cartas na pilha para retirar.");
        }
    } else if (menu === "c") {
        if (cartas.length === 0) {
            alert("🚪 Programa encerrado. Não há cartas na pilha.");
        } else {
            alert("🚪 Programa encerrado. Ainda há cartas na pilha.");
        }
        break;
    } else {
        alert("❌ Opção inválida. Escolha a, b ou c.");
    }
}

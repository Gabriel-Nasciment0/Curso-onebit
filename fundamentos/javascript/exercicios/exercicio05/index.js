const nomeTurista = prompt("Qual é o nome do turista?");

// Armazenar cidades
let cidade01 = "";
let cidade02 = "";
let cidade03 = "";
let cidade04 = "";
let cidade05 = "";

// Variáveis auxiliares
let contador = 0;
let resposta = "sim";

// Loop de pergunta
while (resposta.toLowerCase() === "sim" && contador < 5) {
    resposta = prompt("Você visitou alguma cidade? (sim/não)");

    // Armazena a cidade
    if (resposta.toLowerCase() === "sim") {
        const cidade = prompt("Qual cidade você visitou?");
        if (contador === 0) {
            cidade01 = cidade;
        } else if (contador === 1) {
            cidade02 = cidade;
        } else if (contador === 2) {
            cidade03 = cidade;
        } else if (contador === 3) {
            cidade04 = cidade;
        } else if (contador === 4) {
            cidade05 = cidade;
        }
        contador++;
    }
}

// Organiza as cidades visitadas
let cidadesVisitadas = "";
if (cidade01) cidadesVisitadas += cidade01 + ", ";
if (cidade02) cidadesVisitadas += cidade02 + ", ";
if (cidade03) cidadesVisitadas += cidade03 + ", ";
if (cidade04) cidadesVisitadas += cidade04 + ", ";
if (cidade05) cidadesVisitadas += cidade05;

// Remover vírgula extra no final da lista
cidadesVisitadas = cidadesVisitadas.slice(0, -2);

// Exibe as informações do turista
if (contador === 0) {
    alert(`
    Olá, ${nomeTurista}!
    
    Você não visitou nenhuma cidade ainda. Não se preocupe, há muitas oportunidades por aí! 😊
    `);
} else {
    alert(`
    Olá, ${nomeTurista}! 🌍

    Você visitou ${contador} cidade(s) até agora! 🎉
    
    Aqui estão as cidades que você conheceu:
    ${cidadesVisitadas}

    Continue explorando o mundo e aproveite cada viagem! ✈️
    `);
}

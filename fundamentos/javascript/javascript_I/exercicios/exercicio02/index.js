const veiculo01 = prompt("Qual é o primeiro veículo:");
const velocidade01 = parseFloat(
    prompt("Qual é a velocidade do primeiro veículo (em KM/H):")
);

const veiculo02 = prompt("Qual é o segundo veículo:");
const velocidade02 = parseFloat(
    prompt("Qual é a velocidade do segundo veículo (em KM/H):")
);

// Verificação de entrada inválida
if (isNaN(velocidade01) || isNaN(velocidade02)) {
    alert(
        "ERRO: Por favor, insira valores numéricos válidos para as velocidades."
    );
} else {
    if (velocidade01 > velocidade02) {
        alert(
            `O ${veiculo01} é mais rápido (${velocidade01} KM/H) que o ${veiculo02} (${velocidade02} KM/H).`
        );
    } else if (velocidade01 < velocidade02) {
        alert(
            `O ${veiculo02} é mais rápido (${velocidade02} KM/H) que o ${veiculo01} (${velocidade01} KM/H).`
        );
    } else {
        alert(
            `O ${veiculo01} e o ${veiculo02} têm a mesma velocidade (${velocidade01} KM/H).`
        );
    }
}

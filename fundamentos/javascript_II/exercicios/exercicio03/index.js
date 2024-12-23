// Função para calcular a área do triângulo
function calcularTriangulo() {
    let base = parseFloat(prompt("Qual é a base do triângulo?"));
    let altura = parseFloat(prompt("Qual é a altura do triângulo?"));
    return (base * altura) / 2;
}

// Função para calcular a área do retângulo
function calcularRetangulo() {
    let base = parseFloat(prompt("Qual é a base do retângulo?"));
    let altura = parseFloat(prompt("Qual é a altura do retângulo?"));
    return base * altura;
}

// Função para calcular a área do quadrado
function calcularQuadrado() {
    let lado = parseFloat(prompt("Qual é o lado do quadrado?"));
    return lado * lado;
}

// Função para calcular a área do trapézio
function calcularTrapezio() {
    let baseMaior = parseFloat(prompt("Qual é a base maior do trapézio?"));
    let baseMenor = parseFloat(prompt("Qual é a base menor do trapézio?"));
    let altura = parseFloat(prompt("Qual é a altura do trapézio?"));
    return ((baseMaior + baseMenor) * altura) / 2;
}

// Função para calcular a área do círculo
function calcularCirculo() {
    const pi = 3.14;
    let raio = parseFloat(prompt("Qual é o raio do círculo?"));
    return pi * Math.pow(raio, 2); // π × r²
}

// Função principal para executar a calculadora
function executarCalculadora() {
    while (true) {
        let calculo = prompt(`
            Escolha uma área a ser calculada:
            a) Área do triângulo
            b) Área do retângulo
            c) Área do quadrado
            d) Área do trapézio
            e) Área do círculo
            f) Sair
        `).toLowerCase();

        if (calculo === "a") {
            alert(`A área do triângulo é: ${calcularTriangulo()}`);
        } else if (calculo === "b") {
            alert(`A área do retângulo é: ${calcularRetangulo()}`);
        } else if (calculo === "c") {
            alert(`A área do quadrado é: ${calcularQuadrado()}`);
        } else if (calculo === "d") {
            alert(`A área do trapézio é: ${calcularTrapezio()}`);
        } else if (calculo === "e") {
            alert(`A área do círculo é: ${calcularCirculo()}`);
        } else if (calculo === "f") {
            alert("Saindo da calculadora.");
            break;
        } else {
            alert("Opção inválida. Tente novamente.");
        }
    }
}

// Chamada da função principal
executarCalculadora();

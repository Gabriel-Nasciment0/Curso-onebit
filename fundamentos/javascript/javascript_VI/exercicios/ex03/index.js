// Reescreva o código do exercício 24 utilizando funções async, await e fazendo as devidas adaptações no código.

async function calculoImc(peso, altura) {
    console.log(`Executando a promise.`);

    if (!peso || !altura) {
        return Promise.reject(`Peso e altura são obrigatorios `);
    }
    const imc = peso / (altura * altura);
    return imc;
}
async function exibirImc(peso, altura) {
    try {
        const imc = await calculoImc(peso, altura);
        console.log(`Seu IMC é: ${imc.toFixed(2)}`);
        console.log(`classificação`);
        //classificação
        switch (true) {
            case imc < 18.5:
                console.log(`magreza`);
                break;
            case imc < 25:
                console.log(`normal`);
                break;
            case imc < 30:
                console.log(`sobrepeso`);
                break;
            case imc < 40:
                console.log(`obesidade`);
                break;

            default:
                console.log(`obesidade grave`);
                break;
        }
    } catch (err) {
        console.error(`Erro`, err);
    }
}

exibirImc(71, 1.74);
exibirImc(48, 1.6);
exibirImc(71, "texto");
exibirImc(82, 1.72);
exibirImc(120, 1.8);

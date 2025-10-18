// Reescreva o código do exercício 24 utilizando funções async, await e fazendo as devidas adaptações no código.

function calculoImc(peso, altura) {
    return new Promise((resolve, reject) => {
        console.log(`Executando a promise.`);
        setTimeout(() => {
            if (!peso || !altura) {
                reject(` Peso e altura são obrigatorios `);
            } else {
                const imc = peso / (altura * altura);
                resolve(imc);
            }
        }, 1 * 1000);
    });
}
calculoImc(65, 1.73)
    .then((imc) => {
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
    })
    .catch((erro) => {
        console.error(`Erro`, erro);
    });

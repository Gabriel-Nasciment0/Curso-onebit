// Escreva uma função assíncrona que têm como parâmetros o peso e a altura de uma pessoa e retorna uma promise do IMC dessa pessoa. Além disso, caso algum dos parâmetros não seja do tipo “number” a promise deverá ser rejeitada.

// Você deverá criar também uma outra função que recebe os mesmos parâmetros de peso e altura, chama a função que calcula o IMC e então exibe no terminal o resultado das promises em texto. Caso a promise seja resolvida você também deverá mostrar no terminal a situação do IMC da pessoa de acordo com a seguinte tabela:

// - Abaixo de 18,5: **magreza**
// - Entre 18,5 e 24,9: **normal**
// - Entre 25 e 29,9: **sobrepeso**
// - Entre 30 e 39,9: **obesidade**
// - Acima de 40: **obesidade grave**

// Dentro da segunda função, após chamar a função que calcula o IMC, chame a função log do console com uma mensagem qualquer para evidenciar o funcionamento assíncrono do código.
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

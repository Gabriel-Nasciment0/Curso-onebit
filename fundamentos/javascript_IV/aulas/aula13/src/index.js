function mediaAritimeticaSimples(...numeros) {
    let soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    return soma / numeros.length;
}
console.log(mediaAritimeticaSimples(1, 2, 3, 4, 5)); // 3

function mediaAritimeticaPonderada(...numeros) {
    let soma = 0;
    let divisor = 0;

    numeros.forEach((numero, indice) => {
        soma += numero * (indice + 1);
        divisor += indice + 1;
    });

    return soma / divisor;
}
console.log(mediaAritimeticaPonderada(1, 2, 3, 4, 5)); // 3.5
// refaz
function mediana(...numeros) {
    const numerosOrdenados = numeros.sort((a, b) => a - b);
    const tamanho = numerosOrdenados.length;
    const indiceDoMeio = Math.floor(tamanho / 2);

    if (tamanho % 2 === 0) {
        return (
            (numerosOrdenados[indiceDoMeio - 1] +
                numerosOrdenados[indiceDoMeio]) /
            2
        );
    }

    return numerosOrdenados[indiceDoMeio];
}
console.log(mediana(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
////
function moda(...numeros) {
    let frequencia = {};
    let maiorFrequencia = [];
    let maiorFrequenciaValor = 0;

    numeros.forEach((numero) => {
        frequencia[numero] = frequencia[numero] + 1 || 1;

        if (frequencia[numero] > maiorFrequenciaValor) {
            maiorFrequencia = [numero];
            maiorFrequenciaValor = frequencia[numero];
        } else if (frequencia[numero] === maiorFrequenciaValor) {
            if (!maiorFrequencia.includes(numero)) {
                maiorFrequencia.push(numero);
            }
        }
    });

    return maiorFrequencia;
}
console.log(moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)); // [4]

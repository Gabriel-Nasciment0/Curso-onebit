function mediaAritimeticaSimples(...numeros) {
    let soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    return soma / numeros.length;
}

console.log(mediaAritimeticaSimples(1, 2, 3, 4, 5)); // 3

function mediaAritimeticaPonderada(...numeros) {
    let soma = numeros.reduce(
        (acumulador, numero, indice) => acumulador + numero * (indice + 1),
        0
    );
    let divisor = numeros.reduce(
        (acumulador, numero, indice) => acumulador + indice + 1,
        0
    );
    return soma / divisor;
}
console.log(mediaAritimeticaPonderada(1, 2, 3, 4, 5)); // 3.5

function calcular(a, b, operacao) {
    console.log("realizando operação");
    const resultado = operacao(a, b);
    return resultado;
}

function somar(x, y) {
    console.log("realizando soma");
    return x + y;
}
console.log(calcular(3, 5, somar));
console.log(
    calcular(8, 4, function (x, y) {
        console.log("realizando subtração");
        return x - y;
    })
);
function exibirElemento(elemento, indice, array) {
    console.log({
        elemento,
        indice,
        array,
    });
}
const lista = ["maça", "banana", "laranja", "limao"];

for (let i = 0; i < lista.length; i++) {
    exibirElemento(lista[i], i, lista);
}

lista.forEach(exibirElemento);

lista.forEach(function (elemento, indice, array) {
    console.log({
        elemento,
        indice,
        array,
    });
});

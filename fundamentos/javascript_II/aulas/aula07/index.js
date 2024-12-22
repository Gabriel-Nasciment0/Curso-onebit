function calcularMedia(a, b) {
    const media = (a + b) / 2;
    return media;
}

let resultado = calcularMedia(7, 2);
console.log(resultado);

function criarProduto(nome, preco) {
    const produto = {
        nome,
        preco,
        estoque: 1,
    };
    return produto;
}
const notebook = criarProduto("notbook intel core i3 8gb", 2500);

console.log(notebook);

function areaRetangular(base, altura) {
    return base * altura;
}
function areaQuadrada(lado) {
    return areaRetangular(lado, lado);
}
console.log(areaRetangular(3, 5));

console.log(areaQuadrada(9));

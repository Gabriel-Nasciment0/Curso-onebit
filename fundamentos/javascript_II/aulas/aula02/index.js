const arr = [
    "frodo",
    "sam",
    "merry",
    "pippin",
    "gandalf",
    "aragorn",
    "legolas",
    "gimli",
];
console.log(arr);
//array elementos
//push
let tamanho = arr.push("boromir");
console.log(arr);
console.log(tamanho);
//unshift
tamanho = arr.unshift("teste");
console.log(arr);
console.log(tamanho);
//remover elementos
//pop
let ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);
//shift
ultimoElemento = arr.shift();
console.log(arr);
console.log(ultimoElemento);
// pesquisar elemento
//include
const inclui = arr.includes("gandalf");
console.log(inclui);
//indexof
const indice = arr.indexOf("gandalf");
console.log(indice);
//cortar e concatenar
//slice
const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4);
console.log(arr);
console.log(hobbits);
console.log(outros);
//concat
const sociedade = hobbits.concat(outros, "boromir");
console.log(sociedade);
// splice: Permite remover elementos em qualquer posição do array e substituir por novos
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento");
console.log(elementosRemovidos);
console.log(sociedade);
//interar sobre os elementos
// Usando o for para percorrer cada elemento do array
for (let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice];
    console.log(elemento + " se encontra na posição " + indice);
}

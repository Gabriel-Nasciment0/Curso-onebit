"use strict";

function mediaAritimeticaSimples() {
  for (var _len = arguments.length, numeros = new Array(_len), _key = 0; _key < _len; _key++) {
    numeros[_key] = arguments[_key];
  }
  var soma = numeros.reduce(function (acumulador, numero) {
    return acumulador + numero;
  }, 0);
  return soma / numeros.length;
}
console.log(mediaAritimeticaSimples(1, 2, 3, 4, 5)); // 3

function mediaAritimeticaPonderada() {
  var soma = 0;
  var divisor = 0;
  for (var _len2 = arguments.length, numeros = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    numeros[_key2] = arguments[_key2];
  }
  numeros.forEach(function (numero, indice) {
    soma += numero * (indice + 1);
    divisor += indice + 1;
  });
  return soma / divisor;
}
console.log(mediaAritimeticaPonderada(1, 2, 3, 4, 5)); // 3.5
// refaz
function mediana() {
  for (var _len3 = arguments.length, numeros = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numeros[_key3] = arguments[_key3];
  }
  var numerosOrdenados = numeros.sort(function (a, b) {
    return a - b;
  });
  var tamanho = numerosOrdenados.length;
  var indiceDoMeio = Math.floor(tamanho / 2);
  if (tamanho % 2 === 0) {
    return (numerosOrdenados[indiceDoMeio - 1] + numerosOrdenados[indiceDoMeio]) / 2;
  }
  return numerosOrdenados[indiceDoMeio];
}
console.log(mediana(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
////
function moda() {
  var frequencia = {};
  var maiorFrequencia = [];
  var maiorFrequenciaValor = 0;
  for (var _len4 = arguments.length, numeros = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numeros[_key4] = arguments[_key4];
  }
  numeros.forEach(function (numero) {
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

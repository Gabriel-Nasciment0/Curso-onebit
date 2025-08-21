let conta = parseFloat(prompt("escolha um numero a ser multplicado:"));
let resultado = "";
for (let index = 0; index < 11; index++) {
    resultado += `${conta} x ${index} = ${conta * index} \n`;
}
alert(`Resultado da tabuada de ${conta}\n${resultado}`);

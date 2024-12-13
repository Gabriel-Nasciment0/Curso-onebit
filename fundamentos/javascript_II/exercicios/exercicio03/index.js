const medida = parseFloat(
    prompt("Digite um número para realizar a conversão:")
);

var conversor = prompt(
    "Escolha a unidade de medida: mm (milímetros), cm (centímetros), dm (decímetros), dam (decâmetros), hm (hectômetros), km (quilômetros)"
).toLowerCase();
var resultado = 0;

switch (conversor) {
    case "mm":
        resultado = medida * 1000;
        alert(
            `A conversão de ${medida} metro(s) para milímetros (mm) é: ${resultado} mm.`
        );
        break;

    case "cm":
        resultado = medida * 100;
        alert(
            `A conversão de ${medida} metro(s) para centímetros (cm) é: ${resultado} cm.`
        );
        break;

    case "dm":
        resultado = medida * 10;
        alert(
            `A conversão de ${medida} metro(s) para decímetros (dm) é: ${resultado} dm.`
        );
        break;

    case "dam":
        resultado = medida / 10;
        alert(
            `A conversão de ${medida} metro(s) para decâmetros (dam) é: ${resultado} dam.`
        );
        break;

    case "hm":
        resultado = medida / 100;
        alert(
            `A conversão de ${medida} metro(s) para hectômetros (hm) é: ${resultado} hm.`
        );
        break;

    case "km":
        resultado = medida / 1000;
        alert(
            `A conversão de ${medida} metro(s) para quilômetros (km) é: ${resultado} km.`
        );
        break;

    default:
        alert(
            "Unidade não reconhecida. Por favor, insira uma unidade válida (mm, cm, dm, dam, hm, km)."
        );
}

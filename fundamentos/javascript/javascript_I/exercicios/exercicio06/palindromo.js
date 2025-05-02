let palavra = prompt("Escreva uma palavra ").toLowerCase();
let invertido = palavra.split("").reverse().join("");

if (palavra === invertido) {
    alert(
        ` a palavra "${palavra}" de tras para frente e "${invertido}" portanto e um palindromo`
    );
} else {
    alert(
        ` a palavra "${palavra}" de tras para frente e "${invertido}" portanto não e um palindromo`
    );
}

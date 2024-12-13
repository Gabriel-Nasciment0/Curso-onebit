var nomeAtaque = prompt("Qual o nome do Atacante:");
var poderDeAtaque = parseFloat(prompt("Qual o poder de ataque:"));

var nomeDefesa = prompt("Qual o nome do Defensor:");
var vidaDefensor = parseFloat(prompt("Qual a vida do defensor:"));
var defesaDefensor = parseFloat(prompt("Qual a defesa do defensor:"));
var escudoDefensor = prompt("Ele tem escudo? (sim/nao)").toLowerCase();

var danoCausado = 0;

// Lógica do combate
if (poderDeAtaque > defesaDefensor && escudoDefensor === "nao") {
    danoCausado = poderDeAtaque - defesaDefensor;
    vidaDefensor -= danoCausado;
    alert(
        `O ${nomeAtaque} causou ${danoCausado} de dano no ${nomeDefesa}.
        A vida do ${nomeDefesa} agora é ${vidaDefensor}.`
    );
} else if (poderDeAtaque > defesaDefensor && escudoDefensor === "sim") {
    danoCausado = poderDeAtaque - defesaDefensor / 2;
    vidaDefensor -= danoCausado;
    alert(
        `O ${nomeAtaque} causou ${danoCausado} de dano no ${nomeDefesa}.
        Por causa do escudo, o dano foi reduzido.
        A vida do ${nomeDefesa} agora é ${vidaDefensor}.`
    );
} else {
    alert(
        `O ataque do ${nomeAtaque} não foi suficiente para causar dano ao ${nomeDefesa}.
        A vida do ${nomeDefesa} permanece ${vidaDefensor}.`
    );
}

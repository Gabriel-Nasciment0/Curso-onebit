function addJogador() {
    //tag pegas do html
    const sectionList = document.getElementById("jogador-list");

    const posicao = document.getElementById("posicao").value;
    const nome = document.getElementById("nome").value;
    const camisa = document.getElementById("camisa").value;

    const confirmation = confirm(`escalar ${nome} como ${posicao}?`);

    if (confirmation) {
        //tags criadas
        const jogadorDiv = document.createElement("ul");
        jogadorDiv.classList.add("jogador");

        //inserir textos
        jogadorDiv.innerHTML = `
    <li>Posição:${posicao}</li>
    <li>Nome:${nome}</li>
    <li>Camisa:${camisa}</li>
    <br>
    `;
        //adicionar a adiv a seção
        sectionList.appendChild(jogadorDiv);
        document.getElementById("posicao").value = "";
        document.getElementById("nome").value = "";
        document.getElementById("camisa").value = "";
    }
}

function removeJogador() {
    const sectionList = document.getElementById("jogador-list");

    const jogador = document.getElementsByClassName("jogador");

    sectionList.removeChild(jogador[jogador.length - 1]);
}

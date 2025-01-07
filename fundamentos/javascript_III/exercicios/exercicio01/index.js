function addJogador() {
    //tag pegas do html
    const sectionList = document.getElementById("jogador-list");

    const posicao = document.getElementById("posicao").value;
    const nome = document.getElementById("nome").value;
    const camisa = document.getElementById("camisa").value;
    //tags criadas
    const jogadorDiv = document.createElement("div");
    jogadorDiv.classList.add("jogador");

    //inserir textos
    jogadorDiv.innerHTML = `
    <p>Posição:${posicao}</p>
    <p>Nome:${nome}</p>
    <p>Camisa:${camisa}</p>
    <br>
    `;
    //adicionar a adiv a seção
    sectionList.appendChild(jogadorDiv);
}

function removeJogador() {
    const sectionList = document.getElementById("jogador-list");

    const jogador = document.getElementsByClassName("jogador");

    sectionList.removeChild(jogador[jogador.length - 1]);
}

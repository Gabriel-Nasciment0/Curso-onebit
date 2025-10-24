function renderTransicao(transacoesData) {
    const article = document.createElement("article");
    article.classList.add("article");
    article.id = `article-${transacoesData.id}`;

    const name = document.createElement("div");
    name.classList.add("article-nome");
    name.textContent = transacoesData.nome;

    const valor = document.createElement("div");
    valor.classList.add("article-valor");
    valor.textContent = transacoesData.valor;

    article.append(name, valor);
    document.querySelector("#transacoes").appendChild(article);
}

async function fetchTransicao() {
    const transacoes = await fetch("http://localhost:3000/transacoes").then(
        (res) => res.json()
    );
    transacoes.forEach(renderTransicao);
}
document.addEventListener("DOMContentLoaded", () => {
    fetchTransicao();
});

const form = document.querySelector("form");



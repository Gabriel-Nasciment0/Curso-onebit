// funções normais
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
    if (transacoesData.valor < 0) {
        valor.classList.add("negativo");
    }

    const editarBtn = document.createElement("button");
    editarBtn.classList.add("editarBtn");
    editarBtn.textContent = "Editar";
    editarBtn.addEventListener("click", () => editarTransacao(transacoesData));

    const deletarBtn = document.createElement("button");
    deletarBtn.classList.add("deletar-btn");
    deletarBtn.textContent = "excluir";
    deletarBtn.addEventListener("click", () =>
        deletarTransacao(transacoesData.id)
    );

    article.append(name, valor, editarBtn, deletarBtn);
    document.querySelector("#transacoes").appendChild(article);
}

function atualizarSaldo() {
    const valores = [...document.querySelectorAll(".article-valor")].map((el) =>
        Number(el.textContent)
    );
    const total = valores.reduce((acc, val) => acc + val, 0);
    document.querySelector(".saldo").textContent = `R$ $  ${total.toFixed(2)}`;
}
// funções async
async function fetchTransicao() {
    const transacoes = await fetch("http://localhost:3000/transacoes").then(
        (res) => res.json()
    );
    transacoes.forEach(renderTransicao);
    atualizarSaldo();
}
document.addEventListener("DOMContentLoaded", () => {
    fetchTransicao();
});

async function editarTransacao(transacao) {
    const novoNome = prompt("Novo nome da transação:", transacao.nome);
    const novoValor = prompt("Novo valor da transação:", transacao.valor);

    if (novoNome === null || novoValor === null) return;

    const transacaoEditada = {
        ...transacao,
        nome: novoNome,
        valor: Number(novoValor),
    };

    const resposta = await fetch(
        `http://localhost:3000/transacoes/${transacao.id}`,
        {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(transacaoEditada),
        }
    );

    if (resposta.ok) {
        const article = document.querySelector(`#article-${transacao.id}`);
        article.querySelector(".article-nome").textContent = novoNome;
        article.querySelector(".article-valor").textContent = novoValor;

        atualizarSaldo(); // recalcula o total
    } else {
        alert("Erro ao editar transação");
    }
}
async function deletarTransacao(id) {
    const confirmar = confirm("Tem certeza que deseja excluir esta transação?");
    if (!confirmar) return;

    const resposta = await fetch(`http://localhost:3000/transacoes/${id}`, {
        method: "DELETE",
    });

    if (resposta.ok) {
        // remove do HTML
        document.querySelector(`#article-${id}`).remove();
        atualizarSaldo(); // atualiza o total
    } else {
        alert("Erro ao deletar transação");
    }
}

// formulario
const form = document.querySelector("form");
form.addEventListener("submit", async (ev) => {
    ev.preventDefault();

    const transacoesData = {
        nome: document.querySelector("#nome").value,
        valor: document.querySelector("#valor").value,
    };
    const resposta = await fetch("http://localhost:3000/transacoes", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(transacoesData),
    });

    const salvarTransacao = await resposta.json();
    form.reset();
    renderTransicao(salvarTransacao);
    atualizarSaldo();
    console.log(salvarTransacao);
});

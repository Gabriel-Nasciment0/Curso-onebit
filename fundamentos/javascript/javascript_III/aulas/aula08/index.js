const input = document.getElementById("input");
document.getElementById("value").addEventListener("click", function () {
    input.value = "Clicou!";
    console.log(input.value);
    console.log(input.getAttribute("value"));
});

document.getElementById("type").addEventListener("click", function () {
    // input.type = input.type !== "date" ? "date" : "text";
    input.setAttribute("type", "radio");
});

document.getElementById("placeholder").addEventListener("click", function () {
    input.placeholder = "Digite algo...";
});

document.getElementById("disable").addEventListener("click", function () {
    input.setAttribute("disabled", !input.disabled);
});

document.getElementById("data").addEventListener("click", function () {
    const data = input.dataset.somethingElse;
    console.log(" o valor do atributo data-something-else e:" + data);
    input.dataset.somethingElse = "novo valor";
    console.log(
        " o valor do atributo data-something-else agora e:" +
            input.dataset.somethingElse
    );
});

function register(ev) {
    console.log(ev);
    const sectionElement = ev.currentTarget.parentNode;

    const username = sectionElement.children.username.value;
    const password = sectionElement.children.password.value;
    const passwordConfirmation =
        sectionElement.children.passwordConfirmation.value;

    if (password === passwordConfirmation) {
        alert(`Usuario ${username} Registrado`);
    } else {
        alert(`As senhas sao diferentes`);
    }
}

const button = document.getElementById("register-button");

button.addEventListener("click", register);

function removeEvent() {
    button.removeEventListener("click", register);
    alert("Evento removido");
}
button.addEventListener("mouseover", function (ev) {
    console.log(ev.currentTarget);
});

let button = document.getElementById("button");
button.addEventListener("click", function (e) {
    e.preventDefault();
    //inputs
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    //erro
    let erro = document.getElementById("erro");
    // validação
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexSenha =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    function validarEmail(email) {
        return regexEmail.test(email);
    }
    function validarSenha(senha) {
        return regexSenha.test(senha);
    }

    if (validarEmail(email) && validarSenha(senha)) {
        erro.textContent = `
    ${email} 
    Email valido
    ${senha}
    Senha valida
    `;
    } else {
        erro.textContent = `Email ou senha invalidos`;
    }
});

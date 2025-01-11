const add = document.getElementById("add");
const devs = [];
let count = 0;
const divDevs = document.getElementById("divDevs");

add.addEventListener("click", function (e) {
    let name = document.getElementById("nome").value;

    const newInputs = document.createElement("div"); // Cria um novo div para o formulário
    newInputs.id = `form_${count}`; // Atribui um ID único para cada formulário
    count++;

    // tecnologia
    let labelTecnologia = document.createElement("label");
    labelTecnologia.textContent = "Tecnologia:";
    labelTecnologia.setAttribute("for", `tecnologia_${count}`);

    let inputTecnologia = document.createElement("input");
    inputTecnologia.id = `tecnologia_${count}`;
    inputTecnologia.type = "text";
    inputTecnologia.name = `tecnologia_${count}`;
    newInputs.append(
        labelTecnologia,
        inputTecnologia,
        document.createElement("br")
    );

    // experiência 0/2
    const labelRatio01 = document.createElement("label");
    labelRatio01.setAttribute("for", `opcao01_${count}`);
    labelRatio01.textContent = "0/2 Anos";
    const inputRadio01 = document.createElement("input");
    inputRadio01.type = "radio";
    inputRadio01.id = `opcao01_${count}`;
    inputRadio01.name = `experiencia_${count}`;
    inputRadio01.value = "0-2";
    newInputs.append(labelRatio01, inputRadio01, document.createElement("br"));

    // experiência 3/4
    const labelRatio02 = document.createElement("label");
    labelRatio02.setAttribute("for", `opcao02_${count}`);
    labelRatio02.textContent = "3/4 Anos";
    const inputRadio02 = document.createElement("input");
    inputRadio02.type = "radio";
    inputRadio02.id = `opcao02_${count}`;
    inputRadio02.name = `experiencia_${count}`;
    inputRadio02.value = "3-4";
    newInputs.append(labelRatio02, inputRadio02, document.createElement("br"));

    // experiência 5+
    const labelRatio03 = document.createElement("label");
    labelRatio03.setAttribute("for", `opcao03_${count}`);
    labelRatio03.textContent = "5+ Anos";
    const inputRadio03 = document.createElement("input");
    inputRadio03.type = "radio";
    inputRadio03.id = `opcao03_${count}`;
    inputRadio03.name = `experiencia_${count}`;
    inputRadio03.value = "5+";
    newInputs.append(labelRatio03, inputRadio03, document.createElement("br"));

    // Cadastrar
    const cadastro = document.createElement("button");
    cadastro.id = "Cadastro";
    cadastro.textContent = "Cadastro";
    newInputs.append(cadastro, document.createElement("br"));

    document.body.appendChild(newInputs); // Adiciona o novo formulário à página

    cadastro.addEventListener("click", function (e) {
        e.preventDefault();

        // Pega as respostas do formulário
        let respostaTecnologia = document.getElementById(
            `tecnologia_${count}`
        ).value;
        let respostaExperiencia = document.querySelector(
            `input[name="experiencia_${count}"]:checked`
        )?.value;

        // Adiciona os dados ao array devs
        devs.push({ name, respostaTecnologia, respostaExperiencia });

        // Exibe os dados na tela
        const divDevsInfo = document.createElement("div");
        divDevsInfo.textContent = `
            Nome: ${name},
            Tecnologia: ${respostaTecnologia}, 
            Experiência: ${respostaExperiencia}`;
        divDevs.append(divDevsInfo);

        // Limpa os campos do formulário
        document.getElementById("nome").value = ""; // Limpa o nome
        document.getElementById(`tecnologia_${count}`).value = ""; // Limpa a tecnologia

        // Limpa as opções de experiência
        const radios = document.querySelectorAll(
            `input[name="experiencia_${count}"]`
        );
        radios.forEach((radio) => (radio.checked = false));

        // Remove o formulário da página
        newInputs.remove(); // Remove o formulário após o cadastro
    });
});

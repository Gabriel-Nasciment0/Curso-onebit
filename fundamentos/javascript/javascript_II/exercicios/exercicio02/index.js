let imoveis = [];
let opcao = "";
do {
    opcao = prompt(`Bem vindo ao Cadastro de imóveis
    Total de imóveis: ${imoveis.length}
    Escolha uma opção:
    1° Novo imóvel
    2° Listar imóveis
    3° Sair`);

    switch (opcao) {
        case "1":
            let imovel = {};
            imovel.proprietario = prompt("Qual é o proprietário:");
            imovel.quartos = parseFloat(prompt("Quantos quartos:"));
            imovel.banheiros = parseFloat(prompt("Quantos banheiros:"));
            imovel.garagem = prompt("Tem garagem? (sim/não)");

            const confirma = confirm(`
                Salvar imóvel?
                Proprietário: ${imovel.proprietario}
                Quartos: ${imovel.quartos}
                Banheiros: ${imovel.banheiros}
                Possui garagem? ${imovel.garagem}
            `);

            if (confirma) {
                imoveis.push(imovel);
            }
            break;

        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert(
                    "Imóvel " +
                        (i + 1) +
                        "\nProprietári o: " +
                        imoveis[i].proprietario +
                        "\nQuartos: " +
                        imoveis[i].quartos +
                        "\nBanheiros: " +
                        imoveis[i].banheiros +
                        "\nPossui Garagem? " +
                        imoveis[i].garagem
                );
            }
            break;

        case "3":
            alert("Saindo...");
            break;

        default:
            alert("Opção inválida, tente novamente.");
            break;
    }
} while (opcao !== "3");

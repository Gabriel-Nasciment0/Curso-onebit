do {
    let menu = prompt(`
        escolha uma opção 
           A) a
           b) b
           c) c
           d) d
           e) encerrar        
    
    `).toLowerCase();

    if (menu === "a" || menu === "b" || menu === "c" || menu === "d") {
        alert(`voce escolheu ${menu}`);
    } else if (menu === "e") {
        alert(`Encerrando...`);
        break;
    } else {
        alert("Erro");
    }
} while (true);

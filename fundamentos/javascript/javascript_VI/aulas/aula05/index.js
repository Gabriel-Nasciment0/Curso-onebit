// pendente - pending
// resolvida - resolved
// rejeitada - rejected
// finalizada
//exemplo explicativo
// const p = new Promise((resolve, rejected) => {
//     console.log("a Promise esta sendo executada.");
//     setTimeout(() => {
//         if (true) {
//             rejected(false);
//         }
//         console.log("resolvendo a promise");
//         resolve(true);
//     }, 1000 * 2);
// });

// console.log(p);

// setTimeout(() => {
//     console.log(p);
// }, 1000 * 3);
// exemplo de usabilidade

function execute() {
    return new Promise((resolve, reject) => {
        console.log("A promise está sendo executada.");
        setTimeout(() => {
            console.log("Resolvendo a promise...");
            resolve("Resultado");
        }, 2 * 1000);
    });
}

const p = execute();

console.log(p);

setTimeout(() => {
    console.log(p);
}, 4 * 1000);

console.log("programa iniciado");
// const timeOutId = setTimeout(() => {
//     console.log("3 segundos se passaram des de que o programa foi iniciado");
// }, 1000 * 3);

// clearTimeout(timeOutId);

let seconds = 0;

const intervalId = setInterval(() => {
    seconds += 3;
    console.log(`Se passaram ${seconds} segundos.`);
    if (seconds > 10) {
        clearInterval(intervalId);
        console.log("Tempo esgotado! Encerrando...");
    }
}, 1000 * 3);

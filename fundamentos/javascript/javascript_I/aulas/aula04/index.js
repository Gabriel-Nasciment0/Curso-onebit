let velocidade = 80;

while (velocidade > 0) {
    alert(`O carro esta a ${velocidade} KM/h`);
    velocidade -= 30;
    alert("diminuindo velocidade");
    if (velocidade <= 40) {
        break;
    }
}
alert("parou");

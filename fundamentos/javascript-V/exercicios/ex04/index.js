// Personagens para Jogo

class character {
    constructor(nome, vida, ataque, defesa) {
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }

    atacar(oponente) {
        let dano = this.ataque - oponente.defesa;
        if (dano < 0) {
            dano = 0;
        }
        oponente.vida -= dano;
    }
}

class thief extends character {
    constructor(nome, vida, ataque, defesa) {
        super(nome, vida, ataque, defesa);
    }
    atacar(oponente) {
        let dano = this.ataque * 2 - oponente.defesa;
        if (dano < 0) {
            dano = 0;
        }
        oponente.vida -= dano;
    }
}

class mage extends character {
    constructor(nome, vida, ataque, defesa, magia) {
        super(nome, vida, ataque, defesa);
        this.magia = magia;
    }
    atacar(oponente) {
        let dano = this.ataque + this.magia - oponente.defesa;
        if (dano < 0) {
            dano = 0;
        }
        oponente.vida -= dano;
    }

    cura(aliado) {
        let cura = this.magia * 2;
        aliado.vida += cura;
    }
}

class warrior extends character {
    constructor(nome, vida, ataque, defesa, escudo, posicao) {
        super(nome, vida, ataque, defesa);
        this.escudo = escudo;
        this.posicao = posicao;
    }

    atacar(oponente) {
        if (posicao === "ataque") {
            let dano = this.ataque - oponente.defesa;
            if (dano < 0) {
                dano = 0;
            }
            oponente.vida -= dano;
        } else {
            console.log("Você não pode atacar em modo de defesa");
        }
    }

    mudarPosicao() {
        if (this.posicao === "ataque") {
            this.posicao = "defesa";
            this.defesa += this.escudo;
        } else {
            this.posicao = "ataque";
            this.defesa -= this.escudo;
        }
    }
}

// Exemplo de uso

const arthur = new mage("Arthur", 90, 4, 2, 14);
const beatrice = new thief("beatrice", 140, 22, 8);
const cain = new warrior("cain", 200, 14, 12, 4);

console.table({ arthur, beatrice, cain });
cain.mudarPosicao();
arthur.atacar(cain);
beatrice.atacar(arthur);

console.table({ arthur, beatrice, cain });
cain.mudarPosicao();
cain.atacar(arthur);
arthur.cura(arthur);
beatrice.atacar(cain);

console.table({ arthur, beatrice, cain });

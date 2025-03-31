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

   if (posicao = "ataque") {
        atacar(oponente) {
        let dano = this.ataque - oponente.defesa;
        if (dano < 0) {
            dano = 0;
        }
        oponente.vida -= dano;
    }
}
   

}

// Exercício 18
// Treinando a Criação de Classes
// um atributo fullname, atribuível na instanciação
// um atributo email, atribuível na instanciação
// um atributo password, atribuível na instanciação
// um método login, que tem como parâmetros um email e uma senha e deve comparar esses parâmetros com o email e a senha do usuário e mostrar uma mensagem no console dizendo se o login foi bem sucedido ou não
// um atributo name, atribuível na instanciação
// um atributo description, atribuível na instanciação
// um atributo price, atribuível na instanciação
// um atributo inStock, inicializado sempre em 0
// um método addToStock, que tem como parâmetro a quantidade a ser adicionada em estoque e deve somar essa quantidade à variável inStock
// um método calculateDiscount, que tem como parâmetro a percentagem de desconto a ser aplicada e retorne o valor do preço com o desconto aplicado

class User {
    constructor(fullname, email, password) {
        this.fullname = fullname;
        this.email = email;
        this.password = password;
    }
    login(email, password) {
        if (email === this.email && password === this.password) {
            console.log("Login bem sucedido");
        } else {
            console.log("Login falhou");
        }
    }
}

class Product {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.inStock = 0;
    }
    addToStock(quantity) {
        this.inStock += quantity;
    }
    calculateDiscount(discount) {
        return this.price - (this.price * discount) / 100;
    }
}

const gabriel = new User(
    "Gabriel Henrique",
    "gabrielHenrique@gmail.com",
    "123456"
);
gabriel.login("gabrielHenrique@gmail.com", "123456");
gabriel.login("gabrielHenrique@gmail.com", "654321");
const phone = new Product("Smartphone", "Samsung Galaxy", 2000);

console.log(gabriel);
console.log(phone);
phone.addToStock(1);
console.log(phone);
console.log(phone.calculateDiscount(10));

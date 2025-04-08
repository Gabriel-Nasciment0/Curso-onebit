class Wallet {
    #amount;
    #username;
    constructor() {
        this.#amount = 100.99 * 100; //10099
    }

    get amount() {
        return this.#amount / 100; //100.99
    }

    set username(newUsername) {
        if (typeof newUsername === "string") {
            this.#username = newUsername;
        } else {
            console.log("Invalid username. It must be a string.");
        }
    }
    get username() {
        return this.#username;
    }
}
const myWallet = new Wallet();
myWallet.username = "Gabriel";

console.log(myWallet.amount); //100.99
console.log(myWallet.username); //Gabriel

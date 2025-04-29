class reservation {
    constructor(guests, room, days) {
        this.guests = guests;
        this.room = room;
        this.days = days;
        this.total = days * reservation.baseFee;
    }

    static baseFee = 150;

    static showBaseFee() {
        console.log(`Base fee: ${this.baseFee}`);
    }

    static get premiumFee() {
        return reservation.baseFee * 1.5;
    }
}
reservation.showBaseFee();
const reservation1 = new reservation(3, "201", 5);
console.log(reservation1);
console.log(`Premium fee is $${reservation.premiumFee}`);

reservation.baseFee = 200;

const reservation2 = new reservation(2, "202", 2);
console.log(reservation2);
console.log(`Premium fee is $${reservation.premiumFee}`);

//polimorfismo

class veiacle {
    move() {
        console.log("Moving...");
    }
}
class car extends veiacle {
    move() {
        console.log("Car is moving...");
    }
}

class ship extends veiacle {
    move() {
        console.log("Ship is sailing...");
    }
}

class airplane extends veiacle {
    move(speed) {
        console.log(`Airplane is flying... ${speed}KM/H`);
    }
}

const delorean = new car();
const titanic = new ship();
const boeing = new airplane();
const vehicles = [delorean, titanic, boeing];

// delorean.move();
// titanic.move();
// boeing.move(900);
// console.log("Polimorfismo: ");

function start(veiacle) {
    console.log("Starting...");
    veiacle.move(1000);
}

start(delorean);
start(titanic);
start(boeing);
// console.log("Polimorfismo: ");

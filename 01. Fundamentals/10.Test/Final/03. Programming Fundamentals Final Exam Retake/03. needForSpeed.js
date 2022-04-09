function needForSpeed(input) {
    let n = Number(input.shift());
    let cars = {}
    
    for (let i = 0; i < n; i++) {
        let tokens = input.shift().split("|");
        let car = tokens[0];
        let mileage = Number(tokens[1]);
        let fuel = Number(tokens[2]);

        cars[car] = {
            mileage,
            fuel,
        }
    }

    while (input[0] !== "Stop") {
        let tokens = input.shift().split(" : ");
        let command = tokens[0];
        let car = tokens[1];
        let p1 = tokens[2];
        let p2 = tokens[3]

        if (command === "Drive") {
            let distance = Number(p1);
            let fuel = Number(p2);

            if (cars[car].fuel < fuel) {
                console.log("Not enough fuel to make that ride");
                continue;
            } else {
                cars[car].fuel -= fuel;
                cars[car].mileage += distance;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            }

            if (cars[car].mileage >= 100000) {
                console.log(`Time to sell the ${car}!`);
                delete cars[car];
            }

        } else if (command === "Refuel") {
            let reFuel = Number(p1);

            let refill = Math.min((75 - cars[car].fuel), reFuel);

            if (refill > 0) {
                cars[car].fuel += refill;
                console.log(`${car} refueled with ${refill} liters`);
            }

        } else if (command === "Revert") {
            let revertDistance = Number(p1);

            if (cars[car].mileage - revertDistance < 10000) {
                cars[car].mileage = 10000;
                continue;
            } else {
                cars[car].mileage -= revertDistance;
                console.log(`${car} mileage decreased by ${revertDistance} kilometers`);
            }
        }
    }

    for (let [car, entries] of Object.entries(cars)) {
        console.log(`${car} -> Mileage: ${entries.mileage} kms, Fuel in the tank: ${entries.fuel} lt.`);
    }
}

needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
])
console.log("---");
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
])
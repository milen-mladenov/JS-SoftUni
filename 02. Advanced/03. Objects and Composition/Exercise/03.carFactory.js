function solve(requirements) {
    let car = {};
 
    car.model = requirements.model;
 
    if (requirements.power <= 90) {
        car.engine = { power: 90, volume: 1800 }
    } else if (requirements <= 120) {
        car.engine = { power: 120, volume: 2400 }
    } else if (requirements <= 200) {
        car.engine = { power: 200, volume: 3500 }
    }
 
    car.carriage = { type: requirements.carriage, color: requirements.color }
 
    let wheels = [];
 
    while (wheels.length < 4) {
        wheels.push(requirements.wheelsize)
    }
    car.wheels = wheels
 
 
    return car
}
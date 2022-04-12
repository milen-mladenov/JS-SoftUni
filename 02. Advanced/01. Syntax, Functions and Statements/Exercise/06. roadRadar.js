function roadRadar(speed, location) {

    let speedLimits = {};
    speedLimits.residential = 20;
    speedLimits.city = 50;
    speedLimits.interstate = 90;
    speedLimits.motorway = 130;

    let diference = speed - speedLimits[location];
    let status;
    if (diference > 40) {
        status = "reckless driving"
    } else if (diference > 20 && diference <= 40) {
        status = "excessive speeding"
    } else if (diference > 0 && diference <= 20) {
        status = "speeding";
    }
    let locationLimit = speedLimits[location]
    switch (location) {
        case "residential": if (speed <= locationLimit) {
            console.log(`Driving ${speed} km/h in a ${locationLimit} zone`);
        } else {
            console.log(`The speed is ${diference} km/h faster than the allowed speed of ${locationLimit} - ${status}`);
        } break;
        case "city": if (speed <= locationLimit) {
            console.log(`Driving ${speed} km/h in a ${locationLimit} zone`);
        } else {
            console.log(`The speed is ${diference} km/h faster than the allowed speed of ${locationLimit} - ${status}`);
        } break;
        case "interstate": if (speed <= locationLimit) {
            console.log(`Driving ${speed} km/h in a ${locationLimit} zone`);
        } else {
            console.log(`The speed is ${diference} km/h faster than the allowed speed of ${locationLimit} - ${status}`);
        } break;
        case "motorway": if (speed <= locationLimit) {
            console.log(`Driving ${speed} km/h in a ${locationLimit} zone`);
        } else {
            console.log(`The speed is ${diference} km/h faster than the allowed speed of ${locationLimit} - ${status}`);
        } break;
    }
}

roadRadar(40, 'city')
console.log("------");
roadRadar(21, 'residential')
console.log("------");
roadRadar(120, 'interstate')
console.log("------");
roadRadar(200, 'motorway')
function theLift(input) {

    let people = Number(input.shift());
    let wagons = input.shift()
    let liftSpace = wagons.split(" ").map(Number);
    let freeSpace = true;
    for (let i = 0; i < liftSpace.length; i++) {
        let space = 4 - liftSpace[i];
        if (people <= space) {
            space = people;
        }
        if (space > 0) {
            liftSpace[i] += space;
            people -= space;
        }
    }

    for (let cart of liftSpace) {
        if (cart !== 4) {
            freeSpace = false;
        }
    }

    if (people > 0) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(liftSpace.join(" "));
    } else if (freeSpace) {
        console.log(liftSpace.join(" "));
    } else {
        console.log(`The lift has empty spots!`);
        console.log(liftSpace.join(" "));
    }
}

theLift([
    "15",
    "0 0 0 0 0"
])
console.log("-----");
theLift([
    "20",
    "0 2 0"
])
console.log("-----");
theLift([
    "19",
    "0 0 0 0 0"
])
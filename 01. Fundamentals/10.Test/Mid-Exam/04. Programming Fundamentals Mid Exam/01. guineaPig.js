function guineaPig(input) {

    let foodAmount = Number(input[0]) * 1000;
    let hayAmount = Number(input[1]) * 1000;
    let coverAmount = Number(input[2]) * 1000;
    let guinieaPigWeight = Number(input[3]) * 1000;
    let neededHay;
    let coverNeeded = guinieaPigWeight / 3;
    let hasFood = true;
    for (let i = 1; i <= 30; i++) {
        foodAmount -= 300;
        neededHay = foodAmount * 0.05;

        if (i % 2 === 0) {
            hayAmount -= neededHay;

        }
        if (i % 3 === 0) {
            coverAmount -= coverNeeded;
        }

        if (foodAmount <= 0 || hayAmount <= 0 || coverAmount <= 0) {
            hasFood = false;
            console.log("Merry must go to the pet store!");
            break;
        }
    }

    foodAmount = foodAmount / 1000
    hayAmount = hayAmount / 1000
    coverAmount = coverAmount / 1000
    if (hasFood) {
        console.log(`Everything is fine! Puppy is happy! Food: ${foodAmount.toFixed(2)}, Hay: ${hayAmount.toFixed(2)}, Cover: ${coverAmount.toFixed(2)}.`);
    }
}

guineaPig(["10",
    "5",
    "5.2",
    "1"])

console.log("-------");

guineaPig(["1",
    "1.5",
    "3",
    "1.5"
])

console.log("-------");

guineaPig(["9",
    "5",
    "5.2",
    "1"])

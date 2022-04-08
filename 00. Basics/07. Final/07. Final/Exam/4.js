function catFood(input) {

    let index = 0;
    let numberOfCats = Number(input[index++]);
    let smallCats = 0;
    let mediumCats = 0;
    let largeCats = 0;
    let totalFoodEaten = 0;

    for (let i = 1; i <= numberOfCats; i++) {
        let foodForCat = Number(input[index++]);
        if (foodForCat >= 300 && foodForCat < 400) {
            largeCats++;
            totalFoodEaten += foodForCat;
        } else if (foodForCat >= 200 && foodForCat < 300) {
            mediumCats++;
            totalFoodEaten += foodForCat;
        } else if (foodForCat >= 100 && foodForCat < 200) {
            smallCats++;
            totalFoodEaten += foodForCat;
        }
    }

    let moneyForFood = totalFoodEaten * 0.01245;

    console.log(`Group 1: ${smallCats} cats.`);
    console.log(`Group 2: ${mediumCats} cats.`);
    console.log(`Group 3: ${largeCats} cats.`);
    console.log(`Price for food per day: ${moneyForFood.toFixed(2)} lv.`);
}

catFood
    (["6",
        "102",
        "236",
        "123",
        "399",
        "342",
        "222"])
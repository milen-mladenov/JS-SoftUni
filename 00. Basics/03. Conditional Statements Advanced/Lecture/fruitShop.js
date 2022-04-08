function fruitShop(input) {

    let fruit = input[0];
    let day = input[1];
    let amount = Number(input[2]);
    let finalSum = 0;

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday" || day === "Saturday" || day === "Sunday") {
        if (fruit === "banana" || fruit === "apple" || fruit === "orange" || fruit === "grapefruit" || fruit === "kiwi" || fruit === "pineapple" || fruit === "grapes") {
            if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
                switch (fruit) {
                    case "banana": finalSum = amount * 2.50; break;
                    case "apple": finalSum = amount * 1.20; break;
                    case "orange": finalSum = amount * 0.85; break;
                    case "grapefruit": finalSum = amount * 1.45; break;
                    case "kiwi": finalSum = amount * 2.70; break;
                    case "pineapple": finalSum = amount * 5.50; break;
                    case "grapes": finalSum = amount * 3.85; break;
                }
            } else if (day === "Saturday" || day === "Sunday") {
                switch (fruit) {
                    case "banana": finalSum = amount * 2.70; break;
                    case "apple": finalSum = amount * 1.25; break;
                    case "orange": finalSum = amount * 0.90; break;
                    case "grapefruit": finalSum = amount * 1.60; break;
                    case "kiwi": finalSum = amount * 3; break;
                    case "pineapple": finalSum = amount * 5.60; break;
                    case "grapes": finalSum = amount * 4.20; break;
                }
            }
            console.log(finalSum.toFixed(2));
        } else {
            console.log("error");
        }
    } else {
        console.log("error");
    }
}

fruitShop(["apple",
    "Tuesday",
    "2"])


function smallShop(input) {

    let product = input[0];
    let location = input[1];
    let quantity = Number(input[2]);

    let total = 0;

    if (location === "Sofia") {
        switch (product) {
            case "coffee": total = quantity * 0.50; break;
            case "water": total = quantity * 0.80; break;
            case "beer": total = quantity * 1.20; break;
            case "sweets": total = quantity * 1.45; break;
            case "peanuts": total = quantity * 1.60; break;
            default: "Error"; break;
        }
    } else if (location === "Plovdiv") {
        switch (product) {
            case "coffee": total = quantity * 0.40; break;
            case "water": total = quantity * 0.70; break;
            case "beer": total = quantity * 1.15; break;
            case "sweets": total = quantity * 1.30; break;
            case "peanuts": total = quantity * 1.50; break;
            default: "Error"; break;
        }
    } else if (location === "Varna") {
        switch (product) {
            case "coffee": total = quantity * 0.45; break;
            case "water": total = quantity * 0.70; break;
            case "beer": total = quantity * 1.10; break;
            case "sweets": total = quantity * 1.35; break;
            case "peanuts": total = quantity * 1.55; break;
            default: "Error"; break;
        }
    }
    console.log(total);
}
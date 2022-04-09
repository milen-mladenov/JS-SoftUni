function footballSouvenirs(input) {

    let team = input[0];
    let item = input[1];
    let amount = Number(input[2]);
    let price = 0;
    let correct = true;

    switch (team) {
        case "Argentina":
            if (item === "flags") {
                price = 3.25;
            } else if (item === "caps") {
                price = 7.20;
            } else if (item === "posters") {
                price = 5.10;
            } else if (item === "stickers") {
                price = 1.25;
            } else {
                console.log(`Invalid stock!`);
                correct = false;
            } break;
        case "Brazil":
            if (item === "flags") {
                price = 4.20;
            } else if (item === "caps") {
                price = 8.50;
            } else if (item === "posters") {
                price = 5.35;
            } else if (item === "stickers") {
                price = 1.20;
            } else {
                console.log(`Invalid stock!`);
                correct = false;
            } break;
        case "Croatia":
            if (item === "flags") {
                price = 2.75;
            } else if (item === "caps") {
                price = 6.90;
            } else if (item === "posters") {
                price = 4.95;
            } else if (item === "stickers") {
                price = 1.10;
            } else {
                console.log(`Invalid stock!`);
                correct = false;
            } break;
        case "Denmark":
            if (item === "flags") {
                price = 3.10;
            } else if (item === "caps") {
                price = 6.50;
            } else if (item === "posters") {
                price = 4.80;
            } else if (item === "stickers") {
                price = 0.90;
            } else {
                console.log(`Invalid stock!`);
                correct = false;
            } break;
        default: console.log(`Invalid country!`);
            correct = false;
    }

    let moneySpend = price * amount;

    if (correct) {
        console.log(`Pepi bought ${amount} ${item} of ${team} for ${moneySpend.toFixed(2)} lv.`);
    }
}

footballSouvenirs(["Denmark",
    "caps",
    "8"])
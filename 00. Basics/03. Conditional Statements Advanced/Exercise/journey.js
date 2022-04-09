function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let prise = 0;

    switch (season) {
        case "summer":
            if (budget <= 100) {
                prise = budget * 0.70;
                console.log("Somewhere in Bulgaria");
            } else if (budget <= 1000) {
                prise = budget * 0.60;
                console.log("Somewhere in Balkans");
            } else {
                prise = budget * 0.10;
                console.log("Somewhere in Europe");
            } break;
        case "winter":
            if (budget <= 100) {
                prise = budget * 0.30;
                console.log("Somewhere in Bulgaria");
            } else if (budget <= 1000) {
                prise = budget * 0.20;
                console.log("Somewhere in Balkans");
            } else {
                prise = budget * 0.10;
                console.log("Somewhere in Europe");
            } break;
        default: console.log("Somewhere in Europe");
    }

    let diff = Math.abs(budget - prise);
    if (season === "summer" && budget <= 1000) {
        console.log(`Camp - ${diff.toFixed(2)}`);
    } else {
        console.log(`Hotel - ${diff.toFixed(2)}`);
    }
}
journey(["100", "summer"])



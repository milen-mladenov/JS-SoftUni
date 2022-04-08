function godzillaVsKong(input) {

    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let costumePrise = Number(input[2]);

    let decor = budget * 0.10;
    let costumes = extras * costumePrise;

    if (extras >= 150) {
        costumes = costumes * 0.90;
    }

    let totalCost = decor + costumes;
    let amountLeft = Math.abs(totalCost - budget).toFixed(2);

    if (totalCost > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${amountLeft} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${amountLeft} leva left.`);
    }

}

godzillaVsKong(["9587.88",
"222",
"55.68"])

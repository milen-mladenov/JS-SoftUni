function foodDelivery(input) {

    let chickenMenu = Number(input[0]) * 10.35;
    let fishMenu = Number(input[1]) * 12.40;
    let veganMenu = Number(input[2]) * 8.15;

    let desert = (chickenMenu + fishMenu + veganMenu) * 0.2;
    let totalCost = chickenMenu + fishMenu + veganMenu + desert + 2.50;

    console.log(totalCost);
}

foodDelivery(["2 ",
    "4 ",
    "3 "])
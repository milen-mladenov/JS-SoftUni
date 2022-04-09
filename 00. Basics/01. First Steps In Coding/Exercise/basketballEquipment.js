function basketballEquipment(input){

    let yearPrice = Number(input[0]);
    let boots = yearPrice - yearPrice * 0.40;
    let uniform = boots - (boots * 0.20)
    let ball = uniform / 4;
    let accessories = ball / 5;

    let totalCost = yearPrice + boots + uniform + ball + accessories;

    console.log(totalCost);
}

basketballEquipment(["365"])
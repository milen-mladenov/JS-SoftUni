function suppliesforSchool(input){

    let stackOfPens = Number(input[0] * 5.80);
    let stackOfMarkers = Number(input[1] * 7.20);
    let cleaningSupply = Number(input[2] * 1.20);
    let discount = Number(input[3] / 100);

    let totalSum = stackOfPens + stackOfMarkers + cleaningSupply;
    let sumWithDiscount = totalSum - (totalSum * discount);

    console.log(sumWithDiscount);

}

suppliesforSchool(["4 ",
"2 ",
"5 ",
"13 "])
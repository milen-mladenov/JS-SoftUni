function integerAndFloat(num1, num2, num3){

    let sum = num1 + num2 + num3;
    let type = Math.round(sum)
    if (sum === type){
        console.log(`${sum} - Integer`);
    } else{
        console.log(`${sum} - Float`);
    }
}
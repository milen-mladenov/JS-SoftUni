function yardGreening(input){

    let yard = Number(input[0]);
    let yardSum = yard * 7.61;
    let discount = yardSum * 0.18;
    let finalSum = yardSum - discount 

    console.log(`The final price is: ${finalSum} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
yardGreening(["550"])
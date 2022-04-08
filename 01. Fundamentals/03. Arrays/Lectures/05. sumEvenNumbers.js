function sumEvenNumbers(input){

    let sum = 0;

    for(let index = 0; index < input.length; index++ ){
        element = Number(input[index]);    
        if(element % 2 === 0){
            sum += element;
        } 
    }
    console.log(sum);
}

sumEvenNumbers(['1','2','3','4','5','6'])
sumEvenNumbers(['3','5','7','9'])
sumEvenNumbers(['2','4','6','8','10'])
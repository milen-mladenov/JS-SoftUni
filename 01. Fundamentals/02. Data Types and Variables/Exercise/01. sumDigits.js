function sumDigits(input){
    let digitAsString = input.toString();
    let sum = 0;
    for(let i = 0; i < digitAsString.length;i++){
        let number = Number(digitAsString[i]);
        sum += number;
    }

    console.log(sum);
}

sumDigits(245678)
function negativeorPositiveNumbers(input){

    let result = [];

    for(let num of input){
        let number = Number(num)
        let index = 0;
        if(number < 0){
            result.unshift(number)
        } else {
            result.push(number)
        }
    }
    for(let print of result){
        print = Number(print);
        console.log(print);
    }
}

negativeorPositiveNumbers(['7', '-2', '8', '9'])
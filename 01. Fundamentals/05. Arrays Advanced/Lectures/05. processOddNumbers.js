function processOddNumbers(input){

    let arr = [];
    for(let i = 0; i < input.length;i++){
       if(i % 2 === 0){
           continue;
       } 
       arr.push(input[i]*2)
    }
    console.log(arr.reverse().join(" "));
}

processOddNumbers([10, 15, 20, 25])
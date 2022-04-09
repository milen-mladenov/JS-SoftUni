function smallestTwoNumbers(input){

    let sorted = input.sort(function(a, b){return a-b})

    console.log(sorted[0],sorted[1]);
}

smallestTwoNumbers([30, 15, 50, 5])
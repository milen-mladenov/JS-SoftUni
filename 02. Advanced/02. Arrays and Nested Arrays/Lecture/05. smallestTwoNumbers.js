function smallestNumbers(input){

    let sorted = input.sort((a,b) => a - b)
    console.log(`${sorted[0]} ${sorted[1]}`);
}

smallestNumbers([30, 15, 50, 5])
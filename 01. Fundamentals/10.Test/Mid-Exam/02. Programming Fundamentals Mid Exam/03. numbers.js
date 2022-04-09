function numbers(input) {

    let numbers = input.split(" ").map(Number);
    let length = numbers.length;
    let aboveAverage = [];
    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }
    let average = sum / length;

    for (let num of numbers) {
        if (num > average) {
            aboveAverage.push(num);
        }
    }
    aboveAverage = aboveAverage.sort((a, b) => b - a);
   if(aboveAverage < 1){
       console.log("No");
       return;
   }
    let print = [];
    for (let i = 0; i < 5; i++) {
        if(i >= aboveAverage.length){
            break;
        }
        print.push(aboveAverage[i]);
    }
    console.log(print.join(" "));
}

numbers('10 20 30 40 50')
console.log("---------");
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
console.log("---------");
numbers('1')
console.log("---------");
numbers('-1 -2 -3 -4 -5 -6')
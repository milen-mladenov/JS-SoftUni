function train(input){
    let wagons = input.shift().split(" ").map(Number);
    let maxPassengers = Number(input.shift())

    while(input.length > 0){
        let tokens = input.shift().split(" ");
        if(tokens[0] === "Add"){
            wagons.push(Number(tokens[1]));
            continue;
        } 
       for(let i = 0; i < wagons.length;i++){
           tokens = Number(tokens);
           if(wagons[i] + tokens <= maxPassengers){
               wagons[i] += tokens;
               break;
           }
       }
    }
    console.log(wagons.join(" "));
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)
console.log("======");
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
)
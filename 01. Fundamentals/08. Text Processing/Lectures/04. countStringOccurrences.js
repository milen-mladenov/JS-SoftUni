function solve(sentance, word){
    let arrWords = sentance.split(" ");
    let counter = 0;
    for(let currWord of arrWords){
        if(currWord === word){
            counter++;
        }
    }
    console.log(counter);
}

solve('This is a word and it also is a sentence',
'is')
console.log("-----");
solve('softuni is great place for learning new programming languages',
'softuni')
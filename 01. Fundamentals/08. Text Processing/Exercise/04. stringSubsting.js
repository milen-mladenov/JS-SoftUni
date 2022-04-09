function stringSubstring(word, sentance){

    let arr = sentance.split(" ")
    let hasWord = false;

    for(let curWord of arr){
        if(curWord.toLowerCase() == word){
            hasWord = true;
        } 
    }

    if(hasWord){
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

stringSubstring('javascript',
'JavaScript is the best programming language'
);
console.log("-----");
stringSubstring('python',
'JavaScript is the best programming language')
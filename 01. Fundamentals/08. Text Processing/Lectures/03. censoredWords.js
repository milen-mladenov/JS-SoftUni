function censoredWords(sentance, word){
    let print = sentance.replace(word, "*".repeat(word.length));
    while(print.includes(word)){
        print = print.replace(word, "*".repeat(word.length))
    }
    console.log(print);
}

censoredWords('A small sentence with some words', 'small')

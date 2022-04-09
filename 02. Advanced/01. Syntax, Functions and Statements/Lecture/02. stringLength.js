function stringLength(word1, word2, word3){

    let length = word1.length + word2.length + word3.length;
    console.log(length);
    console.log(Math.floor(length / 3));
}

stringLength('chocolate', 'ice cream', 'cake')
stringLength('pasta', '5', '22.3');
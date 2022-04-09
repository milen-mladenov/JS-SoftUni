function pascalSplitter(input) {

    let words = [];
    let curWord = input[0];
    for (let i = 1; i < input.length; i++) {
        let curChar = input.charAt(i);
        if (curChar.toUpperCase() !== curChar) {
            curWord = curWord.concat(input[i])

        } else {
            words.push(curWord);
            curWord = input[i];
        }
    }
    words.push(curWord);
    console.log(words.join(", "));
}

pascalSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
console.log("=====");
pascalSplitter('HoldTheDoor')
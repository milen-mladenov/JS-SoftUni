function sumAlpha(input) {
    let counter = 0;
    let charvalue = ['a', 1, 'e', 2, 'i', 3, 'o', 4, 'u', 5];
    let word = input[0];

    for (let i = 0; i < word.length; i++) {
        for (let n = 0; n < charvalue.length; n++) {
            if (word[i].includes(charvalue[n])) {
                counter += charvalue[n + 1];
            }
        }
    }

    console.log(counter);
}
sumAlpha(["hello"])
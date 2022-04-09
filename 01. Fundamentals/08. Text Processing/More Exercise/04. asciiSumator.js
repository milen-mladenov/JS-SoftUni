function asciiSumator(input) {
    let start = input[0].charCodeAt();
    let end = input[1].charCodeAt();
    let sum = 0;

    if (end < start) {
        let temp = start;
        start = end;
        end = temp;

    }

    for (let curChar of input[2]) {
        let char = curChar.charCodeAt();

        if (char > start && char < end) {
            sum += char;
        }
    }

    console.log(sum);
}

asciiSumator(['.',
    '@',
    'dsg12gr5653feee5'])
asciiSumator(['?',
    'E',
    '@ABCEF']
)
asciiSumator(['a',
    '1',
    'jfe392$#@j24ui9ne#@$']
)
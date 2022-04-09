function charsInRange(char1, char2) {
    let start = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
    let end = Math.max(char2.charCodeAt(0), char1.charCodeAt(0));
    let arr = [];

    for (let index = start + 1; index < end; index++) {
        arr.push(String.fromCharCode(index));
    }

    console.log(arr.join(" "));
}

charsInRange('a',
    'd'
)
console.log("===");
charsInRange('#',
    ':'
)
console.log("----");
charsInRange('C',
    '#'
)
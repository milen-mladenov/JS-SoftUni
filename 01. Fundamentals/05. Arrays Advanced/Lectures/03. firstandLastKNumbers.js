function firstandLastKNumbers(input) {
    let n = input.shift();
    console.log(input.slice(0, n).join(" "));
    console.log(input.slice(-n).join(" "));
}

firstandLastKNumbers([2,
    7, 8, 9]
)
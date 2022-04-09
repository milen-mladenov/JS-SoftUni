function distinctArray(input) {

    let arr = [];
    for (let i = 0; i < input.length; i++) {
        if (!arr.includes(input[i])) {
            arr.push(input[i]);
        }
    }
    console.log(arr.join(" "));
}

distinctArray([1, 2, 3, 4])
console.log("===========");
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
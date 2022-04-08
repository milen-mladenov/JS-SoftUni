function maxNumber(input) {
    let print = [];

    for (let i = 0; i < input.length; i++) {
        let currentInt = input[i];
        let isTrue = true;
        for (let j = i + 1; j < input.length + 1; j++) {
            if (currentInt <= input[j]) {
                ;
                isTrue = false;
                break;
            }
        }
        if (isTrue) {
            print.push(currentInt);
        }
    }
    console.log(print.join(" "));
}

maxNumber([1, 4, 3, 2])
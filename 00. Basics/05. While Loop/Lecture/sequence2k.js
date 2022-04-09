function sequence2k(input) {

    let index = 0;
    let final = Number(input[index++]);
    let number = 1;
    while (number <= final) {
        console.log(number);
        number = number * 2 + 1;
    }
}

sequence2k(["8"])
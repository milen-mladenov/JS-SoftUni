function sortNumbers(num1, num2, num3) {

    if (num1 >= num2 && num1 >= num3) {
        console.log(num1);
        num1 = Number.MIN_SAFE_INTEGER;
    } else if (num2 >= num1 && num2 >= num3) {
        console.log(num2);
        num2 = Number.MIN_SAFE_INTEGER;
    } else if (num3 >= num1 && num3 >= num2) {
        console.log(num3);
        num3 = Number.MIN_SAFE_INTEGER;
    }
    if (num1 >= num2 && num1 >= num3) {
        console.log(num1);
        num1 = Number.MIN_SAFE_INTEGER;
    } else if (num2 >= num1 && num2 >= num3) {
        console.log(num2);
        num2 = Number.MIN_SAFE_INTEGER;
    } else if (num3 >= num1 && num3 >= num2) {
        console.log(num3);
        num3 = Number.MIN_SAFE_INTEGER;
    }
    if (num1 >= num2 && num1 >= num3) {
        console.log(num1);
        num1 = Number.MIN_SAFE_INTEGER;
    } else if (num2 >= num1 && num2 >= num3) {
        console.log(num2);
        num2 = Number.MIN_SAFE_INTEGER;
    } else if (num3 >= num1 && num3 >= num2) {
        console.log(num3);
        num3 = Number.MIN_SAFE_INTEGER;
    }
}

sortNumbers(2, 0, 0)
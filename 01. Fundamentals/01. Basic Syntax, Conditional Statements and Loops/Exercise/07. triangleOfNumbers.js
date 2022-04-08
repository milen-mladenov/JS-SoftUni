
function triangleOfNumbers(num) {

    for (let i = 1; i <= num; i++) {
        let print = "";
        for (let n = 1; n <= i; n++) {
            print += i + " ";
        }
        console.log(print);
    }
}

triangleOfNumbers(3)
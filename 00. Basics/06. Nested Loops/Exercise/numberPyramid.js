function numberPyramid(input) {

    let num = Number(input[0]);
    let print = ""
    let current = 1;
    let isBigger = false;

    for (let rows = 1; rows <= num; rows++) {
        for (cols = 1; cols <= rows; cols++) {
            if (current > num) {
                isBigger = true;
                break;
            }
            print += current + " ";
            current++;
        }
        console.log(print);
        print = "";
        if (isBigger) {
            break;
        }
    }
}

numberPyramid(["7"])
function histogram(input) {

    let index = 0;
    let totalNumbers = input[index];
    index++;
    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;

    for (let i = 1; i <= totalNumbers; i++) {
        if (input[i] < 200) {
            p1Counter++;
        } else if (input[i] >= 200 && input[i] < 400) {
            p2Counter++;
        } else if (input[i] >= 400 && input[i] < 600) {
            p3Counter++;
        } else if (input[i] >= 600 && input[i] < 800) {
            p4Counter++;
        } else {
            p5Counter++;
        }
    }
    let p1 = p1Counter / totalNumbers * 100;
    let p2 = p2Counter / totalNumbers * 100;
    let p3 = p3Counter / totalNumbers * 100;
    let p4 = p4Counter / totalNumbers * 100;
    let p5 = p5Counter / totalNumbers * 100;

    console.log(p1.toFixed(2) + "%");
    console.log(p2.toFixed(2) + "%");
    console.log(p3.toFixed(2) + "%");
    console.log(p4.toFixed(2) + "%");
    console.log(p5.toFixed(2) + "%");
}

histogram(["3",
    "1",
    "2",
    "999"])


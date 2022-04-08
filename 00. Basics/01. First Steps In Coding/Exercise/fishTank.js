function fishTank(input) {

    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3] / 100);

    let volumeCM = lenght * width * height * 0.001;
    let waterRequired = volumeCM * (1 - percent);

    console.log(waterRequired);
}

fishTank(["85 ",
    "75 ",
    "47 ",
    "17 "])
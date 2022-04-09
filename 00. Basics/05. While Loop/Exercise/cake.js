function cake(input) {

    let index = 0;
    let cakeLength = Number(input[index++]);
    let cakeWigth = Number(input[index++]);
    let cakeSizeStart = cakeLength * cakeWigth;
    let cakeSize = cakeSizeStart;
    let haveCake = true;
    let command = input[index++]

    while (command !== "STOP") {
        let piesesCake = Number(command);
        let cakeLeft = cakeSize - piesesCake
        cakeSize -=piesesCake;

        if (cakeLeft <= 0) {
            haveCake = false;
            break;
        }
        command = input[index++];
    }

    let diff = Math.abs(cakeSize);

    if (haveCake) {
        console.log(`${diff} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${diff} pieces more.`);
    }
}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])
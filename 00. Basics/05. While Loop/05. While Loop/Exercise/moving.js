function moving(input){

    let index = 0;
    let roomHight = Number(input[index++]);
    let roomWidth = Number(input[index++]);
    let roomDim = Number(input[index++]);
    let roomSize = roomHight * roomWidth * roomDim;
    let command = input[index++];
    let spaceLeft = roomSize;
    let haveSpace = true;

    while(command !== "Done"){
        let boxSize = Number(command);
        spaceLeft -= boxSize;
        if (spaceLeft <= 0){
            haveSpace = false;
            break;
        }
        command = input[index++];
    }

    let diff = Math.abs(spaceLeft)
    if (haveSpace){
        console.log(`${diff} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${diff} Cubic meters more.`);
    }
}

moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])
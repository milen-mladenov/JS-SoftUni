
function thePyramid(base, increment) {

    let row = base;
    let height = increment;
    let stoneCounter = 0;
    let marbleCounter = 0;
    let lapisCounter = 0;
    let goldCounter = 0;
    let totalHeight = 0;
    let steps = 1;

    while (row > 0) {
        if (steps % 5 === 0) {
            lapisCounter += row * row;
            row -= 2;
            stoneCounter += row * row;
            continue;
        } 
        if (row <= 2){
            goldCounter += row * row;
            break;
        }
        marbleCounter += Math.pow(row - 2, 2) * height
        row -= 2;
        stoneCounter += row * row;
        steps++;
    }

    totalHeight = steps * height
    console.log(`Stone required: ${stoneCounter}`);
    console.log(`Marble required: ${marbleCounter*height}`);
    console.log(`Lapis Lazuli required: ${Math.floor(lapisCounter*height)}`);
    console.log(`Gold required: ${goldCounter}`);
    console.log(`Final pyramid height: ${Math.ceil(totalHeight)}`);
}

thePyramid(11, 0.75)
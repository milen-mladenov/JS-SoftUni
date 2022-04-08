function repainting(input){

    let floorCover = (Number(input[0]) + 2) * 1.5;
    let paint = (Number(input[1]) * 1.1) * 14.50;
    let desolver = Number(input[2]) * 5;
    let hoursWorked = Number(input[3]);

    let materials = floorCover + paint + desolver + 0.40;
    let painter = (materials * 0.3) * hoursWorked;

    let totalPrise = painter + materials;

    console.log(totalPrise);
}

repainting(["10","11","4","8"])
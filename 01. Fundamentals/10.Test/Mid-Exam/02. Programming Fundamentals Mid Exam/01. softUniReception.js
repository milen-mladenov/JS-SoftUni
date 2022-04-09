function softUniReception(input) {

    input = input.map(Number);
    let efficiency = input[0] + input[1] + input[2];
    let students = input[3];
    let hours = 0


    while (students > 0) {
        hours++
        if (hours % 4 === 0 && hours !== 0) {
            hours++
        }
        students -= efficiency

    }
    console.log(`Time needed: ${hours}h.`);
}

softUniReception(['5', '6', '4', '20'])
console.log("--------");
softUniReception(['1', '2', '3', '45'])
console.log("--------");
softUniReception(['3', '2', '5', '40'])
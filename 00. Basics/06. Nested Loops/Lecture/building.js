function building(input) {

    let index = 0;
    let floor = Number(input[index++]);
    let apartments = Number(input[index++]);


    for (let f = floor; f >= 1; f--) {
        let print = "";
        for (let ap = 0; ap < apartments; ap++) {
            if (f === floor) {
                print += `L${f}${ap} `
            } else if (f % 2 === 0) {
                print += `O${f}${ap} `
            } else {
                print += `A${f}${ap} `
            }
        }
        console.log(print);
    }
}

building(["1", "4"])
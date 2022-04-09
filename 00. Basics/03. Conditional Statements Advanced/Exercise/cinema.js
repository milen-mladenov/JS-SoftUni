function cinema(input) {

    let movieType = input[0];
    let rolls = Number(input[1]);
    let colons = Number(input[2]);

    let totalSeats = rolls * colons;
    let income = 0;

    switch (movieType) {
        case "Premiere": income = totalSeats * 12.00; break;
        case "Normal": income = totalSeats * 7.50; break;
        case "Discount": income = totalSeats * 5.00; break;
    } console.log(`${income.toFixed(2)} leva`);
}

cinema(["Normal",
    "21",
    "13"])
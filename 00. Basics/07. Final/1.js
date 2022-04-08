function movie(input) {

    let name = input[0];
    let totalDays = Number(input[1]);
    let tickets = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let percForCinema = Number(input[4]);

    let moneyFromSales = tickets * ticketPrice;
    let moneyPerDays = moneyFromSales * totalDays;
    let cinemaCut = moneyPerDays * percForCinema / 100;
    let profit = moneyPerDays - cinemaCut;

    console.log(`The profit from the movie ${name} is ${profit.toFixed(2)} lv.`);
}

movie(["The Programmer", "20", "500", "7.50", "7"])
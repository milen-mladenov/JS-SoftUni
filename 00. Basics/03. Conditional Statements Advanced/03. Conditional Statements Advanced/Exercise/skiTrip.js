function skiTrip(input) {

    let days = Number(input[0]);
    let room = input[1];
    let review = input[2];

    let nights = days - 1;
    let pricePerNight = 0;
    let totalPrice = 0;
    switch (room) {
        case "room for one person": pricePerNight = 18.00; break;
        case "apartment": pricePerNight = 25.00; break;
        case "president apartment": pricePerNight = 35.00; break;
    }

    if (days < 10) {
        if (room === "apartment") {
            totalPrice = (nights * pricePerNight) * 0.70;
        } else if (room === "president apartment") {
            totalPrice = (nights * pricePerNight) * 0.90;
        } else {
            totalPrice = nights * pricePerNight;
        }
    } else if (days >= 10 && days <= 15) {
        if (room === "apartment") {
            totalPrice = (nights * pricePerNight) * 0.65;
        } else if (room === "president apartment") {
            totalPrice = (nights * pricePerNight) * 0.85;
        } else {
            totalPrice = nights * pricePerNight;
        }
    } else {
        if (room === "apartment") {
            totalPrice = (nights * pricePerNight) * 0.50;
        } else if (room === "president apartment") {
            totalPrice = (nights * pricePerNight) * 0.80;
        } else {
            totalPrice = nights * pricePerNight;
        }
    }

    let finalPrice = 0;
    if (review === "positive"){
        finalPrice = totalPrice * 1.25;
    } else {
        finalPrice = totalPrice * 0.90;
    }

    console.log(finalPrice.toFixed(2));
}

skiTrip(["30",
"president apartment",
"negative"])
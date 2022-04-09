
function hearthDelivery(input) {
    let houses = input.shift().split("@").map(Number);
    let currIndex = 0;
    let housesToDeliver = houses.length;

    while (input[0] !== "Love!") {
        let tokens = input.shift().split(" ");
        let jump = Number(tokens[1]);
        let index = currIndex + jump;

        if (index >= houses.length) {
            index = 0
        }

        if (houses[index] !== 0) {
            houses[index] -= 2;
            currIndex = index;
            if (houses[currIndex] === 0) {
                console.log(`Place ${currIndex} has Valentine's day.`);
                housesToDeliver--;
                continue;
            }
        } else {
            console.log(`Place ${currIndex} already had Valentine's day.`);
        }
    }

    console.log(`Cupid's last position was ${currIndex}.`);
    if (housesToDeliver > 0) {
        console.log(`Cupid has failed ${housesToDeliver} places.`);
    } else {
        console.log("Mission was successful.");
    }
}

hearthDelivery(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"])

console.log("-------");

hearthDelivery(["2@2@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"])

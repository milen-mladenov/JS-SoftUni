function magicCards(input) {

    let originalCardDeck = input.shift().split(":");
    let newCardDeck = [];

    while (input[0] !== "Ready") {
        let tokens = input.shift().split(" ");
        let command = tokens[0];

        if (command === "Add") {
            let card = tokens[1]
            if (originalCardDeck.includes(card)) {
                newCardDeck.push(card);
            } else {
                console.log("Card not found.");
            }
        } else if (command === "Insert") {
            let card = tokens[1];
            let index = Number(tokens[2]);
            if (originalCardDeck.includes(card) && index >= 0 && index < newCardDeck.length) {
                newCardDeck.splice(index, 0, card);
            } else {
                console.log("Error!");
            }
        } else if (command === "Remove") {
            let indexOfCard = newCardDeck.indexOf(tokens[1]);
            if (indexOfCard !== -1) {
                newCardDeck.splice(indexOfCard, 1)
            } else {
                console.log("Card not found.");
            }
        } else if (command === "Swap") {
            let cardOne = tokens[1];
            let cardTwo = tokens[2];
            let temp = cardOne;
            let indexCardOne = newCardDeck.indexOf(cardOne);
            let indexCardTwo = newCardDeck.indexOf(cardTwo);
            newCardDeck[indexCardOne] = cardTwo;
            newCardDeck[indexCardTwo] = temp;
        } else if (command === "Shuffle") {
            newCardDeck.reverse();
        }
    }
    console.log(newCardDeck.join(" "));
}

magicCards(["Innervate:Moonfire:Pounce:Claw:Wrath:Bite",
    "Add Moonfire",
    "Add Bite",
    "Insert Claw 0",
    "Swap Claw Moonfire",
    "Remove Bite",
    "Ready"])

console.log("------");

magicCards(["Timetwister:CopyArtifact:Lifeweaver:TimeWalk",
    "Add UndergroundSea",
    "Add Timetwister",
    "Remove Wrath",
    "Add CopyArtifact",
    "Shuffle deck",
    "Ready"])

console.log("------");

magicCards(["BlackLotus:Bite:Innervate:Moonfire:CopyArtifact",
    "Add BlackLotus",
    "Insert Claw 1",
    "Add Moonfire",
    "Add Bite",
    "Ready"])


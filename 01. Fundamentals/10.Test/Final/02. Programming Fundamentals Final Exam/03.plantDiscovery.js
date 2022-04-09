function plantDiscovery(input) {

    let plants = {};
    let n = input.shift();

    for (let i = 0; i < n; i++) {
        let plant = input.shift().split("<->");

        if (!plants.hasOwnProperty(plant[0])) {
            plants[plant[0]] = {}
            plants[plant[0]].Rarity = plant[1];
            plants[plant[0]].Rating = [];
        } else {
            plants[plant[0]].Rarity = plant[1];
        }
    }

    while (input[0] !== "Exhibition") {
        let tokens = input.shift().split(":");
        let command = tokens.shift()
        let props = tokens[0].trim().split(" - ")
        let plant = props[0];
        let num = Number(props[1]);

        if (!plants.hasOwnProperty(plant)) {
            console.log("error");
            continue;
        }
        if (command === "Rate") {
            plants[plant].Rating.push(num);
        } else if (command === "Update") {
            plants[plant].Rarity = num;
        } else if (command === "Reset") {
            plants[plant].Rating = [];
        }
    }
    console.log(`Plants for the exhibition:`);
    for (let [plant, entries] of Object.entries(plants)) {

        if (entries.Rating.length > 1) {
            let rating = 0;
            for (let i = 0; i < entries.Rating.length; i++) {
                rating += entries.Rating[i]
            }
            rating = rating / 2;
            entries.Rating = rating;
        } else {
            rating = entries.Rating[0];

            entries.Rating = rating
        }
        if (entries.Rating === undefined) {
            entries.Rating = 0;
        }
        console.log(`- ${plant}; Rarity: ${entries.Rarity}; Rating: ${entries.Rating.toFixed(2)}`);

    }
}

plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])

console.log("------");

plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])

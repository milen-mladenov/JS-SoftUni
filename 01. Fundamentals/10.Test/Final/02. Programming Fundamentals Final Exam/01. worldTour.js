function worldTour(input) {

    let allStops = input.shift();

    while (input[0] !== "Travel") {
        let tokens = input.shift().split(":")
        let command = tokens[0];

        if (command === "Add Stop") {
            let index = Number(tokens[1]);
            let stop = tokens[2];
            if (index >= 0 && index <= allStops.length) {
                let left = allStops.slice(0, index);
                let right = allStops.slice(index)
                let arr = left + stop + right
                allStops = arr;
            }
            console.log(allStops);
        } else if (command === "Remove Stop") {
            let start = Number(tokens[1]);
            let end = Number(tokens[2]);
            if (
                start >= 0 &&
                start < allStops.length &&
                end >= 0 &&
                end < allStops.length &&
                start <= end
            ) {
                let left = allStops.slice(0, start);
                let right = allStops.slice(end + 1)
                let removed = left + right
                allStops = removed;
            }
            console.log(allStops);
        } else if (command === "Switch") {
            let oldStop = tokens[1];
            let newWord = tokens[2];
            if (allStops.includes(oldStop)) {
                allStops = allStops.replace(oldStop, newWord)
            }
            console.log(allStops);
        }
    }

    console.log(`Ready for world tour! Planned stops: ${allStops}`);
}



worldTour((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
)
console.log("------");

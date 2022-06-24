
function townsToJson(array) {
    const towns = [];
    let [name, latitude, longitude] = parseElements(array[0]);

    for (let i = 1; i < array.length; i++) {
        const town = {};

        let [townName, townLatitude, townLongitude] = parseElements(array[i]);
        townLatitude = toSecondDigit(townLatitude);
        townLongitude = toSecondDigit(townLongitude);

        town[name] = townName;
        town[latitude] = Number(townLatitude);
        town[longitude] = Number(townLongitude);

        towns.push(town);
    }

    console.log(JSON.stringify(towns));

    function parseElements(array) {
        return array.substr(1, array.length - 3).replace(" ", "").split(" | ");
    }

    function toSecondDigit(number) {
        return Number(number).toFixed(2).slice(-1) === '0'
            ? Number(number).toFixed(2).slice(0, -1)
            : Number(number).toFixed(2);
    }
}
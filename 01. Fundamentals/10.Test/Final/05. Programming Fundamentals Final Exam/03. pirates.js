function pirates(input) {

    let cities = {};

    while (input[0] !== "Sail") {
        let tokens = input.shift().split("||");
        let city = tokens[0];
        let population = Number(tokens[1]);
        let treasure = Number(tokens[2]);

        if (cities.hasOwnProperty(city)) {
            cities[city].population += population;
            cities[city].treasure += treasure;
        } else {
            cities[city] = {
                population,
                treasure
            }
        }

    }

    while (input[0] !== "End") {
        let tokens = input.shift().split("=>")
        let command = tokens[0];
        let city = tokens[1];
        let p1 = Number(tokens[2]);
        let p2 = Number(tokens[3]);

        if (command === "Prosper") {
            if (p1 < 0) {
                console.log("Gold added cannot be a negative number!");
                continue;
            }
            cities[city].treasure += p1;
            console.log(`${p1} gold added to the city treasury. ${city} now has ${cities[city].treasure} gold.`);
        } else if (command === "Plunder") {
            cities[city].population -= p1;
            cities[city].treasure -= p2;
            console.log(`${city} plundered! ${p2} gold stolen, ${p1} citizens killed.`);

            if (cities[city].population <= 0 || cities[city].treasure <= 0) {
                delete cities[city];

                console.log(`${city} has been wiped off the map!`);
            }
        }
    }

    let citiesCount = (Object.keys(cities)).length;

    if (citiesCount > 0) {

        console.log(`Ahoy, Captain! There are ${citiesCount} wealthy settlements to go to:`);
        for (let [city, entries] of Object.entries(cities)) {
            console.log(`${city} -> Population: ${entries.population} citizens, Gold: ${entries.treasure} kg`);

        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }
}

pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])

console.log("-------");

pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])

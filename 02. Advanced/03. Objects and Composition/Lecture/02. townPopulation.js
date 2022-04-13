function townPopulation(input) {

    let towns = {};

    for (let town of input) {
        let tokens = town.split(" <-> ")
        let currTown = tokens[0];
        let population = Number(tokens[1]);
        if (!towns.hasOwnProperty(currTown)) {
            towns[currTown] = population;
        } else {
            towns[currTown] += population;
        }
    }

    for (let [town, population] of Object.entries(towns)) {
        console.log(`${town} : ${population}`);
    }
}

// townPopulation(['Sofia <-> 1200000',
// 'Montana <-> 20000',
// 'New York <-> 10000000',
// 'Washington <-> 2345000',
// 'Las Vegas <-> 1000000']
// )
console.log("-----");
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
)
function city(input) {
    for (let each of Object.keys(input)) {
        console.log(each, "->", input[each]);
    }
}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})
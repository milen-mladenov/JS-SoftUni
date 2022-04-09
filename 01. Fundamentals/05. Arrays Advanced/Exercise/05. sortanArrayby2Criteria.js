function sortArrByTwoCriteria(arr) {

    let sortedAlphabeticaly = arr.sort();
    // console.log(sortedAlphabeticaly);
    let sortedByLength = sortedAlphabeticaly.sort((a, b) => a.length - b.length)
    console.log(sortedByLength.join("\n"))
}

sortArrByTwoCriteria(['alpha', 'beta', 'gamma'])
function rightPlace(start, char, end) {

    let word = start.replace('_', char);
    if (word === end) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}
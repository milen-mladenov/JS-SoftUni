function searchForaNumber(arr1, arr2) {

    arr1.splice(arr2[0]);
    arr1.splice(0, arr2[1]);
    let count = 0;

    for (let num of arr1) {
        if (num === arr2[2]) {
            count++;
        }
    }

    console.log(`Number ${arr2[2]} occurs ${count} times.`);
}

searchForaNumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
)
console.log("---");
searchForaNumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
)
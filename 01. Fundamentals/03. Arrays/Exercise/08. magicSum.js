function magicSum(array, sum) {

    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            let arraySum = array[i] + array[j];
            if (i === j) {
                break;
            }
            if (arraySum === sum) {
                console.log(`${array[i]} ${array[j]}`);
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8)
magicSum([1, 2, 3, 4, 5, 6], 6)

function sortingNumbers(input){
    input.sort((a,b) => a - b)
    let result = []
    while(input.length > 0){
        let low = input.shift()
        let high = input.pop();
        result.push(low,high)
    }
    return result
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
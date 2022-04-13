function solve(arr, n) {
    let result = [];
    for(let i = 0; i < arr.length;i++){
        if(i % n === 0){
            result.push(arr[i]);
        }
    }
    return result
}

solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2)
function pieceOfPie(arr, start, end) {

    let startIndex = arr.indexOf(start);
    let endIndex = arr.indexOf(end);

    if (startIndex > endIndex) {
        let temp = startIndex;
        startIndex = endIndex;
        endIndex = temp;
    }
    let result = arr.slice(startIndex, endIndex + 1)

return result;
}

pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
)
function diagonalSums(matrix) {

    let mainSum = 0;
    let secondarySum = 0;
    for (let row = 0; row < matrix.length; row++) {
        mainSum += matrix[row][row];
        secondarySum += matrix[row][matrix.length - row - 1];
    }
    console.log(mainSum + ' ' + secondarySum);
}

diagonalSums([[20, 40], [10, 60]])
diagonalSums([[3, 5, 17, 5], [-1, 5, 7, 14], [1, 5, -8, 89], [2, 5, 6, 7]])
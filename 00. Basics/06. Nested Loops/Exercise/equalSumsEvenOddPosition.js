function equalSumsEvenOddPosition(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let sum = "";

    for (let i = start; i < end; i++) {
        let evenSum = 0;
        let oddSum = 0;
        let check = i + "";
        for (let index = 0; index < check.length; index++) {
            if (index % 2 === 0) {
                evenSum += Number(check[index]);
            } else {
                oddSum += Number(check[index]);
            }
        }
        if (evenSum === oddSum) {
            sum += check + " "
        }
    }
    console.log(sum);
}

equalSumsEvenOddPosition(["123456",
    "124000"])
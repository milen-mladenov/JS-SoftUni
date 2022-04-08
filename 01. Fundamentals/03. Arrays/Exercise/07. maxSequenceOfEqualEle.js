function maxSequenceOfEqualEle(input) {

    let longestCombo = [];
    let tempCombo = [];

    for (let i = 0; i < input.length; i++) {
        tempCombo = [];
        for (let j = i; j < input.length; j++) {
            if (input[i] === input[j]) {
                tempCombo.push(input[j]);
            } else {
                break;
            }
            if (longestCombo.length < tempCombo.length) {
                longestCombo = tempCombo;
            }
        }
    }
    console.log(longestCombo.join(" "));
}

maxSequenceOfEqualEle([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSequenceOfEqualEle([1, 1, 1, 2, 3, 1, 3, 3])

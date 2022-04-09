function palindromeIntegers(input) {

    let numberArr = input;

    function isPalindrome(number) {
        let startNum = number;
        let reversedNum = Number(number.toString().split('').reverse().join(''));

        if (startNum === reversedNum) {
            return true;
        } else {
            return false;
        }

    }

    for (let i = 0; i < numberArr.length; i++) {
        console.log(isPalindrome(numberArr[i]));
    }
}

palindromeIntegers([123, 323, 421, 121])
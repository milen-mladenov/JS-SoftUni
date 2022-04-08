function sumPrimesNonPrimes(input) {

    let index = 0;
    let command = input[index++];

    let sumPrimes = 0;
    let sumNonPrimes = 0;

    while (command !== "stop") {
        let num = Number(command);

        if (num < 0) {
            console.log(`Number is negative.`);
            command = input[index++];
            continue;
        }

        if (num === 1) {
            sumPrimes += num;
            command = input[index++];
            continue;
        }

        let isPrime = true;

        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            sumPrimes += num;
        } else {
            sumNonPrimes += num;
        }

        command = input[index++]
    }

    console.log(`Sum of all prime numbers is: ${sumPrimes}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrimes}`);
}


sumPrimesNonPrimes(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"])



function googleSearches(input) {

    let startingMoneyPerSearch = Number(input.shift());
    let numberOfUsers = Number(input.shift());
    let totalMoney = 0;

    for (let i = 1; i <= numberOfUsers; i++) {
        let searches = Number(input.shift());
        let moneyPerSearch = startingMoneyPerSearch;
        if (searches <= 1) {
            continue;
        }
        if (searches > 5) {
            moneyPerSearch = moneyPerSearch * 2;
        }
        if (i % 3 === 0) {
            moneyPerSearch = moneyPerSearch * 3;
        }

        totalMoney += searches * moneyPerSearch;
    }

    console.log(`Total money earned: ${totalMoney.toFixed(2)}`);
}


googleSearches(["5.5",
    "3",
    "1",
    "10",
    "5"])

console.log("-----");
googleSearches(["0.5",
    "6",
    "3",
    "5",
    "16",
    "0",
    "6",
    "1"])

console.log("-----");
googleSearches(["3.0",
    "7",
    "0",
    "1",
    "2",
    "3",
    "4",
    "6",
    "15"])

console.log("-----");
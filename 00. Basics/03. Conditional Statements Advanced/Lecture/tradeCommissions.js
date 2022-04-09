function tradeCommissions(input) {

    let location = input[0];
    let amountEarned = Number(input[1]);
    let bonus = 0;
    if (amountEarned < 0) {
        console.log("error");
    } else if (location === "Sofia" || location === "Varna" || location === "Plovdiv") {
        switch (location) {
            case "Sofia":
                if (amountEarned <= 500) {
                    bonus = (amountEarned / 100) * 5;
                } else if (amountEarned <= 1000) {
                    bonus = (amountEarned / 100) * 7;
                } else if (amountEarned <= 10000) {
                    bonus = (amountEarned / 100) * 8;
                } else if (amountEarned > 10000) {
                    bonus = (amountEarned / 100) * 12;
                }; break;
            case "Varna":
                if (amountEarned <= 500) {
                    bonus = (amountEarned / 100) * 4.5;
                } else if (amountEarned <= 1000) {
                    bonus = (amountEarned / 100) * 7.5;
                } else if (amountEarned <= 10000) {
                    bonus = (amountEarned / 100) * 10;
                } else if (amountEarned > 10000) {
                    bonus = (amountEarned / 100) * 13;
                } break;
            case "Plovdiv":
                if (amountEarned <= 500) {
                    bonus = (amountEarned / 100) * 5.5;
                } else if (amountEarned <= 1000) {
                    bonus = (amountEarned / 100) * 8;
                } else if (amountEarned <= 10000) {
                    bonus = (amountEarned / 100) * 12;
                } else if (amountEarned > 10000) {
                    bonus = (amountEarned / 100) * 14.5;
                } break;
        }console.log(bonus.toFixed(2));
    } else {
        console.log("error");
    }
}

tradeCommissions(["Sofia",
    "1500"])
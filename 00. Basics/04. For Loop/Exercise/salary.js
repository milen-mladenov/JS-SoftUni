function salary(input) {

    let index = 0;
    let number = input[index];
    index++;
    let salary = input[index];
    index++;

    let haveMoney = true;
    for (let i = 0; i < number; i++) {
        let currentTab = input[index];
        index++;
        if (currentTab === "Facebook") {
            salary -= 150;
        } else if (currentTab === "Instagram") {
            salary -= 100;
        } else if (currentTab === "Reddit") {
            salary -= 50;
        }

        if (salary <= 0) {
            console.log("You have lost your salary.");
            flag = false;
            break;
        }
    }


    if (haveMoney) {
        console.log(salary);
    }
}

salary(["10","750","Facebook","Dev.bg","Instagram","Facebook","Reddit","Facebook","Facebook"])
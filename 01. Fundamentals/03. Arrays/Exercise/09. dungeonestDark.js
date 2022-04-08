function dungeonestDark(input) {

    let arr = input[0].split("|");
    let coins = 0;
    let health = 100;
    let room = 0;
    let alive = true;

    for (let action of arr) {
        let token = action.split(" ")
        room++
        if (token[0] === "chest") {
            coins += Number(token[1]);
            console.log(`You found ${token[1]} coins.`);
        } else if (token[0] === "potion") {
            let amountHealed = 0;
            if (health + Number(token[1]) > 100) {
                amountHealed = 100 - health
            } else {
                amountHealed += Number(token[1]);
            }
            health += amountHealed;
            if (health > 100) {
                health = 100
            }
            console.log(`You healed for ${amountHealed} hp.`);
            console.log(`Current health: ${health} hp.`);


        } else {
            health -= token[1];
            if (health <= 0) {
                alive = false;
                console.log(`You died! Killed by ${token[0]}.`);
                console.log(`Best room: ${room}`);
                break;
            } else {
                console.log(`You slayed ${token[0]}.`);
            }
        }
    }
    if (alive) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);

    }
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
console.log("=======");
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])
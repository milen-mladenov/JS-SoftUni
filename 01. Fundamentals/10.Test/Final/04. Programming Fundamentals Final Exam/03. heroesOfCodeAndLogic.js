function heroesOfCodeAndLogic(input) {

    let heroes = {};
    let n = input.shift();

    for (let i = 0; i < n; i++) {
        let tokens = input.shift().split(" ");
        let name = tokens[0];
        let hp = Number(tokens[1]);
        let mp = Number(tokens[2]);

        heroes[name] = {
            hp,
            mp
        }
    }

    while (input[0] !== "End") {
        let tokens = input.shift().split(" - ");
        let command = tokens[0];
        let hero = tokens[1];
        let p1 = Number(tokens[2]);
        let p2 = tokens[3];

        if (command === "CastSpell") {
            let manaR = p1;
            let spell = p2;
            if (heroes[hero].mp >= manaR) {
                heroes[hero].mp -= manaR;
                console.log(`${hero} has successfully cast ${spell} and now has ${heroes[hero].mp} MP!`);
            } else {
                console.log(`${hero} does not have enough MP to cast ${spell}!`);
            }
        } else if (command === "TakeDamage") {
            let damage = p1;
            let enemy = p2;
            heroes[hero].hp -= damage;
            if (heroes[hero].hp <= 0) {
                delete heroes[hero];
                console.log(`${hero} has been killed by ${enemy}!`);
            } else {
                console.log(`${hero} was hit for ${damage} HP by ${enemy} and now has ${heroes[hero].hp} HP left!`);
            }
        } else if (command === "Recharge") {
            let manaRegen = Math.min((200 - heroes[hero].mp), p1);
            heroes[hero].mp += manaRegen;
            console.log(`${hero} recharged for ${manaRegen} MP!`);

        } else if (command === "Heal") {
            let helthRegen = Math.min((100 - heroes[hero].hp), p1);
            heroes[hero].hp += helthRegen;
            console.log(`${hero} healed for ${helthRegen} HP!`);

        }
    }

    for (let [hero, entries] of Object.entries(heroes)) {
        console.log(`${hero}`);
        console.log(`  HP: ${entries.hp}`);
        console.log(`  MP: ${entries.mp}`);
    }
}


heroesOfCodeAndLogic(["2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End",
])

console.log("-------");

heroesOfCodeAndLogic(["4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End",
])
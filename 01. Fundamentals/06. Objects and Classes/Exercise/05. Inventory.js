function inventory(input) {

    let heroes = [];
    for (let element of input) {
        let arr = element.split(" / ");
        let hero = arr[0];
        let level = arr[1];
        let items = arr[2];
        let currHero = {
            hero,
            level,
            items,
        }
        heroes.push(currHero)
    }
   
    heroes.sort((a,b) => a.level - b.level)
    for(let hero of heroes){
        console.log(`Hero: ${hero.hero} \n level => ${hero.level} \n items => ${hero.items}`);
    }

}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)
console.log("=======");
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]
)
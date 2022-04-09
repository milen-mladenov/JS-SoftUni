function tseamAccount(input) {

    let games = input.shift().split(" ");

    while (input[0] !== "Play!") {
        let tokens = input.shift().split(" ");
        let command = tokens.shift()
        let game = tokens.shift()
        let expansion = "";
        let index = 0;

        switch (command) {
            case "Install": if (!gameCheck(game)) {
                games.push(game);
            }; break;
            case "Uninstall": if (gameCheck(game)) {
                index = games.indexOf(game);
                games.splice(index, 1);
            }; break;
            case "Update": if (gameCheck(game)) {
                index = games.indexOf(game);
                let temp = games.splice(index, 1)
                games.push(temp[0]);
            }; break;
            case "Expansion":
                expansion = game.split("-")
                game = expansion.shift();
                expansion = expansion.shift();
                index = games.indexOf(game)
                if(gameCheck(game)){
                    let temp = `${game}:${expansion}`
                    games.splice(index +1,0,temp)
                }
                ; break;
            default: break;
        }
    }
    function gameCheck(input) {
        if (games.includes(input)) {
            return true;
        } else {
            return false;
        }
    }

    console.log(games.join(" "));


}

tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'])

    tseamAccount(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']
    )
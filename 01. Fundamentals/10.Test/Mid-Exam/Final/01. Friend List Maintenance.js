function friendList(input) {
    let friendList = input.shift().split(", ");
    let blackListCount = 0;
    let errorCount = 0;



    while (input[0] !== "Report") {
        let token = input.shift().split(" ");
        let command = token[0];
        let position = token[1];
        let placeHolder = "";
        

        if (command === "Error") {
            placeHolder = friendList[position];
            if (friendList[position] !== "Lost" && friendList[position] !== "Blacklisted") {
                friendList[position] = "Lost";
                console.log(`${placeHolder} was lost due to an error.`);
                errorCount++;
            }
        }
        if (command === "Blacklist") {

            let positionOfName = friendList.indexOf(position)
            placeHolder = friendList[positionOfName];
            if (!friendList.includes(position)) {
                console.log(`${position} was not found.`);
            } else {
                console.log(`${placeHolder} was blacklisted.`)
                friendList[positionOfName] = "Blacklisted"
                blackListCount++;
            }
        }

        if (command === "Change") {
            placeHolder = friendList[position];
    
            if (position >= friendList.length) {
                break;
            } else {
                friendList[position] = token[2];
                console.log(`${placeHolder} changed his username to ${token[2]}.`);
            }
        }
    }

    console.log(`Blacklisted names: ${blackListCount}`);
    console.log(`Lost names: ${errorCount}`);
    console.log(friendList.join(' '));
}


friendList(["Mike, John, Eddie",
"Blacklist Mike",
"Error 0",
"Report"])
console.log("=================");
friendList(["Mike, John, Eddie, William",
"Error 3",
"Error 3",
"Change 0 Mike123",
"Report"])
console.log("=================");
friendList(["Mike, John, Eddie, William",
"Blacklist Maya",
"Error 1",
"Change 4 George",
"Report"])



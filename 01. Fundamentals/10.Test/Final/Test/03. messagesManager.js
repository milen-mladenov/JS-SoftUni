function messagesManager(input) {

    let records = {};
    let capacity = input.shift()
    while (input[0] !== "Statistics") {
        let tokens = input.shift().split("=");
        let command = tokens[0];

        if (command === "Add") {
            let userName = tokens[1];
            let sendMessages = Number(tokens[2]);
            let recievedMessages = Number(tokens[3]);

            if (records.hasOwnProperty(userName)) {
                continue;
            } else {
                records[userName] = {
                    sendMessages,
                    recievedMessages
                }
            }
        } else if (command === "Message") {
            let sender = tokens[1];
            let reciever = tokens[2];

            if (records.hasOwnProperty(sender) && records.hasOwnProperty(reciever)) {
                records[sender].sendMessages++;
                records[reciever].recievedMessages++;

                if (records[sender].sendMessages + records[sender].recievedMessages >= capacity) {
                    delete records[sender];
                    console.log(`${sender} reached the capacity!`);
                } 
                 if (records[reciever].sendMessages + records[reciever].recievedMessages >= capacity) {
                    delete records[reciever];
                    console.log(`${reciever} reached the capacity!`);
                }
            }
        } else if (command === "Empty") {
            let person = tokens[1];

            if (person === "All") {
                records = {};
            } else if (records.hasOwnProperty(person)) {
                delete records[person];
            }
        }
    }

    let userCount = (Object.keys(records)).length;

    console.log(`Users count: ${userCount}`);
    for (let [person, entries] of Object.entries(records)) {
        let messages = entries.sendMessages + entries.recievedMessages;
        console.log(`${person} - ${messages}`);
    }
}

messagesManager(["10",
    "Add=Berg=9=0",
    "Add=Kevin=0=0",
    "Message=Berg=Kevin",
    "Add=Mark=5=4",
    "Statistics"])

console.log("-------");

messagesManager(["20",
    "Add=Mark=3=9",
    "Add=Berry=5=5",
    "Add=Clark=4=0",
    "Empty=Berry",
    "Add=Blake=9=3",
    "Add=Michael=3=9",
    "Add=Amy=9=9",
    "Message=Blake=Amy",
    "Message=Michael=Amy",
    "Statistics"])

console.log("-------");

messagesManager(["12",
    "Add=Bonnie=3=5",
    "Add=Johny=4=4",
    "Empty=All",
    "Add=Bonnie=3=3",
    "Statistics"])

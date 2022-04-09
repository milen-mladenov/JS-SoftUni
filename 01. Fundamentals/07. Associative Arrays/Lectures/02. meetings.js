function metings(input) {

    let meetings = {};

    while (input.length > 0) {
        let tokens = input.shift().split(" ");
        let day = tokens[0];
        let name = tokens[1];
        if (meetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let key in meetings) {
        console.log(`${key} -> ${meetings[key]}`);
    }
}

metings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)
console.log("======");
metings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']
)
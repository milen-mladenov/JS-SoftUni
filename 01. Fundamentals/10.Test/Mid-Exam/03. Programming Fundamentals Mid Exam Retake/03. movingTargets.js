function movingTargets(input) {

    let targets = input.shift().split(" ").map(Number);

    while (input[0] !== "End") {
        let tokens = input.shift().split(" ");
        let command = tokens[0];
        let index = Number(tokens[1]);
        let p1 = Number(tokens[2]);
        let validIndex = index < 0 || index >= targets.length;

        if (command === "Shoot") {
            if (!validIndex) {
                targets[index] -= p1;
                if (targets[index] <= 0) {
                    targets.splice(index, 1);
                }
            }
        } else if (command === "Strike") {
            let startOfStrike = index - p1
            let endOfStrike = 1 + p1 * 2

            if (startOfStrike < 0 || endOfStrike >= targets.length) {
                console.log("Strike missed!");
                continue;
            }
            targets.splice(startOfStrike, endOfStrike)
        } else if (command === "Add") {
            if (validIndex) {
                console.log("Invalid placement!");
                continue;
            } else {
                targets.splice(index, 0, p1);
            }
        }
    }
    console.log(targets.join("|"));
}

movingTargets(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])

console.log("----------");

movingTargets(["1 2 3 4 5",
    "Strike 0 1",
    "End"])

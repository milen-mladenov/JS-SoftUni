function ladybugs(input) {

    let length = input.shift();
    let field = (new Array(length)).fill(0);
    let ladybugs = input.shift().split(" ");

    for (let index of ladybugs) {
        index = Number(index);
        if (index >= 0 && index < length) {
            field[index] = 1;
        }
    }

    for (let command of input) {
        let tokens = command.split(" ");
        let startingIndex = Number(tokens[0]);
        if (field[startingIndex] === 1) {
            let currentIndex = startingIndex;
            let direction = tokens[1];
            let offset = Number(tokens[2]);

            if (direction === "left") {
                offset *= -1;
            }

            while (currentIndex >= 0 && currentIndex < length && field[currentIndex] === 1) {
                currentIndex += offset;
            }

            field[startingIndex] = 0;
            if (currentIndex >= 0 && currentIndex < length) {
                field[currentIndex] = 1;
            }
        }
    }

    console.log(field.join(" "));

}

ladybugs([3, '0 1',
    '0 right 1',
    '2 right 1'])

console.log("-----");

ladybugs([3, '0 1 2',
    '0 right 1',
    '1 right 1',
    '2 right 1']
)

console.log("-----");

ladybugs([5, '3',
    '3 left 2',
    '1 left -2']
)
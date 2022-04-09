function deserializeString(input) {


    let obj = {};

    while (input[0] !== "end") {
        let tokens = input.shift().split(":");
        let letter = tokens[0];
        let positions = tokens[1].split("/").map(Number);

        obj[letter] = positions;
    }

    let deserialize = Object.entries(obj);
    let totalLength = 0;

    for (let positions of deserialize) {
        totalLength += positions[1].length;
    }

    let print = new Array(totalLength)
    for (let [letter, positions] of deserialize) {

        while (positions.length > 0) {
            let curPosition = positions.shift();
            print.splice(curPosition, 1, letter)
        }
    }

    console.log(print.join(""));
}

deserializeString(['a:0/2/4/6',
    'b:1/3/5',
    'end']);

console.log("------");

deserializeString(['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end'])
function thePianist(input) {
    let n = Number(input.shift());
    let songs = {}
    for (let i = 0; i < n; i++) {
        let tokens = input.shift().split("|");
        let song = tokens[0];
        let composerName = tokens[1];
        let key = tokens[2];

        songs[song] = {
            composerName,
            key
        }
    }

    while (input[0] !== "Stop") {
        let tokens = input.shift().split("|");
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];
        let p3 = tokens[3];

        if (command === "Add") {
            if (!songs.hasOwnProperty(p1)) {
                songs[p1] = {}
                songs[p1].composerName = p2;
                songs[p1].key = p3
                console.log(`${p1} by ${p2} in ${p3} added to the collection!`);
            } else {
                console.log(`${p1} is already in the collection!`);
            }
        } else if (command === "Remove") {
            if (songs.hasOwnProperty(p1)) {
                delete songs[p1];
                console.log(`Successfully removed ${p1}!`);
            } else {
                console.log(`Invalid operation! ${p1} does not exist in the collection.`);
            }
        } else if (command === "ChangeKey") {
            if (songs.hasOwnProperty(p1)) {
                songs[p1].key = p2;
                console.log(`Changed the key of ${p1} to ${p2}!`);
            } else {
                console.log(`Invalid operation! ${p1} does not exist in the collection.`);
            }
        }
    }

    for (let [song, entries] of Object.entries(songs)) {
        console.log(`${song} -> Composer: ${entries.composerName}, Key: ${entries.key}`);
    }
}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])

console.log("========");

thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
])
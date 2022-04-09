function mirrorWords(input) {

    let text = input.shift();
    let pattern = /(@|#)(?<word1>[a-z]{3,})\1{2}(?<word2>[a-z]{3,})\1/gi

    let match = pattern.exec(text);
    let counter = 0;
    let print = [];

    while (match !== null) {
        counter++;
        let word1 = match.groups.word1;
        let word2 = match.groups.word2;
        let reversed = word2.split("").reverse().join("")

        if (word1 === reversed) {
            print.push(`${word1} <=> ${word2}`)
        }
        match = pattern.exec(text);
    }

    if (counter > 0) {
        console.log(`${counter} word pairs found!`);

    } else {
        console.log("No word pairs found!");
    }
    if (print.length > 0) {
        console.log(`The mirror words are:`);
        console.log(print.join(", "));
    } else {
        console.log("No mirror words!");
    }
}


mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'])
console.log("------");
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])
console.log("-------");
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])
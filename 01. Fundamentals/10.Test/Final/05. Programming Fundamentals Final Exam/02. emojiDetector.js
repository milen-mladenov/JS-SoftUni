function emojiDetector(input) {
    let text = input[0];

    let emojiPattern = /(?<word>(::|\*\*)(?<emoji>[A-Z][a-z]{2,})\2)/g
    let numberPattern = /[0-9]/g

    let numberMatch = numberPattern.exec(text);
    let emojiMatch = emojiPattern.exec(text);
    let coolArr = [];
    let cool = 0;
    let coolEmoji = [];
    let emojiCount = 0;

    while (numberMatch !== null) {
        coolArr.push(Number(numberMatch))
        numberMatch = numberPattern.exec(text);
    }

    cool = coolArr.reduce((a, b) => a * b);

    while (emojiMatch !== null) {
        let emoji = emojiMatch.groups.emoji;
        let emojiCoolness = 0;
        emojiCount++

        for (let w of emoji) {
            let letter = w.charCodeAt()
            emojiCoolness += letter;
        }

        if (emojiCoolness >= cool) {
            coolEmoji.push(emojiMatch.groups.word)
        }
        emojiMatch = emojiPattern.exec(text);
    }

    console.log(`Cool threshold: ${cool}`);
    console.log(`${emojiCount} emojis found in the text. The cool ones are:`);
    for (let emoji of coolEmoji) {
        console.log(emoji);
    }
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])
console.log("--------");
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])
console.log("------");
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])
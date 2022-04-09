function valueOfString(input) {

    let sum = 0;
    if (input[1] === "LOWERCASE") {
        for (let curChar of input[0]) {
            if (!(/[a-zA-Z]/.test(curChar))) {
                continue
            }
            if (curChar.toLowerCase() === curChar) {
                let charValue = curChar.charCodeAt()
                sum += charValue
            }

        }
    } else {
        for (let curChar of input[0]) {
            if (!(/[a-zA-Z]/.test(curChar))) {
                continue
            }
            if (curChar.toUpperCase() === curChar) {
                let charValue = curChar.charCodeAt()
                sum += charValue
            }

        }
    }
    console.log(`The total sum is: ${sum}`);
}

valueOfString(['HelloFromMyAwesomePROGRAM',
    'LOWERCASE']
);
console.log("------");
valueOfString(['AC/DC',
    'UPPERCASE']
)
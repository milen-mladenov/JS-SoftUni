function passwordReset(input) {

    let password = input.shift();

    while (input[0] !== "Done") {
        let tokens = input.shift().split(" ");
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];

        if (command === "TakeOdd") {
            let arr = password.split("");
            let newPass = [];
            for (let i = 0; i < arr.length; i++) {
                if (i % 2 !== 0) {
                    newPass.push(arr[i]);
                }
            }
            password = newPass.join("")
            console.log(password);
        } else if (command === "Cut") {
            p1 = Number(p1)
            p2 = Number(p2)
            let left = password.slice(0, p1)
            let right = password.slice(p1 + p2);
            password = left + right
            console.log(password);
        } else if (command === "Substitute") {
            let oldWord = p1;
            let newWord = p2;
            if (!password.includes(oldWord)) {
                console.log("Nothing to replace!");
                continue;
            } else {
                password = password.split(oldWord).join(newWord);
                console.log(password);
            }
        }

    }

    console.log(`Your password is: ${password}`);
}



passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])

console.log("--------");

passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])
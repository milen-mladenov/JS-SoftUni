function encriptingPassword(input) {
    let n = input.shift();

    let pattern = /^([\W\w]+)>(?<w1>[0-9]{3})\|(?<w2>[a-z]{3})\|(?<w3>[A-Z]{3})\|(?<w4>[\W\w]{3})<\1$/
    let text = input.shift();
    let match = pattern.exec(text);
    let result = [];

    for (let i = 0; i < n; i++) {
        let text = input.shift();
        let passwordIsTrue = true;
        let password;
        if (match) {
            password = match.groups.w1 + match.groups.w2 + match.groups.w3 + match.groups.w4

            for (let letter of match.groups.w4) {
                if (letter === "<" || letter === ">") {
                    passwordIsTrue = false;
                }
            }
        }
        if (passwordIsTrue && password !== undefined) {
            result.push(`Password: ${password}`);
        } else {
            passwordIsTrue = true;
            result.push("Try another password!");
        }
        match = pattern.exec(text)
    }

    for (let line of result) {
        console.log(line);
    }
}

encriptingPassword(["3",
    "##>00|no|NO|!!!?<###",
    "##>123|yes|YES|!!!<##",
    "$$<111|noo|NOPE|<<>$$"])

console.log('----');

encriptingPassword(["5",
    "aa>111|mqu|BAU|ahu<aa",
    "()>111!aaa!AAA!^&*<()",
    "o>088|abc|AAA|***<o",
    "asd>asd|asd|ASD|asd<asd",
    "*>088|zzzz|ZzZ|123<*"])


function login(input) {

    let index = 0;
    let name = input[index++];
    let password = input[0].split("");
    password = password.reverse();
    password = password.join("");
    let nextPassword = input[index++];
    let counter = 0;

    while (nextPassword !== password) {
        counter++;
        if (counter === 4) {
            console.log(`User ${name} blocked!`);
            break;
        }
        console.log("Incorrect password. Try again.");
        nextPassword = input[index++];
    }
    if (password === nextPassword) {
        console.log(`User ${name} logged in.`);
    }
}

login(['Acer', 'login', 'go', 'let me in', 'recA'])
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])
function password(input){


    let username = input[0];
    let password = input[1];
    let newPassword = input[2];
    let index = 3;
    while (password !== newPassword){

        index++;
        newPassword = input[index];
    } 
    console.log(`Welcome ${username}!`);
}

password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
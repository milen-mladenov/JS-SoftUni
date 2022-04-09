function cats(input){
    while(input.length > 0){
        let token = input.shift().split(" ");
        console.log(`${token[0]}, age ${token[1]} says Meow`);
    }
}

cats(['Mellow 2', 'Tom 5'])
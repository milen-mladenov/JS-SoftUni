function replaceRepeatingChars(input){
    let text = "";

    for(let i = 0; i < input.length;i++){
        let curChar = input.charAt(i);
        let nextChar = input.charAt(i + 1);
        if(curChar !== nextChar){
            text += curChar;
        }
    }
    console.log(text);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')
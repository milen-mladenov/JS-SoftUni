function rotateArray(input){
    let shift = input.pop();

    if(input.length <= shift){
        input.push(input.shift())
        console.log(input.join(" "));
        return;
    }
    for(let i = 0; i < shift;i++){
        let temp = input.shift();
        input.push(temp);
    }
    console.log(input.join(" "));
}

rotateArray(['1', '2', '3', '4', '2'])
console.log("-------");
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])
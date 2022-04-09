function cutAndReverse(input){

    let firstWord = input.slice(0, input.length / 2);
    let secWord = input.slice(input.length / 2);

    let arrFirstWord = [];
    let arrSecWord = [];

    for(let i = 0; i < firstWord.length; i++){
        arrFirstWord.push(firstWord[i])
    }

    for(let i = 0; i < secWord.length; i++){
        arrSecWord.push(secWord[i])
    }

    console.log(arrFirstWord.reverse().join(""));
    console.log(arrSecWord.reverse().join(""));
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
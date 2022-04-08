function commonElements(firstArr, secondArr){

    for(let i = 0; i < firstArr.length; i++){
        let firstItem = firstArr[i];
        for(let j = 0; j < secondArr.length; j++){
            let secondItem = secondArr[j];
            if(firstItem === secondItem){
                console.log(firstItem);
            }
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)
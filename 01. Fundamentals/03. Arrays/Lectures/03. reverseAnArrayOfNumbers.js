function reverseTheArray(num, arr){

    let array = [];
    for(let i = 0; i < num;i++){
        array.push(arr[i])
    }

    array.reverse()
    array.toString()
    array.join(' ')
    console.log(array);
}

reverseTheArray(3, [10, 20, 30, 40, 50])

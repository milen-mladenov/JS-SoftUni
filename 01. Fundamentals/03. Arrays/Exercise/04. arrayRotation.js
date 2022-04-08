function arrayRotation(arr, rotations){

    for(let i = 0; i < rotations; i++){
        let holder = "";
        holder =  arr.shift(arr[i]);
        arr.push(holder);
    }
    console.log(arr.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 2)
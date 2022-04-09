function factorialDivision(num, devider){
    let sum = 1;
    
    console.log(`${(facDivision(num)/facDivision(devider)).toFixed(2)}`);
 
    function facDivision(number){
        let sum = 1;
        for(i = number; i>=1; i--){
            sum *=i;
        }
        return sum;
    }
}
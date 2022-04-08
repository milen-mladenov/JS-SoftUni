function dayOfWeek(input){
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    if(input >= 0 && input <= 7){
        console.log(days[input-1]);
    }else{
        console.log(`Invalid day!`);
    }
}

dayOfWeek(1)
dayOfWeek(2)
dayOfWeek(3)
dayOfWeek(4)
dayOfWeek(5)
dayOfWeek(6)
dayOfWeek(7)
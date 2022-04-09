function coins(input){

    let index = 0;
    let money = input[index++];
    money = Math.floor(money * 100);
    let coinCounter = 0;

    while (money > 0){

        if (money >= 200){
            money-=200;
            coinCounter++;
        } else if (money >= 100){
            money-=100;
            coinCounter++;
        } else if (money >= 50){
            money-=50;
            coinCounter++;
        } else if (money >= 20){
            money-=20;
            coinCounter++;
        } else if (money >= 10){
            money-=10;
            coinCounter++;
        } else if (money >= 5){
            money-=5;
            coinCounter++;
        } else if (money >= 2){
            money-=2;
            coinCounter++;
        } else {
            money-=1;
            coinCounter++;
        }
    }
    console.log(coinCounter);
}

coins(["2.73"])
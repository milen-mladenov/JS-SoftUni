function summerOutfit(input) {

    let temp = Number(input[0]);
    let time = input[1];

    switch (time) {
        case "Morning":
            if (temp >= 10 && temp <= 18) {
                console.log(`It's ${temp} degrees, get your Sweatshirt and Sneakers.`);
            } else if (temp > 18 && temp <= 24) {
                console.log(`It's ${temp} degrees, get your Shirt and Moccasins.`);
            } else {
                console.log(`It's ${temp} degrees, get your T-Shirt and Sandals.`);
            } break;
        case "Afternoon":
            if (temp >= 10 && temp <= 18) {
                console.log(`It's ${temp} degrees, get your Shirt and Moccasins.`);
            } else if (temp > 18 && temp <= 24) {
                console.log(`It's ${temp} degrees, get your T-Shirt and Sandals.`);
            } else {
                console.log(`It's ${temp} degrees, get your Swim Suit and Barefoot.`);
            } break;
        case "Evening":
            if (temp >= 10 && temp <= 18) {
                console.log(`It's ${temp} degrees, get your Shirt and Moccasins.`);
            } else if (temp > 18 && temp <= 24) {
                console.log(`It's ${temp} degrees, get your Shirt and Moccasins.`);
            } else {
                console.log(`It's ${temp} degrees, get your Shirt and Moccasins.`);
            } break;
    }
}
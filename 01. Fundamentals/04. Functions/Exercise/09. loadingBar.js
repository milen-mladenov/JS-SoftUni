function loadingBar(input) {
    let loadingBar = [];
    let counter = 0;

    for (let i = 0; i < input; i++) {
        if (i % 10 === 0) {
            loadingBar.unshift("%");
            counter++;
        }
    }
    
    while (loadingBar.length < 10) {
        loadingBar.push(".");
    }

    if (counter === 10) {
        console.log(`100% Complete!`)
        console.log(`[${loadingBar.join("")}]`)
    } else {
        console.log(`${input}% [${loadingBar.join("")}]`);
        console.log(`Still loading...`);
    }
}

loadingBar(100)
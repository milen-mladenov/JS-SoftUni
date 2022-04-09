function dancing(input) {

    let country = input[0];
    let tool = input[1];

    let score = 0;
    switch (country) {
        case "Bulgaria":
            if (tool === "ribbon") {
                score = 9.6 + 9.4;
            } else if (tool === "hoop") {
                score = 9.55 + 9.75;
            } else if (tool === "rope") {
                score = 9.5 + 9.4;
            } break;
        case "Russia":
            if (tool === "ribbon") {
                score = 9.1 + 9.4
            } else if (tool === "hoop") {
                score = 9.3 + 9.8;
            } else if (tool === "rope") {
                score = 9.6 + 9;
            } break;
        case "Italy":
            if (tool === "ribbon") {
                score = 9.2 + 9.5;
            } else if (tool === "hoop") {
                score = 0.45 + 9.35
            } else if (tool === "rope") {
                score = 9.7 + 9.15;
            }break; 
    }

    let missingScore = score - 20;
    let percNeeded = missingScore / 20 * 100;


        console.log(`The team of ${country} get ${score.toFixed(3)} on ${tool}.`);
        console.log(`${Math.abs(percNeeded).toFixed(2)}%`);
}

dancing(["Bulgaria","ribbon"])
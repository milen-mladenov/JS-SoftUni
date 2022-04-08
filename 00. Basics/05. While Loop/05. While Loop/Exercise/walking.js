function walking(input) {

    let goal = 10000;
    let index = 0;
    let action = input[index++];
    let currentSteps = 0;
    let goalReach = false;

    while (action !== "Going home") {
        let steps = Number(action);
        currentSteps += steps;
        if (currentSteps >= goal) {
            goalReach = true;
            break;
        }
        action = input[index++];
    }

    if (action === "Going home") {
        action = input[index]
        let steps = Number(action)
        currentSteps += steps;
    }

    let diff = Math.abs(currentSteps - goal)
    if (goalReach || currentSteps >= goal) {
        console.log(`Goal reached! Good job!`);
        console.log(`${diff} steps over the goal!`);
    } else {
        console.log(`${diff} more steps to reach goal.`);
    }
}

walking(["1500",
    "3000",
    "250",
    "1548",
    "2000",
    "Going home",
    "2000"])
function trekkingMania(input) {

    let index = 0;
    let groups = input[index++];

    let totalClimers = 0;
    let musalaCount = 0;
    let monblanCount = 0;
    let kiliCount = 0;
    let k2Count = 0;
    let everestCount = 0;

    for (let i = 0; i < groups; i++) {
        groupSize = input[index++];
        let groupCount = Number(groupSize)
        totalClimers += groupCount;
        if (groupSize <= 5) {
            musalaCount += groupCount;
        } else if (groupSize > 5 && groupSize <= 12) {
            monblanCount += groupCount;
        } else if (groupSize > 12 && groupSize <= 25) {
            kiliCount += groupCount;
        } else if (groupSize > 25 && groupSize <= 40) {
            k2Count += groupCount;
        } else {
            everestCount += groupCount;
        }
    }

    let g1 = musalaCount / totalClimers * 100;
    let g2 = monblanCount / totalClimers * 100;
    let g3 = kiliCount / totalClimers * 100;
    let g4 = k2Count / totalClimers * 100;
    let g5 = everestCount / totalClimers * 100;

    console.log(g1.toFixed(2) + "%");
    console.log(g2.toFixed(2) + "%");
    console.log(g3.toFixed(2) + "%");
    console.log(g4.toFixed(2) + "%");
    console.log(g5.toFixed(2) + "%");
}

trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])
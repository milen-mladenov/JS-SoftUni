function flightSchedule(input) {
    let action = input[2];
    let flightPlan = {};
    let flightPlanNotChanged = [];
    let canceledFlights = [];

    for (let line of input[0]) {
        let flight = line.split(" ")
        let location = flight[1];
        if (flight.length > 2) {
            location = flight[1] + " " + flight[2];
        }
        flightPlan[flight[0]] = location;
    }

    for (let line of input[1]) {
        let curFlight = line.split(" ")
        if (flightPlan.hasOwnProperty(curFlight[0])) {
            let flight = {}
            let destination = flightPlan[curFlight[0]];
            flight.Destination = destination;
            flight.Status = "Cancelled"
            canceledFlights.push(flight)
            delete flightPlan[curFlight[0]]
        }
    }

    for (let obj in flightPlan) {
        let flight = {}
        let destination = flightPlan[obj];
        flight.Destination = destination;
        flight.Status = "Ready to fly"
        flightPlanNotChanged.push(flight)
    }

    canceledFlights.sort(function (a, b) {
        return a.Destination.localeCompare(b.Destination)
    });

    if (action[0] === 'Cancelled') {
        for (let print of canceledFlights) {
            console.log(print);
        }
    } else {
        for (let print of flightPlanNotChanged) {
            console.log(print);
        }
    }
}


flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']
]);

console.log("-----");

flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'],
['Ready to fly']
])
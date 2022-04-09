function cinemaTickets(input) {

    let index = 0;
    let command = input[index++];
    let kidTicketCounter = 0;
    let studentTicketCounter = 0;
    let standardTicketCounter = 0;
    let totalTickets = 0;

    while (command !== "Finish") {
        let name = command;
        let maxSeats = Number(input[index++]);
        let ticketType = input[index++]
        let ticketsForMovie = 0;
        while (ticketType !== "End") {
            if (ticketType === "kid") {
                ticketsForMovie++;
                kidTicketCounter++;
            } else if (ticketType === "student") {
                ticketsForMovie++;
                studentTicketCounter++
            } else if (ticketType === "standard") {
                ticketsForMovie++;
                standardTicketCounter++;
            }
            if (maxSeats === ticketsForMovie) {
                break;
            }
            ticketType = input[index++];
        }

        totalTickets += ticketsForMovie;
        let perc = ticketsForMovie / maxSeats * 100;

        console.log(`${name} - ${perc.toFixed(2)}% full.`);

        ticketsForMovie = 0;
        command = input[index++]
    }

    let kidsPerc = kidTicketCounter / totalTickets * 100;
    let studentPerc = studentTicketCounter / totalTickets * 100;
    let standardPerc = standardTicketCounter / totalTickets * 100;

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${studentPerc.toFixed(2)}% student tickets.`);
    console.log(`${standardPerc.toFixed(2)}% standard tickets.`);
    console.log(`${kidsPerc.toFixed(2)}% kids tickets.`);

}

cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])
function previousDay(year, month, day) {

    let previousDay = new Date(year, month, day)
    previousDay.setDate(previousDay.getDate() - 1)

    console.log(`${previousDay.getFullYear()}-${previousDay.getMonth()}-${previousDay.getDate()}`);
}

previousDay(2016, 9, 30)
previousDay(2016, 10, 1)
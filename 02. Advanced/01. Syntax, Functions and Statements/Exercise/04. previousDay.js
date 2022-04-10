function previousDay(year, month, day) {

    let date = `${year}-${month}-${day}`
    let previousDay = new Date(date)
    previousDay.setDate(previousDay.getDate() - 1)

    console.log(`${previousDay.getFullYear()}-${previousDay.getMonth() + 1}-${previousDay.getDate()}`);
}

previousDay(2016, 9, 30)
previousDay(2016, 10, 1)
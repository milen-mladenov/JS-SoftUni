function requiredReading(pages, readSpeed, days){

    let hoursNeeded = pages / readSpeed;
    let hoursToRead = hoursNeeded / days;

    console.log(hoursToRead);
}

requiredReading(212,
    20 ,
    2 
    )
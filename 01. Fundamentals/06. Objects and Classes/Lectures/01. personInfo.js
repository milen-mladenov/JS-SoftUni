function personInfo(fName, lName, age) {

    let firstName = fName;
    let lastName = lName;
    age = Number(age);
    let obj = {
        firstName,
        lastName,
        age
    };

    return obj
}

personInfo("Peter",
    "Pan",
    "20"
)
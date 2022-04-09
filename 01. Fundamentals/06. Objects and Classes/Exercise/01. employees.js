function employees(input){

    let objEmployees = {}

    for(let curName of input){
         objEmployees.name = curName;
         objEmployees.personalNumber = curName.length;
        console.log(`Name: ${objEmployees.name} -- Personal Number: ${objEmployees.personalNumber}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )
console.log("=======");
    employees([
        'Samuel Jackson',
        'Will Smith',
        'Bruce Willis',
        'Tom Holland'
        ]
        )
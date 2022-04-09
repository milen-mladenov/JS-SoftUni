function convertToObject(input){
    let objs = JSON.parse(input);
    
    for(let obj of Object.keys(objs)){
        console.log(`${obj}: ${objs[obj]}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')
console.log("--------");
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}')
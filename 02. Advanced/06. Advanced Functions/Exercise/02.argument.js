function solve() {
    let input = arguments;
 
    let data = {};
 
    for(let el of input) {
       let type = typeof el;
        console.log(`${type}: ${el}`);
       if(!data[type]) {
        data[type] = 0;
       } 
        data[type] ++;
 
    }
 
    Object.entries(data).sort((a,b) => data[b]-data[a])
    .forEach(element => {
        console.log(`${element[0]} = ${element[1]}`);
    });
 
 
}

solve('cat', 42, function () { console.log('Hello world!'); });
function adAstra(input) {

    let property = /(\#|\|)(?<item>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>-?\d+(?:\.\d+)?)\1/g
    let text = input[0];
    let print = [];
    let match = property.exec(text);
    let food = 0;

    while (match !== null) {

        print.push(`Item: ${match.groups.item}, Best before: ${match.groups.date}, Nutrition: ${match.groups.calories}`)
        food += Number(match.groups.calories);
        match = property.exec(text);
    }

    let days = Math.floor(food / 2000);

    if (print.length > 0) {
        console.log(`You have food to last you for: ${days} days!`);
        for (let item of print) {
            console.log(item);
        }
    } else {
        console.log(`You have food to last you for: ${days} days!`);
    }

}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])

console.log("-------");
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])

console.log("-------");
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@'])
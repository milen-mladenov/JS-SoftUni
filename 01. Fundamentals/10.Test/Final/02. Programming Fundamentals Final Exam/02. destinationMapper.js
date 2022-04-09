function destinationMapper(input) {
    let text = input

    let pattern = /(=|\/)(?<word>[A-Z][A-Za-z]{2,})\1/g;
    let match = pattern.exec(text);
    let print = [];
    let points = 0;
    while (match !== null) {
        print.push(match.groups.word);
        points += match.groups.word.length
        match = pattern.exec(text)
    }

    console.log(`Destinations: ${print.join(", ")}`);
    console.log(`Travel Points: ${points}`);

}

function destination(input) {
    let travelPoints = 0;
    let arr = [];
    let destinations = input.match(/(=|\/)([A-Z][A-Za-z]{2,})(\1)/gm);
   
    if (destinations != null) {
      for (let destinationx of destinations) {
        let dest = destinationx.slice(1, -1);
        arr.push(dest);
        for (let i = 0; i < dest.length; i++) {
          travelPoints += 1;
        }
      }
      console.log(`Destinations: ${arr.join(", ")}`);
      console.log(`Travel Points: ${travelPoints}`);
    } else {
      console.log(`Destinations:`);
      console.log(`Travel Points: 0`);
    }
  }

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=Hawai=/Cyprus/=i=")
console.log("----");
destinationMapper("ThisIs some InvalidInput")
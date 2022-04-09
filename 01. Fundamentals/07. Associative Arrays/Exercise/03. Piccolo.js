function piccolo(input) {
    let inParl = {};
    for (let i = 0; i < input.length; i++) {
      let com = input[i].split(", ");
      let inOut = com[0];
      let carNum = com[1];
      if (inOut == "IN") {
        inParl[carNum] = 0;
      } else {
        delete inParl[carNum];
      }
    }
    let sorted = Object.entries(inParl).sort();
    if (sorted.length == 0) {
        console.log('Parking Lot is Empty');
    } else {
      for (const key of sorted) {
        console.log(key[0]);
      }
    }
  }
function fancyBarcodes(input) {
    let productCount = +input.shift();
    const pattern = /@#+(?<product>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;
    while (productCount > 0) {
        let barcode = input.shift();
        let match = pattern.exec(barcode);

        if (match != null) {
            let productGroup = "";
            let product = match.groups.product;
            for (let ch of product) {
                let isNumber = Number(ch);
                if (isNumber * 1 === isNumber) {

                    productGroup += ch;
                }
            }
            if (productGroup == "") {

                productGroup = "00";
            }
            console.log(`Product group: ${productGroup}`);
        } else {
            console.log("Invalid barcode");
        }
        productCount--;
    }
}

fancyBarcodes(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])


console.log("-------");


fancyBarcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])

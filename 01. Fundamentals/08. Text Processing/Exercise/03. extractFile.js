function extractFile(input){

    let fileName = input.lastIndexOf('\\') + 1
    let fileExtension = input.lastIndexOf('.');
    console.log("File name: " + input.substring(fileName,fileExtension))
    console.log("File extension: " + input.substring(fileExtension + 1));
}

extractFile('C:\\Internal\\training-internal\\Template.pptx')
console.log("-----");
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs')
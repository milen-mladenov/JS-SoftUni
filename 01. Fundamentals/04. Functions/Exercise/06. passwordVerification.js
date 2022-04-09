function passwordVerification(input) {

  let password = input;

  function passwordLength(password) {
    return password.length >= 6 && password.length <= 10;
  }

  function onlyLettersAndNumbers(password) {
    for (let passwordCheck of password) {
      let currChar = passwordCheck.charCodeAt(0);
      if (!(currChar >= 48 && currChar <= 57) &&
        !(currChar >= 65 && currChar <= 90) &&
        !(currChar >= 97 && currChar <= 122)) {
        return false;
      }
    }
    return true;
  }

  function countOfNumberCheck(password) {
    let count = 0;
    for (let passwordCheck of password) {
      let currChar = passwordCheck.charCodeAt(0);
      if ((currChar >= 48 && currChar <= 57)) {
        count++;
      }
    }
    return count >= 2;
  }

  let passwordLengthIsTrue = passwordLength(password);
  let sympholCheckTrue = onlyLettersAndNumbers(password);
  let numbersCountTrue = countOfNumberCheck(password);

  if (passwordLengthIsTrue && sympholCheckTrue && numbersCountTrue) {
    console.log(`Password is valid`);
  }
  if (!passwordLengthIsTrue) {
    console.log(`Password must be between 6 and 10 characters`);
  }
  if (!sympholCheckTrue) {
    console.log(`Password must consist only of letters and digits`)
  }
  if (!numbersCountTrue) {
    console.log(`Password must have at least 2 digits`)
  }

}

passwordVerification(`Passwo$2`)
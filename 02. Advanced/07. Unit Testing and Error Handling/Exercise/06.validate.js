function validate() {
    document.getElementById("email").addEventListener("change", onChange);
    function onChange(event) {
        const email = event.target.value
       let regEx = /[a-z]+\@[a-z]+\.[a-z]/
       let match = regEx.exec(email)
      if (match[0] !== null) {
          event.target.className = "";
      } else {
          event.target.className = "error";
      }
    }
  }
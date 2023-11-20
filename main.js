let email = document.getElementById("email");
let password = document.getElementById("password");
let btn = document.getElementById("btn");
let form = document.querySelector("#form");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  let username = email.value;
  let pass = password.value;
  if (username == "" && pass == "") {
    alert("enter username ");
  } else {
    if (
      (username === "jawad@gmail.com" && pass === "123") ||
      (username === "amine@gmail.com" && pass === "456")
    ) {
      let login = document.getElementById("login");

   

      login.textContent = "Welcome ";
      login.classList.add("succes");
      this.style.backgroundColor = "green";
    } else {
      let login = document.getElementById("login");

      login.textContent = " Sorry!  ";
      login.classList.add("danger");
      this.style.backgroundColor = "red";
    }
  }
});

// afficher le mot de passe

let mypassword = document.getElementById("password");
let show = document.getElementById("showpass");

show.addEventListener("click", function () {
  mypassword.type = show.checked ? "text" : "password";
});

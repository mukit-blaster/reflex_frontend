const inputs = document.querySelectorAll(".input");

function addcl() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function remcl() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", addcl);
  input.addEventListener("blur", remcl);
});












document.querySelector(".login-btn").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent form submission

  // Get username and password inputs
  const username = document.querySelector(".input-div.one .input").value;
  const password = document.querySelector(".input-div.pass .input").value;

  // Simple validation (optional)
  if (username && password) {
    // Store username in localStorage
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);

    // Redirect to the main page
    window.location.href = "./index.html";
  } else {
    alert("Please enter both username and password.");
  }
});


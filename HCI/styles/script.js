const signinButton = document.getElementById("signin-button");
const signupButton = document.getElementById("signup-button");

signinButton.addEventListener("click", function(event) {
  const username = document.querySelector("#popup1 input[name='uname']").value;
  const password = document.querySelector("#popup1 input[name='psw']").value;

  if (!username || !password) {
    event.preventDefault();
    alert("Please enter both username and password");
  } else {
    alert("Welcome " + username + "!");
    document.querySelector("#popup1 .close").click(); // close the modal
  }
});

signupButton.addEventListener("click", function(event) {
  const username = document.querySelector("#popup2 input[name='uname']").value;
  const email = document.querySelector("#popup2 input[name='email']").value;
  const password = document.querySelector("#popup2 input[name='psw']").value;

  if (!username || !email || !password) {
    event.preventDefault();
    alert("Please enter all required fields");
  } else {
    alert("Welcome " + username + "!");
    document.querySelector("#popup2 .close").click(); // close the modal
  }
});
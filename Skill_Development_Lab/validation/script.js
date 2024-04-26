function validate_email() {
  let email = document.getElementById("email").value;

  document.getElementById("email_error").innerText = "";

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!emailRegex.test(email)) {
    document.getElementById("email_error").innerText = "Invalid email format";
  }
}

function validateform() {
  let valid = true;
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmpassword = document.getElementById("confirmpassword").value;

  document.getElementById("firstname_error").innerText = "";
  document.getElementById("lastname_error").innerText = "";
  document.getElementById("email_error").innerText = "";
  document.getElementById("password_error").innerText = "";
  document.getElementById("confirmpassword_error").innerText = "";

  if (firstname === "") {
    valid = false;
    document.getElementById("firstname_error").innerText =
      "Please provide first name";
  }

  if (lastname === "") {
    valid = false;
    document.getElementById("lastname_error").innerText =
      "Please provide last name";
  }
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    valid = false;
    document.getElementById("email_error").innerText = "Enter proper email";
  }

  if (password.length < 6) {
    valid = false;
    document.getElementById("password_error").innerText =
      "Password length must be greater than 6 ";
  }

  if (password !== confirmpassword) {
    valid = false;
    document.getElementById("confirmpassword_error").innerText =
      "Please enter the same password ";
  }

  if (valid) {
    alert("Welcome  " + firstname + " " + lastname + " to our webpage");
    return true;
  } else {
    return false;
  }
}

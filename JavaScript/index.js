function isValidPassword(password, username) {
  if (
    password.length >= 8 &&
    !password.includes(username) &&
    !password.includes(" ")
  ) {
    return true;
  } else {
    return false;
  }
}

// be atleast 8 characters
console.log(isValidPassword("passwor", "user"));
console.log(isValidPassword("password", "user"));

// cannot contain spaces
console.log(isValidPassword("password", "user"));
console.log(isValidPassword("passwor d", "user"));

// cannot contain the username
console.log(isValidPassword("user", "user"));
console.log(isValidPassword("username", "user"));
console.log(isValidPassword("password", "user"));



// OBS! Extra function to try out password and username in form

function isValidPasswordForm() {
  const username = document.getElementById("usn").value;
  const password = document.getElementById("psw").value;

  if (
    password.length >= 8 &&
    !password.includes(username) &&
    !password.includes(" ")
  ) {
    console.log(true);
  } else {
    console.log(false);
  }
}
document.querySelector("button").addEventListener("click", function (e) {
  e.preventDefault();
  isValidPasswordForm();
});

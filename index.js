const submitForm = document.getElementById("submit_form");
const error = document.getElementById("error");
const success = document.getElementById("success");

const regex = /^[a-zA-Z]+$/;

submitForm.addEventListener("submit", function () {
  event.preventDefault();
  const password = event.target[0].value;
  const password2 = event.target[1].value;
  if (password.length < 8) {
    error.innerText = "Password should be 8 characters long";
    return error.classList.remove("invisible");
  }
  if (password !== password2) {
    error.innerText = "Password didn't matched";
    return error.classList.remove("invisible");
  }
  if (regex.test(password)) {
    error.innerText = "Password cannot be only alphabets";
    return error.classList.remove("invisible");
  }
  submitForm.classList.add("hidden");
  success.classList.remove("hidden");
});

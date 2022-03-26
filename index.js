const submitForm = document.getElementById("submit_form");
const error = document.getElementById("error");
const success = document.getElementById("success");

const regex = /^[a-zA-Z]+$/;

submitForm.addEventListener("submit", function () {
  event.preventDefault();
  const password = event.target[0];
  const password2 = event.target[1];
  if (password2.value.length < 8) {
    error.innerText = "Password should be 8 characters long";
    password2.classList.add("border-[#EB5757]");
    return error.classList.remove("invisible");
  }
  if (password.value !== password2.value) {
    error.innerText = "Password didn't matched";
    password2.classList.add("border-[#EB5757]");
    return error.classList.remove("invisible");
  }
  if (regex.test(password.value)) {
    error.innerText = "Password cannot be only alphabets";
    password2.classList.add("border-[#EB5757]");
    return error.classList.remove("invisible");
  }
  submitForm.classList.add("hidden");
  success.classList.remove("hidden");
});

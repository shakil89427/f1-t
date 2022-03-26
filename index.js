/* Get user input */
document.getElementById("submit_form").addEventListener("submit", function () {
  event.preventDefault();
  const error = document.getElementById("error");
  const password = event.target[0].value;
  const password2 = event.target[1].value;
  console.log(error.classList);
});

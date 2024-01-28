const container = document.querySelector(".container");
const signUpBtn = document.querySelector(".green-bg button");

signUpBtn.addEventListener("click", function signUpBtnHandler() {
  container.classList.toggle("change");
});

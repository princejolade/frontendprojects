const loginModal = document.querySelector(".login-form-wrapper");
const signupModal = document.querySelector(".signup-form-wrapper");
const signupBtn = document.querySelector(".signup-btn");
const loginBtn = document.querySelector(".login-btn");
const signUpX = document.querySelector(".signup-x");
const loginX = document.querySelector(".login-x");
const formContainer = document.querySelector(".form-container");

signupBtn.addEventListener("click", () => {
  formContainer.classList.add("disable");
  signupModal.classList.add("display");
});

loginBtn.addEventListener("click", () => {
  formContainer.classList.add("disable");
  loginModal.classList.add("display");
});

signUpX.addEventListener("click", () => {
  formContainer.classList.remove("disable");
  signupModal.classList.remove("display");
});

loginX.addEventListener("click", () => {
  console.log();
  formContainer.classList.remove("disable");
  loginModal.classList.remove("display");
});

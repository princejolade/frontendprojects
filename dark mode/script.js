const container = document.querySelector(".container");
const toggleBtn = document.querySelector(".toggle");

toggleBtn.addEventListener("click", function darkModeToggleHAndler() {
  container.classList.toggle("dark")
    ? (toggleBtn.firstElementChild.className = "far fa-moon")
    : (toggleBtn.firstElementChild.className = "far fa-sun");
});

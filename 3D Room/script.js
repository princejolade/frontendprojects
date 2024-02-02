const btn = document.querySelector(".btn");
const table = document.querySelector(".table");

btn.addEventListener("click", () => {
  table.classList.toggle("change");
});

const container = document.querySelector(".container");
const color1 = document.querySelector(".color-1");
const color2 = document.querySelector(".color-2");

color1.addEventListener("click", function colorChangeHandler() {
  container.classList.remove("change");
});

color2.addEventListener("click", function colorChangeHandler() {
  container.classList.add("change");
});

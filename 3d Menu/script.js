const centerItem = document.querySelector(".center-item");
const menu = document.querySelector(".menu");

centerItem.addEventListener("mouseover", function () {

    menu.classList.add("change");
});

menu.addEventListener("mouseleave", function () {

    menu.classList.remove("change");
});
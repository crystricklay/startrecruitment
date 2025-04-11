// js/header.js
document.addEventListener("DOMContentLoaded", function() {
    const burger = document.getElementById("burgerMenu");
    const header = document.getElementById("siteHeader");

    burger.addEventListener("click", function() {
        header.classList.toggle("open");
        burger.classList.toggle("open");
    });
});
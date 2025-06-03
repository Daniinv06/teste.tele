document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    toggle.addEventListener("click", function () {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });
});

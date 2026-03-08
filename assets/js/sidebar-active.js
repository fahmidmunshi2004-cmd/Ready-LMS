const btn = document.getElementById("menuBtn");
const sidebar = document.querySelector(".sidebar-area");
const overlay = document.querySelector(".sidebar-overlay");

btn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});
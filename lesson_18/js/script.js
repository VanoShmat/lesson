const burgerIcon = document.querySelector(".burger");
burgerIcon.addEventListener("click", () => {
    document.documentElement.classList.toggle("menu-open");
});

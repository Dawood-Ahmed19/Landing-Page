const hamburgerMenu = document.querySelector(".toggle-nav");
const navMenu = document.querySelector(".menu");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});

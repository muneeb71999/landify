import "./tailwind.css";
require("alpinejs");

// Custom Javascript
const navbar = document.querySelector(".navbar");
const dots = document.querySelectorAll(".dot");
let testimonials = document.querySelectorAll(".t-card");
window.addEventListener("scroll", () => {
  if (pageYOffset >= 100) {
    navbar.classList.add("bg-white");
    navbar.classList.add("shadow-lg");
  } else {
    navbar.classList.remove("bg-white");
    navbar.classList.remove("shadow-lg");
  }
});

dots.forEach((el, index) => slider(el, index));

function slider(el, index) {
  if (screen.width <= 400) {
    testimonials = document.querySelectorAll(".t-card w-64 mx-auto");
  }
  el.addEventListener("click", (e) => {
    e.preventDefault();
    dots.forEach((el) => el.classList.remove("active"));
    testimonials.forEach((el) => {
      el.style.transition = "transform 0.3s ease-in-out";
      el.style.transform = `translate(-${index * el.clientWidth}px, 0)`;
    });
    el.classList.toggle("active");
  });
}

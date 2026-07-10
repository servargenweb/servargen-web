const slides = document.querySelectorAll(".slide");
let current = 0;

function changeSlide(){
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
}

setInterval(changeSlide, 3000);
const slides = document.querySelectorAll(".slide");
let current = 0;

function changeSlide(){
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
}

setInterval(changeSlide, 3000);
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

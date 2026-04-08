
const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
const  themeToggle = document.getElementById("theme-toggle");
const body = document.body;

/* MOBILE MENU */
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* DARK MODE */
  if(themeToggle){
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  navLinks.classList.toggle('nav-dark');
  themeToggle.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});
  }

/* SCROLL NAVBAR */
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
  navLinks.classList.remove('active');
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});
  
//typing effect
 const words = ["Frontend Developer","Web Designer","Responsive Design Expert"];
 let i = 0
let j = 0
let currentWord = ""
let isDeleting = false;
type();
var typeData = new Typed(".role", {
  strings: ["Front-end Developer", "Freelancer", "Problem Solver", "Coder"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
});

const mobileNav = document.querySelector(".main");
const nav_header = document.querySelector(".nav-container");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobileNav.addEventListener("click", () => toggleNavbar());

document.onclick = function (e) {
  if (e.target.id != "open-btn" && e.target.id != "close-btn") {
    nav_header.classList.remove("active");
  }
};

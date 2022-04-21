const navBtn = document.querySelector(".nav-btn");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const navLinks = document.querySelectorAll(".nav__link");

const openNav = () => {
  navBtn.classList.add("active");
  nav.classList.add("active");
  overlay.classList.add("active");
};

const closeNav = () => {
  navBtn.classList.remove("active");
  nav.classList.remove("active");
  overlay.classList.remove("active");
};

navBtn.addEventListener("click", () => {
  if (navBtn.classList.contains("active")) {
    closeNav();
  } else {
    openNav();
  }
});

overlay.addEventListener("click", closeNav);

document.body.addEventListener("click", () => {
  navLinks.forEach((navLink) => {
    navLink.classList.remove("show");
  });
});

navLinks.forEach((thisLink) => {
  thisLink.addEventListener("click", (e) => {
    e.stopPropagation();
    thisLink.classList.toggle("active");
    navLinks.forEach((navLink) => {
      navLink !== thisLink && navLink.classList.remove("show");
    });
    thisLink.classList.toggle("show");
  });
});
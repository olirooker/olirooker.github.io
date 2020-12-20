const menuNav = document.getElementById("mobile-nav");
const desktopContactBtn = document.getElementById("contact-button");

toggle = () => {
  if (menuNav.classList.contains("mobile-nav-open")) {
    menuNav.classList.remove("mobile-nav-open");
  } else {
    menuNav.classList.add("mobile-nav-open");
  }
};

const navToggle = document.getElementById("toggle");

toggleNav = () => {
  const navToggle = document.getElementById("toggle");
  navToggle.classList.toggle("active");
};

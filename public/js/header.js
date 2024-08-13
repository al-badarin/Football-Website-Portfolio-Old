const header = document.querySelector('header');
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('header nav ul');
const navLinks = document.querySelectorAll('#nav-menu a');

document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', handleScroll);

  menuToggle.addEventListener('click', toggleMenu);

  navLinks.forEach((link) => {
    link.addEventListener('click', hideMenu);
  });
});

// Function to handle sticky header on scroll
function handleScroll() {
  if (window.scrollY > 50) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

// Function to toggle the navigation menu visibility
function toggleMenu() {
  navMenu.classList.toggle('active');
}

// Function to hide the navigation menu when a link is clicked
function hideMenu() {
  navMenu.classList.remove('active');
}

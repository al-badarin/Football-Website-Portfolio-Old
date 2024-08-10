document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for navigation links
  const links = document.querySelectorAll('nav ul li a');

  for (const link of links) {
    link.addEventListener('click', smoothScroll);
  }

  function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 60,
      behavior: 'smooth',
    });
  }
});

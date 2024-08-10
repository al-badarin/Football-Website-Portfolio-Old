document.addEventListener('DOMContentLoaded', function () {
  const elementsToAnimate = document.querySelectorAll('[data-animate]');

  const animateOnScroll = () => {
    elementsToAnimate.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight - 100) {
        element.classList.add('animate');
      }
    });
  };

  window.addEventListener('scroll', animateOnScroll);

  // Trigger animation on page load in case elements are already in view
  animateOnScroll();
});

document.addEventListener('DOMContentLoaded', function () {
  // Define constants for service ID and template ID
  const SERVICE_ID = 'jamal-id';
  const TEMPLATE_ID = 'football-website-email';
  const USER_ID = 'Y57XhLmA9mcdPNkyk';

  // Initialize EmailJS with the USER_ID
  emailjs.init(USER_ID);

  const form = document.getElementById('contact-form');
  const formMessages = document.getElementById('form-messages');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Client-side validation
    const userName = form.querySelector('input[name="from_name"]');
    const userEmail = form.querySelector('input[name="from_email"]');
    const message = form.querySelector('textarea[name="message"]');

    // Clear previous messages
    formMessages.innerHTML = '';

    // Basic validation
    if (
      userName.value.trim() === '' ||
      userEmail.value.trim() === '' ||
      message.value.trim() === ''
    ) {
      showError('Please fill out all fields.');
      return;
    }

    if (!validateEmail(userEmail.value)) {
      showError('Please enter a valid email address.');
      return;
    }

    // Send email using EmailJS
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form).then(
      function () {
        showSuccess('Your message has been sent successfully!');
        form.reset();
      },
      function (error) {
        showError('Oops! Something went wrong. Please try again.');
      }
    );
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function showError(message) {
    formMessages.className = 'error';
    formMessages.textContent = message;
    clearMessageAfterDelay();
  }

  function showSuccess(message) {
    formMessages.className = 'success';
    formMessages.textContent = message;
    clearMessageAfterDelay();
  }

  function clearMessageAfterDelay() {
    setTimeout(() => {
      formMessages.innerHTML = '';
      formMessages.className = '';
    }, 3000);
  }
});
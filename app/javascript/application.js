document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Form validation script (example for a contact form)
  document.querySelector('#contact-form').addEventListener('submit', function(e) {
    const email = document.querySelector('#email').value;
    if (!email.includes('@')) {
      e.preventDefault(); // Prevent form submission
      alert('Please enter a valid email address.');
    }
  });
});

// Toggle navigation menu on small screens
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Smooth scrolling behavior
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });

    // Close menu on mobile after clicking a link
    if (window.innerWidth <= 768) {
      navLinks.classList.remove('show');
    }
  });
});

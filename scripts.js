// Smooth scroll to section
function scrollToSection(id) {
  const element = document.getElementById(id);
  const navHeight = document.querySelector('.navbar').offsetHeight;
  const elementPosition = element.offsetTop - navHeight;
  
  window.scrollTo({
    top: elementPosition,
    behavior: 'smooth'
  });
}

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Close menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });
}

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    navbar.style.padding = '10px 0';
    navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.2)';
  } else {
    navbar.style.padding = '20px 0';
    navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
  }
  
  lastScroll = currentScroll;
});

// Gallery image click (optional lightbox effect)
const galleryImages = document.querySelectorAll('.gallery-grid img');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    // You can add a lightbox/modal here if desired
    console.log('Image clicked:', img.src);
  });
});
// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  observer.observe(section);
});

// Set current year
document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.querySelector('.footer-bottom p');
  if (yearElement) {
    yearElement.innerHTML = yearElement.innerHTML.replace('2025', new Date().getFullYear());
  }
});

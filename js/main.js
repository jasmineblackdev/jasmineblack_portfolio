// Portfolio JavaScript
// Main functionality for navigation, mobile menu, and interactions

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-menu-list a');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      
      // Update icon
      const icon = menuToggle.querySelector('svg use');
      if (icon) {
        const currentHref = icon.getAttribute('href');
        if (currentHref.includes('menu')) {
          icon.setAttribute('href', '#icon-x');
        } else {
          icon.setAttribute('href', '#icon-menu');
        }
      }
    });
    
    // Close mobile menu when clicking a link
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        const icon = menuToggle.querySelector('svg use');
        if (icon) {
          icon.setAttribute('href', '#icon-menu');
        }
      });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('active');
        const icon = menuToggle.querySelector('svg use');
        if (icon) {
          icon.setAttribute('href', '#icon-menu');
        }
      }
    });
  }
  
  // Active Navigation Link
  highlightActiveNav();
  
  // Scroll animations
  observeElements();
});

// Highlight active navigation link based on current page
function highlightActiveNav() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.navbar-link, .mobile-menu-list .navbar-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    // Handle index/home page
    if ((currentPath === '/' || currentPath.endsWith('index.html')) && 
        (href === '/' || href === 'index.html' || href === './index.html')) {
      link.classList.add('active');
    }
    // Handle other pages
    else if (href && currentPath.includes(href) && href !== '/' && href !== 'index.html') {
      link.classList.add('active');
    }
  });
}

// Intersection Observer for scroll animations
function observeElements() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('loaded');
      }
    });
  }, observerOptions);
  
  // Observe elements that should animate on scroll
  const elements = document.querySelectorAll('.loading');
  elements.forEach(el => observer.observe(el));
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add loading class to cards for stagger animation
window.addEventListener('load', function() {
  const cards = document.querySelectorAll('.case-study-card, .feature-card, .credibility-item, .work-item, .contact-item, .about-section');
  cards.forEach(card => {
    card.classList.add('loading');
  });
  
  // Trigger observation
  setTimeout(() => {
    observeElements();
  }, 100);
});

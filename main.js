// Change Navbar Background on Scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile Menu Toggle
const toggleButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Highlight Active Link
const navItems = document.querySelectorAll(".nav-link");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((link) => link.classList.remove("active"));
    item.classList.add("active");
  });
});

// Typing animation in the Hero section
document.addEventListener("DOMContentLoaded", () => {
  const typed = document.querySelector(".typed");
  if (typed) {
    const typedItems = typed.getAttribute("data-typed-items").split(",");
    let typedIndex = 0;
    let typingSpeed = 100;
    let deletingSpeed = 50;
    let pauseBetween = 2000;
    let isDeleting = false;
    
    const type = () => {
      const currentWord = typedItems[typedIndex];
      const currentLength = typed.textContent.length;
      
      if (isDeleting) {
        typed.textContent = currentWord.substring(0, currentLength - 1);
      } else {
        typed.textContent = currentWord.substring(0, currentLength + 1);
      }
      
      if (!isDeleting && currentLength === currentWord.length) {
        isDeleting = true;
        setTimeout(type, pauseBetween);
      } else if (isDeleting && currentLength === 0) {
        isDeleting = false;
        typedIndex = (typedIndex + 1) % typedItems.length;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
      }
    };
    
    type();
  }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Initialize AOS (Animate on Scroll)
AOS.init();
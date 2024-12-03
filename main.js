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
  
  // Form submission placeholder
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for your message! We will get back to you shortly.");
      form.reset();
    });
  }
  
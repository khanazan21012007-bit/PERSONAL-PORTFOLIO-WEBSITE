document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      const icon = menuToggle.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
      }
    });
    ;
    document.querySelectorAll(".nav-menu a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        const icon = menuToggle.querySelector("i");
        if (icon) {
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-xmark");
        }
      });
    });
  }

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-menu a:not(.nav-cta)");

  window.addEventListener("scroll", () => {
    let currentSection = "";
    sections.forEach((sec) => {
      const sectionTop = sec.offsetTop - 150;
      if (window.scrollY >= sectionTop) {
        currentSection = sec.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });

  const contactForm = document.getElementById("contactForm");
  const formSuccess = document.getElementById("formSuccess");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const messageInput = document.getElementById("message");
      let isFormValid = true;

      if (!nameInput.value.trim()) {
        nameInput.classList.add("error");
        isFormValid = false;
      } else {
        nameInput.classList.remove("error");
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        emailInput.classList.add("error");
        isFormValid = false;
      } else {
        emailInput.classList.remove("error");
      }

      if (!messageInput.value.trim()) {
        messageInput.classList.add("error");
        isFormValid = false;
      } else {
        messageInput.classList.remove("error");
      }

      if (isFormValid) {
        contactForm.reset();
        if (formSuccess) {
          formSuccess.classList.remove("hidden");
          setTimeout(() => {
            formSuccess.classList.add("hidden");
          }, 5000);
        }
      }
    });
  }
});

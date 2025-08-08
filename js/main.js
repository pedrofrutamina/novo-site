/* troca de tema */
const toggleButton = document.getElementById("themeToggle");
const icon = toggleButton.querySelector("i");
const htmlEl = document.documentElement;

// Recupera o tema salvo ou padrão claro
const savedTheme = localStorage.getItem("theme") || "light";
htmlEl.setAttribute("data-theme", savedTheme);
icon.className = savedTheme === "dark" ? "bi bi-sun" : "bi bi-moon";

// Alternar tema
toggleButton.addEventListener("click", () => {
  const currentTheme = htmlEl.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  htmlEl.setAttribute("data-theme", newTheme);
  icon.className = newTheme === "dark" ? "bi bi-sun" : "bi bi-moon";
  localStorage.setItem("theme", newTheme);
});

// Menu Responsivo
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");

  const icon = menuToggle.querySelector("i");
  icon.classList.toggle("bi-list");
  icon.classList.toggle("bi-x");
});

/* active do menu  */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-menu-header a");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute("id");
    const navLink = document.querySelector(`.nav-menu-header a[href="#${id}"]`);

    if (entry.isIntersecting) {
      navLinks.forEach((link) => link.classList.remove("active"));
      if (navLink) {
        navLink.classList.add("active");
      }
    }
  });
}, {
  rootMargin: "-50% 0px -50% 0px", // Detecta o centro da seção
  threshold: 0
});

sections.forEach((section) => observer.observe(section));



// Botão Voltar ao Topo
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'flex';
  } else {
    backToTopBtn.style.display = 'none';
  }
});
backToTopBtn.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});






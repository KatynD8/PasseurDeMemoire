// assets/js/animations/sectionObserver.js

// Configuration des options de l'IntersectionObserver
const observerOptions = {
  root: null,
  rootMargin: "-50px 0px -100px 0px",
  threshold: 0.1,
};

// Fonction de callback
function animateOnScroll(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      // observer.unobserve(entry.target); // Décommentez si l'anim doit se jouer une seule fois
    }
  });
}

// Crée l'observer
const scrollObserver = new IntersectionObserver(
  animateOnScroll,
  observerOptions
);

// Initialise l'observation des sections
export function initSectionObserver() {
  const sections = document.querySelectorAll(".about, .contact");
  sections.forEach((section) => {
    // S'assurer que les sections commencent invisibles
    section.classList.remove("visible");
    scrollObserver.observe(section);
  });
}

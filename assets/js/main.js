document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".about, .contact");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => observer.observe(section));
});

// Configuration des options pour l'IntersectionObserver
const observerOptions = {
  root: null, // viewport
  rootMargin: "-50px 0px -100px 0px", // déclenche l'animation un peu avant que l'élément soit visible
  threshold: 0.1, // déclenche quand 10% de l'élément est visible
};

// Fonction pour animer les éléments
function animateOnScroll(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Ajouter la classe 'visible' pour déclencher l'animation CSS
      entry.target.classList.add("visible");

      // Optionnel : arrêter d'observer cet élément une fois animé
      // observer.unobserve(entry.target);
    } else {
      // Optionnel : retirer la classe si l'élément sort du viewport
      // Décommentez cette ligne si vous voulez que l'animation se répète
      // entry.target.classList.remove('visible');
    }
  });
}

// Créer l'observer
const scrollObserver = new IntersectionObserver(
  animateOnScroll,
  observerOptions
);

// Initialisation au chargement de la page
document.addEventListener("DOMContentLoaded", function () {
  // Observer tous les éléments avec animation
  const animatedElements = document.querySelectorAll(".about, .contact");
  animatedElements.forEach((element) => {
    scrollObserver.observe(element);
  });

  // Smooth scroll pour les liens d'ancrage
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});

// Langue switcher
document.getElementById("lang-switch").addEventListener("change", function () {
  let target = this.value;

  // On détecte si on est déjà dans un sous-dossier (ex: /en/ ou /he/)
  const currentPath = window.location.pathname;

  if (target === "index.html") {
    // On veut revenir à la racine
    if (currentPath.includes("/en/") || currentPath.includes("/he/")) {
      window.location.href = "../index.html";
    } else {
      window.location.href = "index.html";
    }
  } else {
    // Pour aller vers en/ ou he/ → toujours relatif à la racine
    if (currentPath.includes("/en/") || currentPath.includes("/he/")) {
      window.location.href = "../" + target;
    } else {
      window.location.href = target;
    }
  }
});

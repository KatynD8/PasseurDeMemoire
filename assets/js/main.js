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

// Animation des icônes sociales
function animateSocialIcons() {
  const socialIcons = document.querySelectorAll(".hero aside i");

  socialIcons.forEach((icon, index) => {
    setTimeout(() => {
      icon.style.opacity = "0";
      icon.style.transform = "translateY(20px)";
      icon.style.transition = "all 0.6s ease";

      setTimeout(() => {
        icon.style.opacity = "1";
        icon.style.transform = "translateY(0)";
      }, 100);
    }, index * 200); // décalage de 200ms entre chaque icône
  });
}

// Animation du texte hero (effet machine à écrire)
function typewriterEffect() {
  const heroTitle = document.querySelector(".hero h1");
  const heroText = document.querySelector(".hero p");

  if (heroTitle && heroText) {
    const titleText = heroTitle.textContent;
    const paragraphText = heroText.textContent;

    // Vider le contenu
    heroTitle.textContent = "";
    heroText.textContent = "";
    heroTitle.style.opacity = "1";
    heroText.style.opacity = "1";

    // Animer le titre
    let titleIndex = 0;
    function typeTitle() {
      if (titleIndex < titleText.length) {
        heroTitle.textContent += titleText.charAt(titleIndex);
        titleIndex++;
        setTimeout(typeTitle, 50);
      } else {
        // Une fois le titre terminé, animer le paragraphe
        setTimeout(typeParagraph, 300);
      }
    }

    // Animer le paragraphe
    let paragraphIndex = 0;
    function typeParagraph() {
      if (paragraphIndex < paragraphText.length) {
        heroText.textContent += paragraphText.charAt(paragraphIndex);
        paragraphIndex++;
        setTimeout(typeParagraph, 20);
      } else {
        // Une fois terminé, animer le bouton
        setTimeout(() => {
          const heroButton = document.querySelector(".hero .btn-primary");
          if (heroButton) {
            heroButton.style.opacity = "0";
            heroButton.style.transform = "translateY(30px)";
            heroButton.style.transition = "all 0.8s ease";

            setTimeout(() => {
              heroButton.style.opacity = "1";
              heroButton.style.transform = "translateY(0)";
            }, 100);
          }
        }, 200);
      }
    }

    setTimeout(typeTitle, 500); // Commencer après 500ms
  }
}

// Animation du formulaire
function animateFormInputs() {
  const formInputs = document.querySelectorAll(
    ".contact form input, .contact form textarea"
  );

  formInputs.forEach((input) => {
    input.addEventListener("focus", function () {
      this.style.transform = "scale(1.02)";
      this.style.boxShadow = "0 4px 20px rgba(173, 132, 95, 0.2)";
    });

    input.addEventListener("blur", function () {
      this.style.transform = "scale(1)";
      this.style.boxShadow = "none";
    });
  });
}

// Initialisation au chargement de la page
document.addEventListener("DOMContentLoaded", function () {
  // Observer tous les éléments avec animation
  const animatedElements = document.querySelectorAll(".about, .contact");
  animatedElements.forEach((element) => {
    scrollObserver.observe(element);
  });

  // Ajouter l'événement de scroll pour le header
  window.addEventListener("scroll", handleHeaderScroll);

  // Lancer les animations initiales
  setTimeout(typewriterEffect, 1000);
  setTimeout(animateSocialIcons, 2000);
  setTimeout(animateFormInputs, 100);

  // Animation des liens du header
  const headerLinks = document.querySelectorAll(".header nav a");
  headerLinks.forEach((link, index) => {
    link.style.opacity = "0";
    link.style.transform = "translateY(-20px)";

    setTimeout(() => {
      link.style.transition = "all 0.6s ease";
      link.style.opacity = "1";
      link.style.transform = "translateY(0)";
    }, 1500 + index * 100);
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

// Animation au survol des icônes sociales
document.addEventListener("DOMContentLoaded", function () {
  const socialIcons = document.querySelectorAll(".hero aside i");

  socialIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px) scale(1.1) rotate(5deg)";
    });

    icon.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(-2px) scale(1.05)";
    });
  });
});

// Parallax léger pour le hero
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
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

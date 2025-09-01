// assets/js/animations/heroAnimations.js

export function initHeroAnimations() {
  const heroTop = document.querySelector(".hero-top");
  const heroBot = document.querySelector(".hero-bot");

  if (heroTop) {
    heroTop.classList.add("visible");
  }

  // Sélection des éléments du haut (titre, bouton, textes, séparateurs)
  const heroTopElements = document.querySelectorAll(
    ".hero_content_left h1, .hero_content_left a, .hero_texts h4, .hero_texts img"
  );

  // On anime les éléments du haut un par un
  heroTopElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, 200 + index * 200);
  });

  // Une fois que les éléments du haut sont animés, on enchaîne avec le bas
  if (heroBot) {
    const heroBotElements = heroBot.querySelectorAll("h4, a");

    heroBotElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("visible");
      }, 200 + heroTopElements.length * 200 + index * 200);
    });
  }
}

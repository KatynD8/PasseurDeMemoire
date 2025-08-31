// assets/js/animations/heroAnimations.js

export function initHeroAnimations() {
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    heroContent.classList.add("visible");
  }

  const heroElements = document.querySelectorAll(
    ".hero_content_left h1, .hero_content_left a, .hero_texts h4, .hero_texts img"
  );

  heroElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, 200 + index * 200);
  });
}

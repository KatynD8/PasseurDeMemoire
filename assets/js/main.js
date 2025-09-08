// assets/js/main.js

import { initSectionObserver } from "./animations/sectionObserver.js";
import { initHeroAnimations } from "./animations/heroAnimations.js";
import { initSmoothScroll } from "./navigation/smoothScroll.js";
import { initLangSwitcher } from "./utils/langSwitcher.js";

document.addEventListener("DOMContentLoaded", () => {
  initSectionObserver();
  initSmoothScroll();
  initLangSwitcher();
  initHeroAnimations();
});
const wrapper = document.querySelector(".testimonials-wrapper");
document.querySelector(".scroll-left").addEventListener("click", () => {
  wrapper.scrollBy({ left: -400, behavior: "smooth" });
});
document.querySelector(".scroll-right").addEventListener("click", () => {
  wrapper.scrollBy({ left: 400, behavior: "smooth" });
});

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

// assets/js/utils/langSwitcher.js

export function initLangSwitcher() {
  const switcher = document.getElementById("lang-switch");
  if (!switcher) return;

  switcher.addEventListener("change", function () {
    let target = this.value;
    const currentPath = window.location.pathname;

    if (target === "index.html") {
      if (currentPath.includes("/en/") || currentPath.includes("/he/")) {
        window.location.href = "../index.html";
      } else {
        window.location.href = "index.html";
      }
    } else {
      if (currentPath.includes("/en/") || currentPath.includes("/he/")) {
        window.location.href = "../" + target;
      } else {
        window.location.href = target;
      }
    }
  });
}

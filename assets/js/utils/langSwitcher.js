// assets/js/utils/langSwitcher.js
export function initLangSwitcher() {
  const switcher = document.getElementById("lang-switch");
  if (!switcher) return;

  switcher.addEventListener("change", function () {
    const target = this.value; // ex: "index.html", "en/index.html", "he/faq.html"
    const origin = window.location.origin;

    // On récupère éventuellement le nom du repo (cas GitHub Pages Project site)
    const parts = window.location.pathname.split("/").filter(Boolean);
    let repoName = "";

    if (
      parts.length > 0 &&
      !["en", "he"].includes(parts[0]) &&
      !parts[0].includes(".")
    ) {
      repoName = parts[0]; // ex: "mon-site"
    }

    const basePath = repoName ? `/${repoName}/` : `/`;
    window.location.href = origin + basePath + target;
  });
}

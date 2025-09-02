// assets/js/utils/langSwitcher.js
export function initLangSwitcher() {
  const switcher = document.getElementById("lang-switch");
  if (!switcher) return;

  switcher.addEventListener("change", function () {
    const target = this.value; // ex: "index.html" ou "en/index.html"
    const origin = window.location.origin;

    // split + filter pour ne garder que les segments non vides
    const parts = window.location.pathname.split("/").filter(Boolean);
    let baseSegments = [];

    if (parts.length === 0) {
      baseSegments = [];
    } else {
      const last = parts[parts.length - 1];
      const lastIsFile = last.includes(".");

      if (lastIsFile) {
        // si le segment avant le fichier est un code langue (ex: "en", "he")
        const prev = parts[parts.length - 2];
        const prevIsLang = prev && /^[a-z]{2,3}$/i.test(prev);
        baseSegments = parts.slice(0, parts.length - (prevIsLang ? 2 : 1));
      } else {
        // la route se termine par un dossier (ex: /repo-name/en/ ou /repo-name/)
        const lastIsLang = /^[a-z]{2,3}$/i.test(last);
        baseSegments = lastIsLang
          ? parts.slice(0, parts.length - 1)
          : parts.slice(0);
      }
    }

    const basePath =
      "/" + baseSegments.join("/") + (baseSegments.length ? "/" : "");
    const base = origin + basePath;

    // si la valeur du select est déjà absolue (/...) ou complète (http://...), on l'utilise directement
    if (/^(\/|https?:\/\/)/i.test(target)) {
      window.location.href = target;
      return;
    }

    window.location.href = base + target;
  });
}

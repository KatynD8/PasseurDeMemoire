const wrapper = document.querySelector(".testimonials-wrapper");
document.querySelector(".scroll-left").addEventListener("click", () => {
  wrapper.scrollBy({ left: -400, behavior: "smooth" });
});
document.querySelector(".scroll-right").addEventListener("click", () => {
  wrapper.scrollBy({ left: 400, behavior: "smooth" });
});

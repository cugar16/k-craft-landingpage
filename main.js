/* K-CRAFT WEAVES — JavaScript interactions separated from the HTML. */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Automatically update the footer year.
  const year = document.getElementById("currentYear");
  if (year) year.textContent = new Date().getFullYear();
  // 2. Add a subtle shadow to the navigation after scrolling.
  const nav = document.querySelector(".site-nav");
  const setNavShadow = () => nav && nav.classList.toggle("nav-shadow", window.scrollY > 8);
  setNavShadow(); window.addEventListener("scroll", setNavShadow, { passive: true });
  // 3. Close the Bootstrap mobile menu after a navigation link is clicked.
  const navPanel = document.getElementById("primaryNav");
  if (navPanel && window.bootstrap) {
    const collapse = bootstrap.Collapse.getOrCreateInstance(navPanel, { toggle: false });
    navPanel.querySelectorAll("a").forEach(link => link.addEventListener("click", () => { if (navPanel.classList.contains("show")) collapse.hide(); }));
  }
  // 4. Filter products by the category data attribute in index.html.
  const filters = document.querySelectorAll(".filter-btn"), products = document.querySelectorAll(".product-column");
  filters.forEach(button => button.addEventListener("click", () => {
    const category = button.dataset.filter;
    filters.forEach(item => item.classList.toggle("active", item === button));
    products.forEach(card => card.classList.toggle("d-none", category !== "all" && card.dataset.category !== category));
  }));
  // 5. Review slider controls: desktop shows all cards; smaller screens slide horizontally.
  const track = document.getElementById("reviewTrack"), prev = document.getElementById("reviewPrev"), next = document.getElementById("reviewNext");
  let reviewIndex = 0;
  const updateReviews = () => {
    if (!track) return;
    const cards = track.querySelectorAll(".review-card"); if (!cards.length) return;
    if (window.matchMedia("(min-width: 992px)").matches) { track.style.transform = "translateX(0)"; return; }
    reviewIndex = Math.max(0, Math.min(reviewIndex, cards.length - 1));
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.style.transform = `translateX(-${reviewIndex * (cards[0].getBoundingClientRect().width + gap)}px)`;
  };
  if (prev && next && track) { prev.addEventListener("click", () => { reviewIndex--; updateReviews(); }); next.addEventListener("click", () => { reviewIndex++; updateReviews(); }); window.addEventListener("resize", updateReviews); updateReviews(); }
});

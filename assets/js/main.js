(() => {
  "use strict";
  const year = new Date().getFullYear();
  document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = String(year); });

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      nav.classList.toggle("open", open);
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
    }));
  }

  const search = document.querySelector("#project-search");
  const cards = [...document.querySelectorAll("#project-list [data-category]")];
  const filterButtons = [...document.querySelectorAll("[data-filter]")];
  const empty = document.querySelector("#no-results");
  let currentFilter = "all";

  function updateProjects() {
    if (!cards.length) return;
    const query = (search?.value || "").trim().toLowerCase();
    let shown = 0;
    cards.forEach((card) => {
      const category = (card.dataset.category || "").split(/\s+/);
      const searchable = `${card.dataset.search || ""} ${card.textContent || ""}`.toLowerCase();
      const matchesFilter = currentFilter === "all" || category.includes(currentFilter);
      const matchesQuery = !query || searchable.includes(query);
      const visible = matchesFilter && matchesQuery;
      card.hidden = !visible;
      if (visible) shown++;
    });
    if (empty) empty.hidden = shown !== 0;
  }
  if (search) search.addEventListener("input", updateProjects);
  filterButtons.forEach((button) => button.addEventListener("click", () => {
    currentFilter = button.dataset.filter || "all";
    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    updateProjects();
  }));
  filterButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.classList.contains("active"))));
  updateProjects();
})();
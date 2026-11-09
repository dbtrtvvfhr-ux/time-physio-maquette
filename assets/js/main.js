/* Time-Physio — interactions de la maquette */
(() => {
  const root = document.documentElement;

  /* ---------- 1. changement de piste ---------- */
  const PISTES = {
    a: "01 · Cabinet de quartier — chaleureux, éditorial, séances en lumière naturelle",
    b: "02 · Geste précis — blanc clinique, beaucoup d'air, précision",
    c: "03 · Pleine amplitude — contraste, énergie, mouvement"
  };

  const buttons = [...document.querySelectorAll("[data-set-piste]")];

  function setPiste(key, remember = true) {
    if (!PISTES[key]) return;
    root.dataset.piste = key;
    buttons.forEach((b) => {
      const active = b.dataset.setPiste === key;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-checked", String(active));
    });
    document.title = `Time-Physio — Physiothérapie à Lausanne · Piste ${key.toUpperCase()}`;
    if (remember) {
      try { localStorage.setItem("tp-piste", key); } catch (e) {}
    }
  }

  buttons.forEach((b) => b.addEventListener("click", () => setPiste(b.dataset.setPiste)));

  let saved = null;
  try { saved = localStorage.getItem("tp-piste"); } catch (e) {}
  const params = new URLSearchParams(location.search);
  if (params.has("clean")) document.body.classList.add("is-clean");
  const fromUrl = params.get("piste");
  setPiste(fromUrl && PISTES[fromUrl] ? fromUrl : saved && PISTES[saved] ? saved : "a", false);

  /* ---------- 2. header au scroll ---------- */
  const header = document.querySelector(".site-header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- 3. menu mobile ---------- */
  const burger = document.querySelector(".burger");
  const menu = document.getElementById("menu-mobile");

  function toggleMenu(force) {
    const open = typeof force === "boolean" ? force : menu.hidden;
    menu.hidden = !open;
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
  }

  burger.addEventListener("click", () => toggleMenu());
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => toggleMenu(false)));
  window.addEventListener("resize", () => { if (window.innerWidth > 980) toggleMenu(false); });

  /* ---------- 4. apparitions au scroll ---------- */
  const targets = document.querySelectorAll(
    ".section-head, .needs, .pathos, .reviews, .machines__grid, .locaux, .steps, .tarif-list, .faq__list, .contact-form, .bubbles, .booking, .approche__copy"
  );

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    targets.forEach((el) => { el.setAttribute("data-reveal", ""); io.observe(el); });
  }

  /* ---------- 5. toast ---------- */
  const toast = document.querySelector(".toast");
  let toastTimer;

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 4200);
  }

  /* ---------- 6. formulaires (démo) ---------- */
  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const isRdv = form.classList.contains("rdv-form");
      const ok = form.checkValidity();
      if (!ok) {
        showToast("Maquette : complétez les champs pour voir l'état d'erreur.");
        form.querySelectorAll(":invalid").forEach((f) => f.focus());
        return;
      }
      showToast(
        isRdv
          ? "Maquette — ce module sera branché sur votre système de réservation."
          : "Maquette — le formulaire sera relié à votre messagerie."
      );
      form.reset();
    });
  });

  /* ---------- 7. lien d'ancre avec offset ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
      history.replaceState(null, "", id);
    });
  });
})();

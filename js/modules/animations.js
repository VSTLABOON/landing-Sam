export function initAnimations() {

  // ─────────────────────────────────────────────────────────────────
  // 1. SCROLL REVEAL
  // ─────────────────────────────────────────────────────────────────
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { root: null, rootMargin: '0px 0px -15% 0px', threshold: 0 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // ─────────────────────────────────────────────────────────────────
  // 2. REFERENCIAS CACHEADAS (evita querySelector en cada scroll)
  // ─────────────────────────────────────────────────────────────────
  const heroContent = document.getElementById('hero-parallax');
  const heroOrbs    = document.querySelectorAll('.hero-bg-orb');
  const section     = document.querySelector('.horizontal-scroll-section');
  const track       = document.getElementById('universo-track');

  // ─────────────────────────────────────────────────────────────────
  // 3. DETECCIÓN DE MODO
  //    isDesktop() se llama en cada evento para responder a resize
  // ─────────────────────────────────────────────────────────────────
  const isDesktop = () => window.innerWidth > 768;

  // ─────────────────────────────────────────────────────────────────
  // 4. SETUP DE LA ALTURA FALSA — solo en desktop
  //    Se llama en load, resize y cuando las imágenes terminan de cargar
  //    Fórmula: trackScrollWidth + viewH
  //      → scrollRange = (trackScrollWidth + viewH) - viewH = trackScrollWidth ✓
  // ─────────────────────────────────────────────────────────────────
  const setupHorizontalScroll = () => {
    if (!section || !track) return;

    if (isDesktop()) {
      requestAnimationFrame(() => {
        // Reseteamos transform para medir el scrollWidth limpio
        track.style.transform = 'translateX(0px)';

        const trackWidth = track.scrollWidth;
        const viewH      = window.innerHeight;

        section.style.height = `${trackWidth + viewH}px`;

        // Recalculamos posición por si ya estábamos a mitad
        onScroll();
      });
    } else {
      // MÓVIL: deshacemos todo lo que hizo el modo desktop
      section.style.height    = 'auto';
      track.style.transform   = 'translateX(0px)';  // ← limpia cualquier transform residual
      track.style.willChange  = 'auto';
    }
  };

  // ─────────────────────────────────────────────────────────────────
  // 5. SCROLL HANDLER UNIFICADO
  // ─────────────────────────────────────────────────────────────────
  const onScroll = () => {
    const scrollY = window.scrollY;

    // ── Hero parallax ────────────────────────────────────────────
    if (scrollY < window.innerHeight) {
      if (heroContent) {
        heroContent.style.transform = `translateY(${scrollY * 0.35}px)`;
        heroContent.style.opacity   = String(Math.max(0, 1 - scrollY / 600));
      }
      heroOrbs.forEach((orb, i) => {
        orb.style.transform = `translateY(${scrollY * (i === 0 ? -0.15 : 0.2)}px)`;
      });
    }

    // ── Sticky Horizontal Scroll (SOLO desktop) ───────────────────
    if (isDesktop() && section && track) {
      const sectionTop  = section.offsetTop;
      const scrollRange = section.offsetHeight - window.innerHeight;

      if (scrollRange > 0) {
        const progress     = Math.max(0, Math.min(1, (scrollY - sectionTop) / scrollRange));
        const maxTranslate = track.scrollWidth - window.innerWidth;
        track.style.transform = `translateX(${-progress * maxTranslate}px)`;
      }
    }

    // ── Parallax bandas de Pasiones ───────────────────────────────
    document.querySelectorAll('.parallax-band').forEach(band => {
      const rect = band.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        band.classList.add('in-view');
        const offsetFromCenter =
          (rect.top + rect.height / 2 - window.innerHeight / 2) / (window.innerHeight / 2);
        const bgImg = band.querySelector('.parallax-bg');
        if (bgImg) bgImg.style.transform = `translateY(${offsetFromCenter * 15}%)`;
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });

  // ─────────────────────────────────────────────────────────────────
  // 6. RESIZE — recalcula modo y altura falsa
  //    Usamos debounce para no recalcular 60 veces por segundo
  // ─────────────────────────────────────────────────────────────────
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(setupHorizontalScroll, 120);
  });

  // ─────────────────────────────────────────────────────────────────
  // 7. INICIALIZACIÓN
  //    Esperamos a que las imágenes carguen para medir el scrollWidth real
  // ─────────────────────────────────────────────────────────────────
  if (document.readyState === 'complete') {
    setupHorizontalScroll();
  } else {
    window.addEventListener('load', setupHorizontalScroll);
  }

  // Llamada inmediata para el resto de efectos (hero, parallax)
  onScroll();
}
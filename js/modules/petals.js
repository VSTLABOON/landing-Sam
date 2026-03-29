export function initPetals() {
  const container = document.getElementById('petals-container');
  if (!container) return;

  // ── 1. El contenedor cubre todo el hero, sin bloquear clics ──────
  Object.assign(container.style, {
    position:      'absolute',
    inset:         '0',
    overflow:      'hidden',
    pointerEvents: 'none',
    zIndex:        '2',
  });

  // ── 2. Keyframes de caída (se inyectan una sola vez en <head>) ───
  if (!document.getElementById('petal-keyframes')) {
    const style = document.createElement('style');
    style.id = 'petal-keyframes';
    style.textContent = `
      @keyframes petalFall {
        0%   { transform: translateY(-60px) rotate(0deg);   opacity: 0; }
        8%   { opacity: 1; }
        85%  { opacity: 0.7; }
        100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
      }
      .petal {
        position: absolute;
        top: 0;
        pointer-events: none;
        animation-name: petalFall;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        will-change: transform, opacity;
      }
      .petal svg { width: 100%; height: 100%; display: block; }
    `;
    document.head.appendChild(style);
  }

  // ── 3. Crear los corazones con posición y timing aleatorios ──────
  const count = 36;

  for (let i = 0; i < count; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';

    const size     = Math.random() * 12 + 8;      // 8 – 20 px
    const leftPct  = Math.random() * 100;          // 0 – 100 %
    const duration = Math.random() * 6 + 5;        // 5 – 11 s
    const delay    = -(Math.random() * duration);  // ya cayendo al cargar
    const opacity  = Math.random() * 0.30 + 0.08; // 0.08 – 0.38

    Object.assign(petal.style, {
      width:             `${size}px`,
      height:            `${size}px`,
      left:              `${leftPct}%`,
      opacity:           String(opacity),
      animationDuration: `${duration}s`,
      animationDelay:    `${delay}s`,
    });

    petal.innerHTML = `<svg viewBox="0 0 24 24" fill="var(--rosa)" stroke="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;

    container.appendChild(petal);
  }
}
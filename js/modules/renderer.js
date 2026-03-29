// --- DICCIONARIO DE ÍCONOS SVG ---
// Estos íconos decorarán las tarjetas de Samara
const getIcon = (name) => {
  const icons = {
    'tag': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',
    'cloud': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/></svg>',
    'paw': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3.1-9-7.56c0-1.25.43-2.4 1-3.44 0 0-1.82-6.42-.42-7 1.39-.58 4.64.27 6.42 2.26.65-.17 1.33-.26 2-.26z"/></svg>',
    'star': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    'zap': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    'car': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="8" rx="2" ry="2"/><path d="M6 11V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"/><circle cx="7" cy="19" r="2"/><circle cx="17" cy="19" r="2"/></svg>',
    'ribbon': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12c-2-2.5-4-4-4-4s-3.5 1-4 4 4 4 4 4 2-1.5 4-4z"/><path d="M12 12c2-2.5 4-4 4-4s3.5 1 4 4-4 4-4 4-2-1.5-4-4z"/><path d="M10 14.5l-2 5.5 3-1.5 1-4"/><path d="M14 14.5l2 5.5-3-1.5-1-4"/></svg>',
    'book': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    'mail': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    'dino': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c3 0 6 2 6 5v1h2v3h-2v3h-3v4h-2v-4H9v4H7v-4c0-2-2-3-4-3V8c0-3 3-5 6-5h3z"/><circle cx="15" cy="6" r="1"/></svg>',
    'cube': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
    'flower': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2c-1.5 0-2.8.7-3.6 1.8A3 3 0 0 0 4.2 8C2.7 8.8 2 10.3 2 12c0 1.5.7 2.8 1.8 3.6a3 3 0 0 0 4.2 4.2C8.8 21.3 10.3 22 12 22c1.5 0 2.8-.7 3.6-1.8a3 3 0 0 0 4.2-4.2c1.1-1 1.8-2.5 1.8-4.2 0-1.5-.7-2.8-1.8-3.6a3 3 0 0 0-4.2-4.2C14.8 2.7 13.5 2 12 2z"/></svg>',
    'shield': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    'tv': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>',
    'circle-dot': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>',
    'eye': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
    'message': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    'heart': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    'check': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    'clock': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    'users': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
  };
  return icons[name] || icons['star']; // Si no encuentra el ícono, pone una estrella por defecto
};

// --- RENDERIZADORES ---

// ── NUEVA GALERÍA HORIZONTAL DE UNIVERSO ──
export function renderUniverso(items, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items.map((item, index) => `
    <article class="u-gallery-card modal-trigger" 
             tabindex="0"
             data-title="${item.name}" 
             data-desc="${item.longDesc.replace(/\n/g, '<br>')}" 
             data-icon="${item.icon}" 
             data-color="guinda">
      <img src="${item.imgUrl}" alt="${item.name}" class="u-gallery-img" loading="lazy">
      <div class="u-gallery-overlay"></div>
      <div class="u-gallery-content">
        <span class="u-gallery-icon">${getIcon(item.icon)}</span>
        <h3 class="u-gallery-name">${item.name}</h3>
        <p class="u-gallery-short">${item.shortDesc}</p>
        <span class="u-gallery-cta">Leer más ✦</span>
      </div>
    </article>
  `).join('');
}

// ── NUEVAS BANDAS PARALLAX DE PASIONES ──
export function renderHobbies(items, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items.map((item, index) => `
    <article class="parallax-band modal-trigger reveal" 
             tabindex="0"
             data-title="${item.title}" 
             data-desc="${item.longDesc.replace(/\n/g, '<br>')}" 
             data-icon="${item.icon}" 
             data-color="guinda">
      <img src="${item.imgUrl}" alt="${item.title}" class="parallax-bg" loading="lazy">
      <div class="parallax-overlay"></div>
      <div class="parallax-content">
        <div class="parallax-icon">${getIcon(item.icon)}</div>
        <h3 class="parallax-title">${item.title}</h3>
        <p class="parallax-desc">${item.desc}</p>
        <span class="parallax-cta">Explorar este mundo</span>
      </div>
    </article>
  `).join('');
}

// ── RESTO DE SECCIONES (SE MANTIENEN IGUAL) ──
export function renderMusic(items, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items.map((item, index) => {
    const hearts = '♥'.repeat(item.hearts);
    return `
      <article class="music-item reveal d${(index % 5) + 1} modal-trigger" 
               tabindex="0"
               data-title="${item.artist}" 
               data-desc="${item.longDesc.replace(/\n/g, '<br>')}" 
               data-icon="star" 
               data-color="dark"
               data-spotify-url="${item.spotifyUrl || ''}">
        <span class="m-num">0${index + 1}</span>
        <div class="m-info">
          <h3 class="m-artist">${item.artist}</h3>
          <p class="m-vibe">${item.vibe}</p>
        </div>
        <span class="m-hearts">${hearts}</span>
      </article>
    `;
  }).join('');
}

export function renderTraits(items, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items.map((item, index) => `
    <article class="trait-item reveal d${(index % 3) + 1} modal-trigger" 
             tabindex="0"
             data-title="${item.title}" 
             data-desc="${item.longDesc.replace(/\n/g, '<br>')}" 
             data-icon="${item.icon}" 
             data-color="guinda">
      <span class="trait-icon">${getIcon(item.icon)}</span>
      <p class="trait-text"><strong>${item.title}</strong><br>${item.desc}</p>
      <span class="trait-cta">Leer más ✦</span>
    </article>
  `).join('');
}

export function renderColores(items, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items.map((item, index) => `
    <article class="swatch reveal d${index + 1} modal-trigger" 
             tabindex="0"
             data-title="${item.name}" 
             data-desc="${item.longDesc.replace(/\n/g, '<br>')}" 
             data-icon="heart" 
             data-color="guinda">
      <div class="swatch-circle" style="background: ${item.gradient};"></div>
      <span class="swatch-name">${item.name}</span>
    </article>
  `).join('');
}

export function renderCarta(cartaData, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const paragraphs = cartaData.contenido
    .split('\n\n')
    .filter(p => p.trim() !== '')
    .map(p => `<p>${p}</p>`)
    .join('');

  container.innerHTML = `
    <div class="carta-box reveal d2">
      ${paragraphs}
      <div class="firma">
        ${cartaData.firma}
        <span class="firma-heart">${getIcon('heart')}</span>
      </div>
    </div>
  `;
  
  const titleEl = document.querySelector('.carta-title');
  if (titleEl && cartaData.subtitulo) {
    titleEl.innerHTML = cartaData.subtitulo.replace(', ', ',<br>'); 
  }
}
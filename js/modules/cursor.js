export function initCursor() {
  const cursor = document.getElementById('cur');
  const cursorRing = document.getElementById('cur-ring');

  // Si estás en móvil, es mejor desactivar el cursor custom para no interferir con el touch
  if (!cursor || !cursorRing || window.innerWidth < 768) {
    if (cursor) cursor.style.display = 'none';
    if (cursorRing) cursorRing.style.display = 'none';
    return;
  }

  let mouseX = -100;
  let mouseY = -100;
  let ringX = -100;
  let ringY = -100;

  // Actualizar coordenadas del mouse
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Loop de animación para un movimiento fluido
  const render = () => {
    // El punto central sigue al mouse casi al instante
    cursor.style.transform = `translate3d(${mouseX - 5}px, ${mouseY - 5}px, 0)`;

    // El anillo sigue al mouse con un efecto de "retraso" elástico (easing)
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    cursorRing.style.transform = `translate3d(${ringX - 20}px, ${ringY - 20}px, 0)`;

    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);

  // Detectar elementos interactivos para cambiar el estado del cursor
  const interactiveSelectors = [
    'a', 'button', '.u-card', '.music-item', 
    '.trait-item', '.h-block', '.swatch', '.nav-dot', '#modal-close'
  ];

  const bindHoverEvents = () => {
    const elements = document.querySelectorAll(interactiveSelectors.join(', '));
    
    elements.forEach(el => {
      // Evitar agregar eventos duplicados si el DOM cambia
      if (el.dataset.cursorBound) return;
      el.dataset.cursorBound = "true";

      el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
        cursorRing.style.transform = `translate3d(${ringX - 20}px, ${ringY - 20}px, 0) scale(1.5)`;
        cursorRing.style.borderColor = 'var(--rosa)'; 
        cursorRing.style.opacity = '0.8';
      });
      
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
        cursorRing.style.transform = `translate3d(${ringX - 20}px, ${ringY - 20}px, 0) scale(1)`;
        cursorRing.style.borderColor = 'rgba(107,30,58,.4)'; // Restaura el color guinda con opacidad
        cursorRing.style.opacity = '0.5';
      });
    });
  };

  // Inicializar eventos de hover
  bindHoverEvents();

  // Si tu contenido se genera dinámicamente (como las tarjetas), 
  // necesitamos un MutationObserver para aplicarle el efecto a los elementos nuevos.
  const observer = new MutationObserver(bindHoverEvents);
  observer.observe(document.body, { childList: true, subtree: true });

  // Ocultar el cursor si el mouse sale de la ventana del navegador
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    cursorRing.style.opacity = '0';
  });
  
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    cursorRing.style.opacity = '0.5';
  });
}
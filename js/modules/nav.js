export function initNav() {
  const nav = document.getElementById('nav');
  const progress = document.getElementById('progress');
  const sections = document.querySelectorAll('section');
  const navDots = document.querySelectorAll('.nav-dot');

  if (!nav || !progress) return;

  // 1. Manejar el scroll para la barra de progreso y el fondo del menú
  const handleScroll = () => {
    const scrollY = window.scrollY;
    
    // Cambiar fondo del menú al hacer scroll (efecto cristal)
    if (scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    // Calcular y actualizar la barra de progreso
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollY / docHeight) * 100;
    progress.style.width = `${scrollPercent}%`;
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  // Llamada inicial por si el usuario recarga a mitad de la página
  handleScroll();

  // 2. Resaltar el puntito correcto según la sección en pantalla
  // Usamos IntersectionObserver para mejor rendimiento (es súper fluido)
  const observerOptions = {
    root: null,
    rootMargin: '-50% 0px -50% 0px', // Se activa cuando la sección llega al centro de la pantalla
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        // Quitar la clase active de todos los puntitos
        navDots.forEach(dot => dot.classList.remove('active'));
        
        // Agregar la clase active al puntito correspondiente
        const activeDot = document.querySelector(`.nav-dot[href="#${id}"]`);
        if (activeDot) {
          activeDot.classList.add('active');
        }
      }
    });
  }, observerOptions);

  // Observar cada sección
  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  // 3. Scroll suave al hacer clic en los puntitos (fallback de seguridad)
  navDots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = dot.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
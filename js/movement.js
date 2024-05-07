document.addEventListener('DOMContentLoaded', function() {
  // Obtener todas las secciones
  const sections = document.querySelectorAll('.section');
  const topTop = document.querySelector(".to-top");

  // Función para verificar si una sección está parcialmente visible y su visibilidad relativa
  function getVisibilityPercentage(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    return visibleHeight / element.clientHeight;
  }

  // Función para desplazarse automáticamente a la próxima sección parcialmente visible, priorizando la más visible
  function scrollToNextSection() {
    let maxVisibility = 0;
    let targetSectionIndex = -1;

    // Iterar sobre todas las secciones
    for (let i = 0; i < sections.length; i++) {
      const visibility = getVisibilityPercentage(sections[i]);
      if (visibility > maxVisibility) {
        maxVisibility = visibility;
        targetSectionIndex = i;
      }
    }

    // Hacer scroll hacia la sección más visible
    if (targetSectionIndex !== -1) {
      const targetSection = sections[targetSectionIndex];
      const targetSectionTop = targetSection.getBoundingClientRect().top + window.scrollY;
      const scrollY = targetSectionTop - window.innerHeight / 2 + targetSection.clientHeight / 2;
      window.scrollTo({
        top: scrollY,
        behavior: 'smooth'
      });
    }
  }

  // Función para verificar la posición del mouse y activar la funcionalidad de desplazamiento
  function checkMousePosition(event) {
    const mouseY = event.clientY;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (mouseY > windowHeight / 2) {
      // Desplazar hacia abajo
      scrollToNextSection();
    }
  }

  // Escuchar eventos de movimiento del mouse
  window.addEventListener('mousemove', checkMousePosition);

  // Funcionalidad del botón para volver al inicio
  window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100){
        topTop.classList.add("active");
    } else {
        topTop.classList.remove("active");
    }
  });
});

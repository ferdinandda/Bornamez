import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuBtn');
  const sideMenu = document.getElementById('sideMenu');

  if (menuBtn && sideMenu) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      menuBtn.classList.toggle('active');
      sideMenu.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en un enlace
    const menuLinks = sideMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        sideMenu.classList.remove('active');
      });
    });

    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', (e) => {
      if (!sideMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        menuBtn.classList.remove('active');
        sideMenu.classList.remove('active');
      }
    });
  }
});

console.log('Bornamez | Revista Literaria cargada.');

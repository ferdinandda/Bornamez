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

const form = document.getElementById('subscribeForm');
const msg = document.getElementById('subscribeMsg');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('subscribeEmail').value;

    try {
      const res = await fetch('http://localhost:3001/suscribir', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await res.json();

      if (res.ok) {
        msg.textContent = 'Gracias por suscribirte.';
        msg.style.color = 'rgba(255,255,255,0.6)';
        form.reset();
      } else {
        msg.textContent = data.error || 'Ocurrió un error.';
        msg.style.color = 'rgba(255,100,100,0.7)';
      }
    } catch {
      msg.textContent = 'No se pudo conectar. Intenta más tarde.';
      msg.style.color = 'rgba(255,100,100,0.7)';
    }
  });
}

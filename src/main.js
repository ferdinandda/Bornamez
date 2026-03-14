import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const widget = document.getElementById('subscribe-widget');
  const openBtn = document.getElementById('open-subscribe');
  const closeBtn = document.getElementById('close-widget');
  const form = document.getElementById('subscribe-form');
  const message = document.getElementById('subscribe-message');

  const openWidget = (e) => {
    if (e) e.preventDefault();
    widget.classList.add('active');
  };

  const closeWidget = () => {
    widget.classList.remove('active');
  };

  if (openBtn) openBtn.addEventListener('click', openWidget);
  if (closeBtn) closeBtn.addEventListener('click', closeWidget);

  // Manejo del formulario
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input').value;
      
      message.textContent = 'Procesando...';
      message.className = 'subscribe-message';

      setTimeout(() => {
        message.textContent = `¡Gracias por suscribirte!`;
        message.classList.add('success');
        form.reset();
        
        setTimeout(closeWidget, 3000);
      }, 1500);
    });
  }

  // Trigger automático después de 3 segundos
  setTimeout(() => {
    if (!localStorage.getItem('widgetShown')) {
      openWidget();
      localStorage.setItem('widgetShown', 'true');
    }
  }, 3000);
});

console.log('Bornamez | Revista Literaria cargada.');

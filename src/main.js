import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('subscribe-modal');
  const openBtn = document.getElementById('open-subscribe');
  const closeBtn = document.getElementById('close-modal');
  const form = document.getElementById('subscribe-form');
  const message = document.getElementById('subscribe-message');

  const openModal = (e) => {
    if (e) e.preventDefault();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  };

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);

  // Cerrar al hacer clic fuera del contenido
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Manejo del formulario
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input').value;
    
    // Simulación de envío
    message.textContent = 'Procesando...';
    message.className = 'subscribe-message';

    setTimeout(() => {
      message.textContent = `¡Gracias! ${email} ha sido suscrito con éxito.`;
      message.classList.add('success');
      form.reset();
      
      // Cerrar modal tras éxito
      setTimeout(closeModal, 2000);
    }, 1500);
  });

  // Trigger automático después de 3 segundos
  setTimeout(() => {
    if (!localStorage.getItem('modalShown')) {
      openModal();
      localStorage.setItem('modalShown', 'true');
    }
  }, 3000);
});

console.log('Bornamez | Revista Literaria cargada.');

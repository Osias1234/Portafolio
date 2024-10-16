
let currentIndex = 0;

document.querySelector('.prev-button').addEventListener('click', () => {
   navigate(-1);
});

document.querySelector('.next-button').addEventListener('click', () => {
   navigate(1);
});

function navigate(direction) {
   const galleryContainer = document.querySelector('.gallery-container');
   const totalImages = document.querySelectorAll('.gallery-item').length;

   currentIndex = (currentIndex + direction + totalImages) % totalImages;
   const offset = -currentIndex * 100;

   galleryContainer.style.transform = `translateX(${offset}%)`;
}
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');}

    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar el envío del formulario para realizar la validación
  
      // Obtener los valores de los campos
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();
  
      // Validar que los campos no estén vacíos
      if (nombre === '' || email === '' || mensaje === '') {
          alert('Por favor, completa todos los campos.');
          return;
      }
  
      // Validar formato del email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
          alert('Por favor, ingresa un email válido.');
          return;
      }
  
      // Si todo está bien, mostrar un mensaje de éxito
      alert('¡Formulario validado correctamente!');
  
      // Aquí podrías proceder a enviar el formulario si fuera necesario:
      // this.submit();
  });
  
const menuIcon = document.querySelector('.menu'); // Icono de hamburguesa
const navbar = document.querySelector('.navbar'); // Menú de navegación

// Alternar la clase 'active' para mostrar/ocultar el menú
menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active'); // Alterna la clase para desplegar el menú
});
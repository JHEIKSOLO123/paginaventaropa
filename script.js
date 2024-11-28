// Función para cambiar el color del precio cuando el mouse pasa por encima
const prices = document.querySelectorAll('.price');

prices.forEach(price => {
    price.addEventListener('mouseover', () => {
        price.style.color = '#ff5733'; // Cambia el color cuando pasa el mouse
    });
    
    price.addEventListener('mouseout', () => {
        price.style.color = '#b12704'; // Vuelve al color original
    });
});
// JavaScript Document
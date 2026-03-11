const imagen = document.getElementById('img-change');
const boton = document.getElementById('btn-change');

// Definimos los dos links
const link1 = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2NmdjJnNnlkeHE0eGgwMDAyODRka2czNXVoc25oZjVpNTh0MzRzOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RLJxQtX8Hs7XytaoyX/giphy.gif";
const link2 = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDEyNzZrOHI2NDd4eml6YjJ5N2dpZDdqanoydXRzZ3U5a3lmODY3NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qM4paPvAfnDeYINE9a/giphy.gif";

// Estado actual
let esLaPrimeraImagen = true;

boton.addEventListener('click', function() {
    imagen.classList.add('oculto');

    setTimeout(() => {
        if (esLaPrimeraImagen) {
            imagen.src = link2;
            boton.innerText = "CLIC PARA VOLVER A MI FELICIDAD :')"; // <-- Nuevo texto
        } else {
            imagen.src = link1;
            boton.innerText = "AHORA VIENE JAVASCRIPT, CLIC PARA VER COMO ME SENTIRÉ"; // <-- Texto original
        }
        
        esLaPrimeraImagen = !esLaPrimeraImagen;

        // Usamos el onload para que aparezca cuando esté lista
        imagen.onload = function() {
            imagen.classList.remove('oculto');
        };
    }, 400); 
});
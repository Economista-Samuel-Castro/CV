// Obtener el elemento de la barra de navegación
const barraNavegacion = document.getElementById("navegacion");

// Función para manejar el evento de desplazamiento
function ajustarBarraNavegacion() {
    // Obtener la posición vertical del desplazamiento de la página
    const scrollY = window.scrollY || window.pageYOffset;

    // Obtener la altura de la barra de navegación
    const barraAltura = barraNavegacion.offsetHeight;

    // Comprobar si el desplazamiento ha superado la altura de la barra de navegación
    if (scrollY > barraAltura) {
        // Agregar una clase CSS que fije la posición de la barra de navegación
        barraNavegacion.classList.add("bNavegacion");
    } else {
        // Eliminar la clase CSS que fija la posición de la barra de navegación
        barraNavegacion.classList.remove("bNavegacion");
    }
}

// Agregar el evento de desplazamiento al objeto window
window.addEventListener("scroll", ajustarBarraNavegacion);
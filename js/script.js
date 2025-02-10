// Definición de mensajes
const messages = [
    "Regala amor. Si bebes, pasa la llave.",
    "No conduzcas borracho, #pasalallave",
    "Cada decisión cuenta. Toma el camino que te lleve más lejos.",
    "Tu futuro es brillante, cuídalo con cada paso.",
    "Los mejores recuerdos vienen de acciones responsables.",
    "Llega seguro hoy para disfrutar el mañana.",
    "Tu vida y tus sueños merecen que los protejas siempre.",
    "La mejor fortuna es llegar a casa sano. Si bebes, pasa la llave.",
    "No pongas tu vida en juego. Pasa la llave y sigue celebrando.",
    "Conduce con responsabilidad, no con suerte. Si tomaste, deja que otro maneje.",   
    "Tu destino está en tus manos. Si bebes, pasa la llave.",
    "El mejor recuerdo de la noche es volver seguro. No manejes borracho."
    
];

// Crear el objeto Audio
const soundEffect = new Audio('assets/yay.wav');

// Función principal para manejar la apertura de la galleta
function openCookie() {
    // Referencias al contenedor de la galleta y al papel
    const cookieContainer = document.getElementById('cookieContainer');
    const paper = document.getElementById('paper');

    let isOpen = false; // Estado inicial de la galleta

    // Agregar un evento al contenedor de la galleta
    cookieContainer.addEventListener('click', () => {
        if (isOpen) {
            // Si la galleta está abierta, se cierra
            cookieContainer.classList.remove('open');
            isOpen = false;
            paper.style.display = 'none';
        } else {
            // Abrir la galleta
            cookieContainer.classList.add('open');
            isOpen = true;

            // Mostrar el mensaje aleatorio
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            paper.textContent = randomMessage;
            paper.style.display = 'block';
            paper.classList.add('show'); // Mantener la clase para la animación

            // Reproducir el sonido
            soundEffect.currentTime = 0; // Reiniciar el sonido
            soundEffect.play();

            // Lanzar confeti
            confetti({
                particleCount: 100,
                spread: 70,
                startVelocity: 30,
                ticks: 200,
                origin: { y: 0.6 }
            });
        }
    });
}

// Ejecutar la función
openCookie();

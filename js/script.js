// Definición de mensajes
const messages = [
    "Regala amor. Si bebes, pasa la llave",
    "No conduzcas borracho, #pasalallave"
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

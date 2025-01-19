const fortunes = [
    "🚗💨Pasa la llave, salva una vida.",
    "🛑🍺Si tomas, no manejes.",
    "🚙➡️Tu vida vale más que un volante.",
    "🚘Un taxi cuesta menos que un accidente.",
    "🍹❌🚗Alcohol y manejo no mezclan.",
    "🕒Si bebes, espera. Si manejas, no bebas.",
    "🚘👨‍⚖️Un mal giro puede arruinar tu vida.",
    "🚗Elige ser copiloto, no una estadística."
];

// Crear el objeto Audio
const soundEffect = new Audio('assets/yay.wav');

fetch('assets/fortune_cookie.svg')
    .then(response => response.text())
    .then(svg => {
        const container = document.getElementById('fortuneCookieContainer');
        container.innerHTML = svg;

        const svgElement = document.getElementById('fortuneCookie');
        const leftCookie = svgElement.querySelector('.cookie-left');
        const rightCookie = svgElement.querySelector('.cookie-right');
        const paper = svgElement.querySelector('.paper');
        const message = svgElement.querySelector('.message');

        // Configurar el evento para abrir la galleta
        svgElement.addEventListener('click', () => {
            const isOpen = paper.style.display === 'block'; // Verifica si ya está abierto

            if (!isOpen) {
                // Animar la galleta al abrir
                leftCookie.style.transition = 'transform 0.4s ease-in-out';
                rightCookie.style.transition = 'transform 0.4s ease-in-out';
                leftCookie.style.transform = 'translateX(-50px)';
                rightCookie.style.transform = 'translateX(50px)';

                // Mostrar el papel y el mensaje
                paper.style.display = 'block';
                paper.style.opacity = '1';
                paper.style.transition = 'opacity 0.4s ease-in-out';

                const fortuneText = fortunes[Math.floor(Math.random() * fortunes.length)];
                message.textContent = fortuneText;

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
            } else {
                // Cerrar la galleta
                leftCookie.style.transform = 'translateX(0)';
                rightCookie.style.transform = 'translateX(0)';
                paper.style.opacity = '0';

                setTimeout(() => {
                    paper.style.display = 'none'; // Ocultar el papel después de cerrar
                }, 400);
            }
        });
    })
    .catch(error => console.error('Error loading SVG:', error));

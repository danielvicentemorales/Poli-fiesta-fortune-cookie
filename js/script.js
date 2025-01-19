const fortunes = [
    "🚗💨 Pasa la llave, salva una vida.",
    "🛑🍺 Si tomas, no manejes.",
    "🚙➡️ Tu vida vale más que un volante.",
    "🚦💡 Un taxi cuesta menos que un accidente.",
    "🍹❌🚗 Alcohol y manejo no mezclan.",
    "🕒🍻 Si bebes, espera. Si manejas, no bebas.",
    "🚘👨‍⚖️ Un mal giro puede arruinar tu vida.",
    "🚗🤝 Elige ser copiloto, no una estadística.",
    "🥂🚫🚦 La carretera no es para apostar tu vida."
];

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

        svgElement.addEventListener('click', () => {
            const isOpen = paper.style.opacity === '1';

            if (!isOpen) {
                leftCookie.style.transition = 'transform 0.4s ease-in-out';
                rightCookie.style.transition = 'transform 0.4s ease-in-out';
                leftCookie.style.transform = 'translateX(-50px)';
                rightCookie.style.transform = 'translateX(50px)';
                paper.style.transform = 'translateY(-30px)';
                paper.style.opacity = '1';

                const fortuneText = fortunes[Math.floor(Math.random() * fortunes.length)];
                message.textContent = fortuneText;
                message.style.opacity = '1';

                confetti({
                    particleCount: 100,
                    spread: 70,
                    startVelocity: 30,
                    ticks: 200,
                    origin: { y: 0.6 }
                });
            } else {
                leftCookie.style.transform = 'translateX(0)';
                rightCookie.style.transform = 'translateX(0)';
                paper.style.transform = 'translateY(0)';
                paper.style.opacity = '0';
                message.style.opacity = '0';
            }
        });
    })
    .catch(error => console.error('Error loading SVG:', error));

document.addEventListener("mousemove", (event) => {
    const { clientX, clientY } = event;
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Calcula a posição do mouse como uma porcentagem
    const xPercent = (clientX / width - 0.5) * 2; // Valor entre -1 e 1
    const yPercent = (clientY / height - 0.5) * 2; // Valor entre -1 e 1

    // Ajusta o deslocamento do gradiente
    const xOffset = xPercent * 20; // Multiplica para aumentar o efeito
    const yOffset = yPercent * 20;

    document.body.style.background = `linear-gradient(45deg, 
        hsl(270, 50%, 50%) ${50 + xOffset}%, 
        hsl(0, 0%, 0%) ${50 + yOffset}%)`;
});

const parallaxContainer = document.getElementById('parallax-container');
const parallaxInstance = new Parallax(parallaxContainer);
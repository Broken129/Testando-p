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

const style = document.createElement('style');
style.textContent = `
body {
    background-color: #000; /* Fundo preto */
    color: #fff; /* Texto branco */
    font-family: Arial, sans-serif; /* Fonte padrão */
    margin: 0;
    padding: 0;
}

header, footer {
    background-color: #000; /* Fundo preto para o cabeçalho e rodapé */
    color: #fff; /* Texto branco */
    text-align: center;
    padding: 1rem 0;
}

p, h1, h2, h3, h4, h5, h6 {
    color: #fff; /* Texto branco para todos os parágrafos e cabeçalhos */
}

a {
    color: #1e90ff; /* Links em azul claro */
    text-decoration: none;
}

a:hover {
    text-decoration: underline; /* Sublinhar links ao passar o mouse */
}

.portfolio-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0; /* Remove o espaçamento entre as imagens */
    width: 100vw;
    height: 100vh;
    position: relative;
}

.portfolio-item {
    position: relative;
    overflow: hidden;
}

.portfolio-item img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Garante que a imagem preencha o espaço sem distorção */
}
`;
document.head.appendChild(style);
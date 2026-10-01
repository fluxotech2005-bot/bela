let etapaAtual = 0;
const totalEtapas = 4; // Vai da etapa 0 até a 4 (surpresa)

function proximaEtapa() {
    // Esconde a etapa atual
    document.getElementById(`etapa-${etapaAtual}`).classList.remove('ativa');
    
    // Avança para a próxima
    etapaAtual++;

    // Se passou do limite, trava na última
    if (etapaAtual > totalEtapas) {
        etapaAtual = totalEtapas;
    }

    // Mostra a nova etapa
    document.getElementById(`etapa-${etapaAtual}`).classList.add('ativa');

    // Se chegou na última etapa (surpresa), dispara os fogos de artifício!
    if (etapaAtual === totalEtapas) {
        lancarFogos();
    }
}

// Função de animação de fogos de artifício na tela
function lancarFogos() {
    const container = document.querySelector('.cartao-container');

    // Dispara múltiplos fogos em sequência
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            criarExplosao(container);
        }, i * 300);
    }
}

function criarExplosao(container) {
    const rect = container.getBoundingClientRect();
    const centroX = rect.width / 2;
    const centroY = rect.height / 2;

    // Cria várias partículas para cada explosão
    for (let i = 0; i < 30; i++) {
        const fogo = document.createElement('div');
        fogo.classList.add('fogo');

        // Cores festivas aleatórias
        const cores = ['#ff477e', '#ffd700', '#ff7eb3', '#ffffff', '#00f2fe'];
        fogo.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];

        // Direção aleatória da explosão
        const angulo = Math.random() * Math.PI * 2;
        const distancia = Math.random() * 120 + 40;
        const destinoX = Math.cos(angulo) * distancia;
        const destinoY = Math.sin(angulo) * distancia;

        fogo.style.setProperty('--x', `${destinoX}px`);
        fogo.style.setProperty('--y', `${destinoY}px`);

        fogo.style.left = `${centroX}px`;
        fogo.style.top = `${centroY}px`;

        container.appendChild(fogo);

        // Remove o elemento da tela após a animação acabar
        setTimeout(() => {
            fogo.remove();
        }, 1000);
    }
}
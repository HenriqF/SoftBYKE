// ===== CARROSSEL DE BICICLETAS =====

// 1. PEGAR os elementos da pagina
const vitrine = document.querySelector('.vitrine');
const setaEsquerda = document.querySelector('.seta-esquerda');
const setaDireita = document.querySelector('.seta-direita');

// Quanto andar a cada clique: largura da imagem (250) + o gap (20)
const passo = 270;

// 2. ESCUTAR o clique e 3. AGIR
setaDireita.addEventListener('click', () => {
    vitrine.scrollBy({ left: passo, behavior: 'smooth' });
});

setaEsquerda.addEventListener('click', () => {
    // valor negativo = anda para tras
    vitrine.scrollBy({ left: -passo, behavior: 'smooth' });
});

//
//SETAS DO CARROSSEL
//

const vitrine = document.querySelector('.vitrine');
const setaEsquerda = document.querySelector('.seta-esquerda');
const setaDireita = document.querySelector('.seta-direita');


//quanto a vitrine anda a cada clique: largura da imagem + o gap entre elas
const passo = 270;


setaDireita.addEventListener('click', () => {
    vitrine.scrollBy({ left: passo, behavior: 'smooth' });
});

setaEsquerda.addEventListener('click', () => {

    //valor negativo faz a vitrine voltar em vez de avançar
    vitrine.scrollBy({ left: -passo, behavior: 'smooth' });
});

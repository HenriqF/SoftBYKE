


const vitrine = document.querySelector('.vitrine');
const setaEsquerda = document.querySelector('.seta-esquerda');
const setaDireita = document.querySelector('.seta-direita');


const passo = 270;


setaDireita.addEventListener('click', () => {
    vitrine.scrollBy({ left: passo, behavior: 'smooth' });
});

setaEsquerda.addEventListener('click', () => {

    vitrine.scrollBy({ left: -passo, behavior: 'smooth' });
});

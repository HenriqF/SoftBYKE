//
//BICICLETAS SCROLL VERTICAL
//

const vitrine = document.querySelector('.vitrine');
const setaEsquerda = document.querySelector('.seta-esquerda');
const setaDireita = document.querySelector('.seta-direita');


const passo = 416.59;


setaDireita.addEventListener('click', () => {
    vitrine.scrollBy({ left: passo, behavior: 'smooth' });
});

setaEsquerda.addEventListener('click', () => {

    vitrine.scrollBy({ left: -passo, behavior: 'smooth' });
});

//
//FAZER HEADER FICAR BRANCO APÓS SCROLL
//

const header = document.getElementById('site-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
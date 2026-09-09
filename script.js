//
//BICICLETAS SCROLL VERTICAL
//

const vitrine1 = document.getElementById('vitrine1');
const vitrine2 = document.getElementById('vitrine2');

const passo = 416.59;

function rolar_vitrine(n){
  if(n==0) vitrine1.scrollBy({ left: -passo, behavior: 'smooth' })
  if(n==1) vitrine1.scrollBy({ left: passo, behavior: 'smooth' })

  if(n==2) vitrine2.scrollBy({ left: -passo, behavior: 'smooth' })
  if(n==3) vitrine2.scrollBy({ left: passo, behavior: 'smooth' })

}

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
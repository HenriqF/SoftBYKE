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
const logo = document.getElementById('logo');
const profile = document.getElementById('profile');
const shop = document.getElementById('shop');
const search = document.getElementById('search');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');

    logo.style.backgroundImage = "url(fotos/icons/logo.png)"
    search.style.backgroundImage = "url(fotos/icons/search.png)"
    shop.style.backgroundImage = "url(fotos/icons/shop.png)"
    profile.style.backgroundImage = "url(fotos/icons/profile.png)"
  } else {
    header.classList.remove('scrolled');

    logo.style.backgroundImage = "url(fotos/icons/logo-white.png)"
    search.style.backgroundImage = "url(fotos/icons/search-white.png)"
    shop.style.backgroundImage = "url(fotos/icons/shop-white.png)"
    profile.style.backgroundImage = "url(fotos/icons/profile-white.png)"
  }
});
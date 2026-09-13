const tabela_div = document.getElementById('tabela_div')

tabela_div.addEventListener('mousedown', (event) => {
    tabela_div.style.animationPlayState = 'paused';
});

tabela_div.addEventListener('mouseup', (event) => {
    console.log('Button released');
    tabela_div.style.animationPlayState = 'running';
});
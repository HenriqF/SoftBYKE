//
//ABRIR E FECHAR AS PERGUNTAS DO BRIEFING
//

const collapses_btn = document.getElementsByClassName("collapse-button");


//getElementsByClassName devolve todos os botões, então o for liga o clique em cada um
for (let i = 0; i < collapses_btn.length; i++){

    collapses_btn[i].addEventListener("click", function() {

        //a classe active é quem gira a setinha lá no css
        this.classList.toggle("active");

        //a resposta é sempre o elemento logo depois do botão clicado
        var conteudo = this.nextElementSibling;

        if (conteudo.style.display === "block") {
            conteudo.style.display = "none";
        } else {
            conteudo.style.display = "block";
        }
        console.log("aura");
    });
}

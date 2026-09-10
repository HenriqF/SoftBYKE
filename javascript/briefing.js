const collapses_btn = document.getElementsByClassName("collapse-button");


for (let i = 0; i < collapses_btn.length; i++){

    collapses_btn[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var conteudo = this.nextElementSibling;

        if (conteudo.style.display === "block") {
            conteudo.style.display = "none";
        } else {
            conteudo.style.display = "block";
        }
        console.log("aura");
    });
}

//
//MOSTRAR SENHA E TROCA DE PAGINA
//

const senhaCadastro = document.getElementById("password");
const senhaConfirm = document.getElementById("password2");

//aqui são dois campos, a senha e a confirmação, então os dois trocam juntos
function mostrar_senha(){
    senhaCadastro.type = "text";
    senhaConfirm.type = "text";
};

function esconder_senha(){
    senhaCadastro.type = "password";
    senhaConfirm.type = "password";
};


//clica no link invisível do login que fica lá embaixo do html
function trocar(){
    document.getElementById("login").click();
};


//ainda não confere se as duas senhas são iguais, só manda pra página inicial
function fazerSignup(){
    document.getElementById("index").click();
}

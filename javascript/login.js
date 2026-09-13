//
//MOSTRAR SENHA E TROCA DE PAGINA
//

const senhaLogin = document.getElementById("password");

//enquanto o mouse fica pressionado no "Mostrar senha" o campo vira texto normal
function mostrar_senha(){
    senhaLogin.type = "text";
};

//soltou o mouse, volta a ser senha escondida
function esconder_senha(){
    senhaLogin.type = "password";
};

//clica no link invisível do cadastro que fica lá embaixo do html
function trocar(){
    document.getElementById("cadastro").click();
};

//por enquanto o botão só leva pra página inicial, ainda não valida usuário e senha
function fazerLogin(){
    document.getElementById("index").click();
}

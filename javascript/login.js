const senhaLogin = document.getElementById("password");

function mostrar_senha(){
    senhaLogin.type = "text";
};

function esconder_senha(){
    senhaLogin.type = "password";
};

function trocar(){
    document.getElementById("cadastro").click();
};

function fazerLogin(){
    document.getElementById("index").click();
}
const senhaCadastro = document.getElementById("password");
const senhaConfirm = document.getElementById("password2");

function mostrar_senha(){
    senhaCadastro.type = "text";
    senhaConfirm.type = "text";
};

function esconder_senha(){
    senhaCadastro.type = "password";
    senhaConfirm.type = "password";
};


function trocar(){
    document.getElementById("login").click();
};


function fazerSignup(){
    document.getElementById("index").click();
}

isLogin = false;

function handleForm() {
    //variaveis dos inputs
    const email = document.getElementById("email").value;
    const nome = document.getElementById("nome").value;
    const data = document.getElementById("data").value;
    const senha = document.getElementById("senha").value;
    const senhaRep = document.getElementById("senhaRep").value;
    //se estiver no modo registro salva as informações
    //se não verifica e compara as informações do login
    if (!isLogin) {
        if (senha == senhaRep) {
            localStorage.setItem("email", email);
            localStorage.setItem("nome", nome);
            localStorage.setItem("data", data);
            localStorage.setItem("senha", senha);
        } else {
            alert("as senhas não coicidem");
        }
    } else {
        const storagedEmail = localStorage.getItem("email");
        const storagedSenha = localStorage.getItem("senha");
        console.log(storagedEmail);
        console.log(storagedSenha);
        console.log(email);
        console.log(senha);
        email == storagedEmail && senha == storagedSenha
            ? alert("Login Realizado com sucesso")
            : alert("Dados incorretos");
    }
}

function toLogin() {
    //coleta os componentes que serão modificados
    const nome = document.getElementById("nome");
    const data = document.getElementById("data");
    const senhaRep = document.getElementById("senhaRep");
    const button = document.getElementById("handle");
    const text = document.getElementById("textTo");
    console.log(isLogin);
    isLogin = !isLogin;
    //altera entre modo login e registro
    if (isLogin) {
        text.textContent = "para se cadastrar";
        button.textContent = "Login";
        nome.style.display = "none";
        data.style.display = "none";
        senhaRep.style.display = "none";
    } else {
        text.textContent = "para fazer login";
        button.textContent = "Cadastrar";
        nome.style.display = "block";
        data.style.display = "block";
        senhaRep.style.display = "block";
    }
}

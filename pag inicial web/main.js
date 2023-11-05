function verificarLogin() {
    // Obter o nick e senha digitados pelo usuário
    const nickname = document.getElementById("nickname").value;
    const senha = document.getElementById("senha").value;

    // Verificar se o nickname e senha estão corretos
    if (nickname === "seuUsuario" && senha === "suaSenha") {
        alert("Login bem-sucedido!");
    } else {
        // Mensagem de erro caso o login esteja errado
        document.getElementById("mensagemErro").style.display = "block";
    }
}

document.getElementById("loginButton").addEventListener("click", verificarLogin);
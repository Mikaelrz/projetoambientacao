function gerarPontos90{
    var pontoGerado = Math.random();
    document.getElementById("pontos").innerHTML = pontoGerado;

    var login = window.sessionStorage.getltem("login");
    document.getElementById("login").innerHTML = login;
}
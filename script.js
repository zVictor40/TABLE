document.getElementById("cadastro-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let tabelaUsuarios = document.getElementById("tabela-usuarios");
    let linhas = tabelaUsuarios.getElementsByTagName("tr");
    for (let i = 0; i < linhas.length; i++) {
        let nomeCelula = linhas[i].cells[0];
        let emailCelula = linhas[i].cells[1];
        if (nomeCelula.innerText === "" && emailCelula.innerText === "") {
            nomeCelula.innerText = nome;
            emailCelula.innerText = email;
            break;
        }
    }

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
}); 
 
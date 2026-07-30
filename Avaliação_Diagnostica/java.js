function validarFormulario(){

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if(nome == "" || email == "" || mensagem == ""){
        alert("Preencha todos os campos.");
        return false;
    }

    alert("Obrigado pelo contato, " + nome + "! Sua mensagem foi enviada.");

    return false;
}
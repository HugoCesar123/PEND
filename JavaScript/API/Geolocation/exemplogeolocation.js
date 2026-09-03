const imgPin = document.getElementById("pin");
const msg = document.getElementById("mensagem");

// Força a imagem a iniciar com a versão bloqueada/com risco
imgPin.src = "locnegada.png";

navigator.geolocation.getCurrentPosition(
    function (posicao) {
        // Sucesso: altera para o pin correto (sem o risco)
        imgPin.src = "locautorizada.png";
        msg.textContent = "Localização obtida com sucesso!";

        console.log("Latitude:", posicao.coords.latitude);
        console.log("Longitude:", posicao.coords.longitude);
        console.log("Precisão (m):", posicao.coords.accuracy);
    },
    function (erro) {
        // Erro/Bloqueio: força a exibição da imagem com o risco
        imgPin.src = "locnegada.png";
        msg.textContent = "Acesso à localização negado ou indisponível.";

        console.log("Erro de geolocalização:", erro.message);
    },
    {
        timeout: 5000 // Tempo máximo para tentar obter a localização (5s)
    }
);
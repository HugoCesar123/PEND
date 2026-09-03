// ====================
// CÂMERA
// ====================

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
})
.then(function(stream) {

    const video = document.querySelector("#camera");

    video.srcObject = stream;

})
.catch(function(erro) {

    console.log("Erro ao acessar a câmera:", erro);

});


// ====================
// GEOLOCALIZAÇÃO
// ====================

const imgPin = document.getElementById("pin");
const msg = document.getElementById("mensagem");

const latitude = document.getElementById("latitude");
const longitude = document.getElementById("longitude");
const precisao = document.getElementById("precisao");

// Começa com localização negada
imgPin.src = "locnegada.png";

navigator.geolocation.getCurrentPosition(

    function(posicao) {

        // Troca o ícone
        imgPin.src = "locautorizada.png";

        msg.textContent = "Localização obtida com sucesso!";

        // Mostra os dados na tela
        latitude.textContent = posicao.coords.latitude;
        longitude.textContent = posicao.coords.longitude;
        precisao.textContent = posicao.coords.accuracy + " metros";

        // Também mostra no console
        console.log("Latitude:", posicao.coords.latitude);
        console.log("Longitude:", posicao.coords.longitude);
        console.log("Precisão (m):", posicao.coords.accuracy);
    },

    function(erro) {

        imgPin.src = "locnegada.png";

        msg.textContent = "Acesso à localização negado ou indisponível.";

        console.log("Erro de geolocalização:", erro.message);
    },

    {
        timeout: 5000
    }
);
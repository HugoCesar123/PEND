const video = document.getElementById("camera");
const canvas = document.getElementById("canvas");
const botao = document.getElementById("botao");
const foto = document.getElementById("foto");


navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
})
.then(function (stream) {

    const video = document.querySelector("#camera");

    video.srcObject = stream;

})
.catch(function (erro) {

    console.log("Erro ao acessar a câmera:", erro);

});

botao.addEventListener("click", function() {

    canvas.width = video.clientWidth;
    canvas.height = video.clientHeight;

    const contexto = canvas.getContext("2d");

    contexto.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
    );

    foto.src = canvas.toDataURL("image/png");
});


const pin = document.getElementById("pin");
const msg = document.getElementById("mensagem");

const latitude = document.getElementById("latitude");
const longitude = document.getElementById("longitude");
const precisao = document.getElementById("precisao");


pin.textContent = "📍";

navigator.geolocation.getCurrentPosition(

    function (posicao) {

        pin.textContent = "📍";

        msg.textContent = "Localização obtida com sucesso!";

        latitude.textContent = posicao.coords.latitude;

        longitude.textContent = posicao.coords.longitude;

        precisao.textContent =
            posicao.coords.accuracy + " metros";

    },

    function (erro) {

        pin.textContent = "📍❌";

        msg.textContent =
            "Acesso à localização negado ou indisponível.";

    },

    {
        timeout: 5000
    }

);
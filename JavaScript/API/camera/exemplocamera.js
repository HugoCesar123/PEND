const video = document.getElementById("camera");
const canvas = document.getElementById("canvas");
const botao = document.getElementById("botao");
const foto = document.getElementById("foto");

navigator.mediaDevices.getUserMedia({
    video: true
})
.then(function(stream) {
    video.srcObject = stream;
})
.catch(function(erro) {
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
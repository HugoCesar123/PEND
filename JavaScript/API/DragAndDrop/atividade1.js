const quadrado = document.getElementById("quadrado");
const imagem = document.getElementById("imagem");
const texto = document.getElementById("texto");

quadrado.addEventListener("dragover", function(event) {
    event.preventDefault();

    quadrado.classList.add("dragover");
});

quadrado.addEventListener("dragleave", function() {
    quadrado.classList.remove("dragover");
});

quadrado.addEventListener("drop", function(event) {
    event.preventDefault();

    quadrado.classList.remove("dragover");

    const arquivo = event.dataTransfer.files[0];

    if (arquivo && arquivo.type.startsWith("image/")) {

        imagem.src = URL.createObjectURL(arquivo);

        imagem.style.display = "block";

        texto.style.display = "none";

    } else {
        alert("Arraste uma imagem!");
    }
});
const comidas = document.querySelectorAll(".comida");

const areaRogerio = document.getElementById("area-rogerio");

const rogerio = document.getElementById("rogerio");

const mensagem = document.getElementById("mensagem");

const botaoFome = document.getElementById("botao-fome");


// ==========================================
// ARRASTAR UM REQUISITO
// ==========================================

comidas.forEach(function(comida) {

    comida.addEventListener("dragstart", function(event) {

        const nomeComida = comida.dataset.comida;

        event.dataTransfer.setData(
            "text/plain",
            nomeComida
        );

        event.dataTransfer.effectAllowed = "copy";

    });

});


// ==========================================
// PASSOU POR CIMA DO ROGÉRIO
// ==========================================

areaRogerio.addEventListener("dragover", function(event) {

    event.preventDefault();

    areaRogerio.classList.add("dragover");

});


// ==========================================
// SAIU DE CIMA DO ROGÉRIO
// ==========================================

areaRogerio.addEventListener("dragleave", function(event) {

    areaRogerio.classList.remove("dragover");

});


// ==========================================
// SOLTOU NO ROGÉRIO
// ==========================================

areaRogerio.addEventListener("drop", function(event) {

    event.preventDefault();

    areaRogerio.classList.remove("dragover");


    const comida = event.dataTransfer.getData("text/plain");


    // Verifica se realmente foi arrastado um requisito

    if (comida === "") {
        return;
    }


    // TROCA A IMAGEM PARA ROGÉRIO CHEIO

    rogerio.src =
        "Gemini_Generated_Image_v51zqfv51zqfv51z.png";


    // MUDA A MENSAGEM

    mensagem.textContent =
        "😋 Rogério comeu " + comida + "!";


});


// ==========================================
// DEIXAR O ROGÉRIO COM FOME
// ==========================================

botaoFome.addEventListener("click", function() {

    rogerio.src =
        "Gemini_Generated_Image_zbhhqozbhhqozbhh.png";


    mensagem.textContent =
        "😭 Rogério está com fome!";

});
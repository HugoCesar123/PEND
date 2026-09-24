const API_KEY = "p7OwWZVh3NVNwdXniibJ9eFqBrUl5y54";

const URL_API =
    "https://app.ticketmaster.com/discovery/v2/events.json";



const botaoBuscar = document.getElementById("buscarEventos");

const cidade = document.getElementById("cidade");

const categoria = document.getElementById("categoria");

const resultadoEventos =
    document.getElementById("resultadoEventos");

const carregando =
    document.getElementById("carregando");

const erro =
    document.getElementById("erro");

const modal =
    document.getElementById("modal");

const fecharModal =
    document.getElementById("fecharModal");

const detalhesEvento =
    document.getElementById("detalhesEvento");



async function buscarEventos() {

    resultadoEventos.innerHTML = "";

    erro.textContent = "";

    carregando.style.display = "block";


    const nomeCidade = cidade.value.trim();

    const tipoEvento = categoria.value;


    let url = `${URL_API}?apikey=${API_KEY}&countryCode=BR&size=12`;


    if (nomeCidade !== "") {
        url += `&city=${encodeURIComponent(nomeCidade)}`;
    }


    if (tipoEvento !== "") {
        url += `&classificationName=${tipoEvento}`;
    }


    try {

        const resposta = await fetch(url);


        if (!resposta.ok) {
            throw new Error("Não foi possível buscar os eventos.");
        }


        const dados = await resposta.json();


        carregando.style.display = "none";


        if (!dados._embedded || !dados._embedded.events) {

            resultadoEventos.innerHTML =
                "<p>Nenhum evento encontrado.</p>";

            return;
        }


        const eventos = dados._embedded.events;


        eventos.forEach(evento => {

            criarCardEvento(evento);

        });


    } catch (error) {

        carregando.style.display = "none";

        erro.textContent =
            "Erro ao carregar os eventos. Verifique sua API Key ou tente novamente.";

        console.error(error);
    }
}



function criarCardEvento(evento) {

    const card = document.createElement("div");

    card.classList.add("card");


    let imagem =
        "https://via.placeholder.com/500x300?text=Evento";


    if (evento.images && evento.images.length > 0) {
        imagem = evento.images[0].url;
    }


    const nome = evento.name;


    let data = "Data não informada";

    if (
        evento.dates &&
        evento.dates.start &&
        evento.dates.start.localDate
    ) {

        const dataOriginal =
            evento.dates.start.localDate;

        data = dataOriginal.split("-").reverse().join("/");
    }


    let local = "Local não informado";

    if (
        evento._embedded &&
        evento._embedded.venues &&
        evento._embedded.venues.length > 0
    ) {

        local =
            evento._embedded.venues[0].name;
    }


    card.innerHTML = `

        <img src="${imagem}" alt="${nome}">

        <div class="card-conteudo">

            <h3>${nome}</h3>

            <p>📅 ${data}</p>

            <p>📍 ${local}</p>

            <button class="verDetalhes">
                Ver detalhes
            </button>

        </div>

    `;


    const botaoDetalhes =
        card.querySelector(".verDetalhes");


    botaoDetalhes.addEventListener("click", function () {

        mostrarDetalhes(evento);

    });


    resultadoEventos.appendChild(card);
}



function mostrarDetalhes(evento) {

    let imagem =
        "https://via.placeholder.com/500x300?text=Evento";


    if (evento.images && evento.images.length > 0) {
        imagem = evento.images[0].url;
    }


    let data = "Data não informada";


    if (
        evento.dates &&
        evento.dates.start &&
        evento.dates.start.localDate
    ) {

        data =
            evento.dates.start.localDate
                .split("-")
                .reverse()
                .join("/");
    }


    let local = "Local não informado";


    if (
        evento._embedded &&
        evento._embedded.venues &&
        evento._embedded.venues.length > 0
    ) {

        local =
            evento._embedded.venues[0].name;
    }


    detalhesEvento.innerHTML = `

        <img src="${imagem}" alt="${evento.name}">

        <h2>${evento.name}</h2>

        <p> <strong>Data:</strong> ${data}</p>

        <p> <strong>Local:</strong> ${local}</p>

        <p>
             <strong>Tipo:</strong>
            ${evento.type || "Evento"}
        </p>

        ${
            evento.url
            ?
            `
            <a href="${evento.url}" target="_blank">
                <button>Ver evento completo</button>
            </a>
            `
            :   
            ""
        }

    `;


    modal.classList.add("ativo");
}



fecharModal.addEventListener("click", function () {

    modal.classList.remove("ativo");

});


modal.addEventListener("click", function (evento) {

    if (evento.target === modal) {

        modal.classList.remove("ativo");

    }

});



botaoBuscar.addEventListener("click", function () {

    buscarEventos();

});


cidade.addEventListener("keydown", function (evento) {

    if (evento.key === "Enter") {

        buscarEventos();

    }

});


buscarEventos();
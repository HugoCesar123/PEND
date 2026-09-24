const express = require("express");

const app = express();

const PORTA = 3000;

const API_KEY = "p7OwWZVh3NVNwdXniibJ9eFqBrUl5y54";


app.use(express.json());


app.get("/eventos", async (req, res) => {

    const cidade = req.query.cidade || "";
    const categoria = req.query.categoria || "";

    let url =
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&countryCode=BR&size=12`;

    if (cidade !== "") {
        url += `&city=${encodeURIComponent(cidade)}`;
    }

    if (categoria !== "") {
        url += `&classificationName=${categoria}`;
    }


    try {

        const resposta = await fetch(url);

        const dados = await resposta.json();

        res.json(dados);

    } catch (erro) {

        console.error(erro);

        res.status(500).json({
            erro: "Erro ao buscar eventos"
        });

    }

});


app.listen(PORTA, () => {

    console.log(`Servidor rodando em http://localhost:${PORTA}`);

});
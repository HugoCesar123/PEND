// Pega os elementos do HTML
const botao = document.getElementById("buscar");
const loja = document.getElementById("loja");
const status = document.getElementById("status");

// Quando o botão for clicado
botao.addEventListener("click", async () => {

    // Mostra uma mensagem enquanto carrega
    status.textContent = "Carregando loja...";

    // Limpa os itens anteriores
    loja.innerHTML = "";

    try {

        // Faz a requisição para a API
        const resposta = await fetch(
            "https://fortnite-api.com/v2/shop"
        );

        // Transforma a resposta em JSON
        const dados = await resposta.json();

        // Verifica se a API respondeu corretamente
        if (!resposta.ok) {
            throw new Error("Erro ao acessar a API");
        }

        status.textContent = "Loja carregada!";

        // Pega os itens da loja
        const itens = dados.data.featured.entries;

        // Percorre os itens
        itens.forEach(item => {

            // Alguns itens possuem vários cosméticos
            const produto = item.brItems?.[0];

            // Se não encontrar um item, pula
            if (!produto) {
                return;
            }

            // Cria o card
            const card = document.createElement("div");

            card.classList.add("item");

            // Coloca as informações no card
            card.innerHTML = `
                <img src="${produto.images.icon}" alt="${produto.name}">

                <h2>${produto.name}</h2>

                <p>${produto.type.displayValue}</p>
            `;

            // Adiciona o card na página
            loja.appendChild(card);

        });

    } catch (erro) {

        // Mostra o erro no console
        console.error(erro);

        // Mostra mensagem para o usuário
        status.textContent =
            "Não foi possível carregar a loja.";
    }
});
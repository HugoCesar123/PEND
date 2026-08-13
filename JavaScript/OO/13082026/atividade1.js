const produtos = [];

const nome = document.querySelector("#nome");
const categoria = document.querySelector("#categoria");
const preco = document.querySelector("#preco");
const desconto = document.querySelector("#desconto");
const botaoCalcular = document.querySelector("#botaoCalcular");
const resultado = document.querySelector("#resultado");

botaoCalcular.addEventListener("click", function () {

    const produto = new Produto(
        nome.value,
        categoria.value,
        preco.value,
        desconto.value
    );

    produto.calcular();

    produtos.push(produto);

    console.log(produtos);

    produto.exibirNaTela();

});


class Produto {

    constructor(nome, categoria, preco, desconto) {

        this.nome = nome;
        this.categoria = categoria;
        this.preco = Number(preco);
        this.desconto = Number(desconto);

    }

    calcular() {

        this.valorDesconto = this.preco * (this.desconto / 100);
        this.precoFinal = this.preco - this.valorDesconto;

    }

    exibirNaTela() {

        resultado.innerHTML = "";

        produtos.forEach(produto => {

            resultado.innerHTML += `
                <div>
                    <p>Nome: ${produto.nome}</p>
                    <p>Categoria: ${produto.categoria}</p>
                    <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
                    <p>Desconto: ${produto.desconto}%</p>
                    <p>Preço final: R$ ${produto.precoFinal.toFixed(2)}</p>
                    <hr>
                </div>
            `;

        });

    }

}
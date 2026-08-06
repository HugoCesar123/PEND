// CLASSE
class Produto {

    //
    constructor(nome, preço, estoque){
    
    //
    this.nome = nome;
    this.preço = preço;
    this.estoque = estoque;
   
     }
    vender() {
        console.log("O produto foi vendido");
    }
    repor() {
        console.log("O produto foi reposto");
    }
    alterarpreco() {
        console.log(`${this.nome} O preco do produto foi alterado`);
    }

}

const produto1 = new Produto("Notebook", 3000, 10);
console.log("Produto 1: ", produto1);

const produto2 = new Produto("Smartphone", 2000, 20);
console.log("Produto 2: ", produto2);

const produto3 = new Produto("Tablet", 1500, 15);
console.log("Produto 3: ", produto3);

console.log("---------------------------------");
console.log("Atributos do Produto 1: ");
console.log("Nome: ", produto1.nome);
console.log("Preço: ", produto1.preço);
console.log("Estoque: ", produto1.estoque);
console.log("---------------------------------");
console.log("Atributos do Produto 2: ");
console.log("Nome: ", produto2.nome);
console.log("Preço: ", produto2.preço);
console.log("Estoque: ", produto2.estoque);
console.log("---------------------------------");
console.log("Atributos do Produto 3: ");
console.log("Nome: ", produto3.nome);
console.log("Preço: ", produto3.preço);
console.log("Estoque: ", produto3.estoque);
console.log("---------------------------------");

produto1.vender();

produto1.repor();

produto1.alterarpreco();
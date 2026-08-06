// CLASSE
class Carro {

    //
    constructor(marca, modelo, ano, cor){
    
    //
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;

    }
    ligar() {
        console.log("Carro ligado");
    }
    acelerar() {
        console.log("Acelerando");
    }
    frear() {
        console.log(`${this.modelo} está freando`);
    }

}

const carro1 = new Carro("Volkswagen", "Gol", 2022, "Branco");
console.log("Carro 1: ", carro1);

//
const carro2 = new Carro("Toyota", "Corolla", 2025, "Preto");
console.log("Carro 2: ", carro2);

//
const carro3 = new Carro("Honda", "Civic", 2023, "Prata");
console.log("Carro 3: ", carro3);

console.log("---------------------------------");
console.log("Atributos do Carro 1: ");
console.log("Marca: ", carro1.marca);
console.log("Modelo: ", carro1.modelo);
console.log("Ano: ", carro1.ano);
console.log("Cor: ", carro1.cor);
console.log("---------------------------------");
console.log("Atributos do Carro 2: ");
console.log("Marca: ", carro2.marca);
console.log("Modelo: ", carro2.modelo);
console.log("Ano: ", carro2.ano);
console.log("Cor: ", carro2.cor);
console.log("---------------------------------");
console.log("Atributos do Carro 3: ");
console.log("Marca: ", carro3.marca);
console.log("Modelo: ", carro3.modelo);
console.log("Ano: ", carro3.ano);
console.log("Cor: ", carro3.cor);
console.log("---------------------------------");

carro1.ligar();

carro1.acelerar();

carro1.frear();

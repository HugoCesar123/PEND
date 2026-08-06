// CLASSE
class Aluno {

    //
    constructor(nome, idade, curso, matricula){
    
    //
    this.nome = nome;
    this.idade = idade;
    this.curso = curso;
    this.matricula = matricula;

     }
    aprender() {
        console.log("Aluno aprendeu");
    }
    estudar() {
        console.log("Aluno está estudando");
    }
    apresentar() {
        console.log(`${this.nome} está apresentando`);
    }

}

const aluno1 = new Aluno("Hugo", 17, "Desenvolvimento de Sistema", "13131");
console.log("Aluno 1: ", aluno1);

const aluno2 = new Aluno("Rogerio", 45, "Marketing", "54321");
console.log("Aluno 2: ", aluno2);

const aluno3 = new Aluno("Augusto", 19, "Psicologia", "67892");
console.log("Aluno 3: ", aluno3);

console.log("---------------------------------");
console.log("Atributos do Aluno 1: ");
console.log("Nome: ", aluno1.nome);
console.log("Idade: ", aluno1.idade);
console.log("Curso: ", aluno1.curso);
console.log("Matrícula: ", aluno1.matricula);
console.log("---------------------------------");
console.log("Atributos do Aluno 2: ");
console.log("Nome: ", aluno2.nome);
console.log("Idade: ", aluno2.idade);
console.log("Curso: ", aluno2.curso);
console.log("Matrícula: ", aluno2.matricula);
console.log("---------------------------------");
console.log("Atributos do Aluno 3: ");
console.log("Nome: ", aluno3.nome);
console.log("Idade: ", aluno3.idade);
console.log("Curso: ", aluno3.curso);
console.log("Matrícula: ", aluno3.matricula);
console.log("---------------------------------");

aluno1.aprender();

aluno1.estudar();

aluno1.apresentar();
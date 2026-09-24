// document.querySelector("#buscarUsuarios").addEventListener("click", () => {


// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(resposta => resposta.json())
//     .then(dados => {
//         //console.log(dados);
//         resultado.innerHTML = "";

//         dados.forEach(usuario => {

//             resultado.innerHTML += `
//                 <p>
//                     <strong>${usuario.name}</strong><br>
//                     ${usuario.email}<br>
//                 </p>
//                 <hr>
//             `;
//         });
//     })
//     .catch(erro => {
//         console.log("Erro:", erro);
//     });
// });

// 


const botao = document.querySelector("#buscarUsuarios");
const resultado = document.querySelector("#resultado");
const idUsuario = document.querySelector("#idUsuario");

botao.addEventListener("click", async () => {
    
    const id = idUsuario.value;

    if ( id === "") {
        resultado.innerHTML = "Digite um ID";
        return;
    }

    try {

        const resposta = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        const dados = await resposta.json();

            resultado.innerHTML += `
            <p>
                <strong>${dados.name}</strong><br>
                Email:${dados.email}<br>
                cidade: ${dados.address.city}<br>
                Telefone: ${dados.phone}<br>
            </p>
            <hr>
        `;

    } catch (erro) {
        console.log("Erro:", erro);
    }
});
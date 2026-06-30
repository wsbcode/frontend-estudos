//  fetch(): fazendo a primeira requisição

// Pega o botão da página
let botao = document.querySelector("#button");

// Função que busca um usuário no GitHub
function searchUser(username) {
   // Faz a requisição para a API do GitHub
   fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
         // Primeiro then: recebe a resposta
         // Verifica se o status é 200 (sucesso)
         if (response.status === 200) {
            return response.json(); // Converte a resposta para JSON
         }
      })
      .then((data) => {
         // Segundo then: recebe os dados já convertidos
         console.log(data.name); // Mostra o nome no console
         document.querySelector("#resposta").innerText = data.name; // Mostra no HTML
      })
      .catch((reason) => {
         // Se der erro em qualquer parte
         document.querySelector("#resposta").innerText = "Ops algo deu errado!";
         console.log(reason); // Mostra o erro no console
      });
}

// Quando clicar no botão, busca o usuário "wsbcode"
botao.addEventListener("click", () => {
   searchUser("wsbcode");
});

// Trabalhando com código Assíncrono usando Async / Await
//async/await: Promises com cara de código síncrono

let botao2 = document.querySelector("#button2");
let modal = document.querySelector("#meuModal");
let btnError = document.querySelector("#btnError");

// Esconde o modal ao carregar a página
modal.style.display = "none";

// Função que busca usuário no GitHub
async function searchLogin(userlogin) {
   try {
      // Faz a requisição para a API
      let res = await fetch(`https://api.github.com/users/${userlogin}`);

      // Se o status não for 200 (ex: 404), força erro e pula direto pro catch
      if (!res.ok) {
         throw new Error("Usuário não encontrado");
      }

      // Converte a resposta para JSON
      let dados = await res.json();

      // Se encontrou o usuário, mostra na tela
      if (dados.login) {
         document.querySelector("#resposta2").innerText = dados.login;
         document.querySelector("#imagem").setAttribute("src", dados.avatar_url);
         document.querySelector("#imagem").setAttribute("alt", dados.name);
      }
   } catch (error) {
      // Se deu erro, mostra o modal
      modal.style.display = "block";
   }
}

// Botão fechar: esconde o modal
btnError.addEventListener("click", () => {
   modal.style.display = "none";
});

// Botão buscar: chama a função
botao2.addEventListener("click", () => {
   searchLogin("wsbcode");
});

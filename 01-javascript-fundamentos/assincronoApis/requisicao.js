//APRENDENDO A FAZER (requisição de uma API)

// EXEMPLO PRATICO DA PRODUÇÃO DA REQUISIÇÃO DA API
// fetch("link")           // 1. Tenta buscar os dados através do link
//   .then(...)            // 2. Tenta abrir o pacote que veio do fetch
//   .then(...)            // 3. Tenta mostrar na tela apos a conversão do json do primeiro fetch
//   .catch(...)           // 4. SE QUALQUER UM ACIMA FALHAR, EU SEGURO! MOSTRA A MENSAGEM DE ERRO QUE VOCE COCOLO

// 1. Criamos a função (a "receita") que buscará os dados
function pegandoApi() {
   // fetch: Faz o pedido ao servidor (como um carteiro indo buscar uma encomenda)
   fetch("https://jsonplaceholder.typicode.com/users")
      // .then: "ENTÃO", quando a resposta chegar...
      .then((response) => {
         // Transformamos a resposta bruta em JSON (abrindo a caixa da encomenda)
         return response.json();
      })

      // .then: "ENTÃO", agora que os dados estão prontos...
      .then((json) => {
         // Exibimos os dados no console (usando o conteúdo da encomenda)
         // Aqui entramos no Array , e acessamos um Objetos dentro deles e pegamos um item dentro do Objetos Address
         console.log(json);
      });
}

// 2. Selecionamos o botão no HTML pelo ID (buscando a peça no DOM)
const botao = document.querySelector("#button");
const botao2 = document.querySelector("#button2");
const botao3 = document.querySelector("#button3");
const botao4 = document.querySelector("#button4");
const botao5 = document.querySelector("#button5");
const h1 = document.querySelector("h1");
const ul = document.querySelector("ul");

// 3. Adicionamos o "vigia" (ouvinte) de eventos
// "Quando o BOTÃO sofrer um CLICK, execute a função PEGANDO API"
botao.addEventListener("click", pegandoApi);

//________________________________________________________________//

// SEGUNDO EXEMPLO

//Função onde para fazer a Requião da API
function chamandoApi() {
   // Função (fetch(...)) onde vai o link da api da qual vai ser feita a requirição
   fetch("https://jsonplaceholder.typicode.com/posts")
      // .then((...)) recebe e armazena a respos que a função fetch trouxe e transforma em um objeto com a função  json()
      .then((resposta) => {
         // console mostra o status da requisição
         console.log(resposta.status);
         return resposta.json();
      })
      // Utilizando os dados a API ja tratado e transformados em objetos com a função json()
      .then((data) => {
         console.log(data);
      })
      // .catch((...)) Função de segurança ,essa função trás o tipo de erro que houve caso ocorra um erro na requisição.
      .catch((error) => {
         alert("Erro na requisição da api William", error);
      });
}
botao2.addEventListener("click", chamandoApi);

// 1. O MOTOR: Esta função inicia a busca dos dados.
function teste() {
   // fetch vai até a "nuvem" buscar o endereço
   fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
         // O pacote chegou! Agora vamos "desembrulhar" e transformar em JSON.
         return response.json();
      })
      .then((dados) => {
         // Os dados estão prontos.
         // Pegamos apenas o primeiro item da lista [0] e "passamos a bola" para a função exibir.
         exibir(dados[0]);
      });
}

// 2. O DESENHISTA: Esta função só sabe receber dados e criar HTML.
function exibir(comments) {
   // Cria um elemento <li> na memória do computador (ainda não aparece na tela).
   const newElement = document.createElement("li");

   // Define o conteúdo: o texto do <li> será o e-mail que veio da API.
   newElement.innerText = comments.email;

   // Altera o H1 da página para mostrar o nome que veio da API.
   h1.innerText = comments.name;

   // Finalmente "pendura" o <li> criado dentro da <ul> que já existe no HTML.
   ul.appendChild(newElement);
}

// 3. O START: Chamamos a função teste para o processo começar.
teste();
//--------------------------------------------------------------------------//

// APRENDENDO SOBRE O MÉTODO POST
// Como enviar dados para uma API

// 1. Criamos a "missão" chamada enviar
function enviar() {
   // 2. O comando fetch é como mandar um mensageiro para este endereço:
   fetch("https://jsonplaceholder.typicode.com/comments", {
      // 3. O método POST avisa: "Ei, estou trazendo uma encomenda nova!"
      method: "POST",
      // 4. Os headers são como a etiqueta da caixa, dizendo que o conteúdo é do tipo JSON
      headers: {
         "Content-Type": "application/json",
      },
      // 5. O body é o que tem dentro da caixa.
      // O JSON.stringify transforma nossa lista em uma "fita" de texto que o cabo de internet aceita.
      body: JSON.stringify({
         nome: "William",
         email: "wsb@gmail.com",
         body: "Testando envio para Api", // Aqui é a mensagem do comentário
         userId: 10,
      }),
   })
      // 6. .then significa: "E ENTÃO, quando o servidor responder..."
      .then((response) => {
         // Pedimos para transformar a resposta do servidor em algo que a gente entenda (JSON)
         return response.json();
      })
      // 7. .then significa: "E ENTÃO, agora que temos os dados prontos..."
      .then((data) => {
         // Mostramos no "diário" do navegador (Console) o que o servidor nos mandou de volta
         console.log(data);
      });
}

// 8. Aqui avisamos ao botão: "Fique ouvindo! Se alguém te clicar, comece a missão enviar"
button3.addEventListener("click", enviar);
//
//--------------------------------------------------------------------------//
//
// REQUISIÇÕES DE API GET E POST USANDO ( async / wait)
//

//Pegando dados da API
async function buscarAPI() {
   try {
      let response = await fetch("https://jsonplaceholder.typicode.com/albums");
      let json = await response.json();

      console.log(json);
   } catch {
      alert("Algo deu errado");
   }
}
// Enviando dados para API
// 1. O 'async' avisa que essa função vai fazer uma viagem pela internet
async function enviarPost() {
   // 2. O 'await' faz o código esperar o mensageiro levar a caixa e voltar
   // Passamos o endereço e, dentro das { }, as instruções do envio
   let response = await fetch("https://jsonplaceholder.typicode.com/albums", {
      // 3. Método POST: Dizemos que estamos CRIANDO algo novo
      method: "POST",
      // 4. Headers: É a etiqueta da caixa. Avisamos que o conteúdo é um JSON
      headers: {
         "Content-Type": "application/json",
      },
      // 5. Body: É o conteúdo da encomenda.
      // O 'JSON.stringify' transforma nossa lista de informações em texto para a viagem
      body: JSON.stringify({
         userId: 10,
         title: "testando com async / await",
         id: 10,
      }),
   });
   // 6. O pacote chegou! Agora o 'await' espera o pacote ser aberto e convertido
   let dados = await response.json();
   // 7. Mostramos o resultado final (o que o servidor nos mandou de volta)
   console.log(dados);
}

botao4.addEventListener("click", buscarAPI);
botao5.addEventListener("click", enviarPost);

async function teste() {
   let resposta = await fetch("https://jsonplaceholder.typicode.com/albums");
   let json = await resposta.json();

   console.log(json[0].id);
}

teste();

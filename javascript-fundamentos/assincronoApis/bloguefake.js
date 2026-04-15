async function pegarPosts() {
   // Localiza a "mesa" onde os pratos serão colocados
   let postArea = document.querySelector("#postArea");

   // Avisa o cliente que o pedido está sendo preparado
   postArea.innerHTML = "carregando...";

   // O Garçom vai até a cozinha (API) e espera (await) a resposta
   let response = await fetch("https://jsonplaceholder.typicode.com/posts");

   // Ele transforma o "pacote" que veio da cozinha em comida real (JSON)
   let json = await response.json();

   // Se a cozinha mandou comida (se a lista não está vazia)...
   if (json.length > 0) {
      postArea.innerHTML = ""; // Limpa o aviso de "carregando..."

      let postHtml = ""; // Cria uma "bandeja" vazia para organizar os pratos

      // LOOP OF: Pega cada "objeto de post" completo, um por um
      for (let i of json) {
         // Vai acumulando o HTML de cada post na bandeja
         postHtml += `<div><h1>${i.title}</h1> ${i.body} <hr/></div>`;
      }
      // Coloca a bandeja cheia de posts na mesa de uma vez só
      postArea.innerHTML = postHtml;
   } else {
      // Caso a cozinha diga que não tem comida disponível
      postArea.innerHTML = "Nenhum post carregado!";
   }
}

async function enviarPoste(title, body) {
   // O Garçom leva as informações para a cozinha
   await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST", // Avisa que é uma ENTREGA de dados novos
      headers: { "Content-Type": "application/json" }, // Avisa que o formato é JSON
      body: JSON.stringify({
         // Transforma o objeto em texto para a viagem
         title: title,
         body: body,
         userId: 10,
      }),
   });

   // Depois que entregou, ele limpa o bloco de notas (os inputs)
   document.querySelector("#title").value = "";
   document.querySelector("#body").value = "";

   // Ele volta na cozinha para pegar a lista atualizada e mostrar na tela
   pegarPosts();
}
document.querySelector("#button").addEventListener("click", () => {
   // O Garçom lê o que o cliente escreveu nos papéis (inputs)
   let title = document.querySelector("#title").value;
   let body = document.querySelector("#body").value;

   // Validação: "Só levo o pedido se o cliente escreveu o Título E o Corpo"
   if (title && body) {
      enviarPoste(title, body); // Se estiver tudo ok, chama a função de enviar
   } else {
      alert("Preencha os campos corretamente"); // Se faltar algo, dá um grito (aviso)
   }
});

// Quando o site abre, o garçom já corre para buscar os posts iniciais
pegarPosts();

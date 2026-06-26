// PRIMEIRO EXEMPLO DE PROMISE
/*

PROMISE ETAPAS

- pending
- fulfilled = executa -> then()
- rejected  = executa -> catch()
- finally -> executar independente

 */

// Função que retorna uma Promise
function darCerto() {
   return new Promise((resolve, reject) => {
      // Espera 3 segundos
      setTimeout(() => {
         resolve("Success!"); // Está testando o "then"
         //  reject("Error!"); // Está testando o "catch"
      }, 3000);
   });
}

// Executando a Promise
darCerto()
   .then((success) => {
      // Se der certo (fulfilled)
      console.log(success);
      let teste = document.querySelector("#texto");
      teste.innerText = "deu certo";
   })
   .catch((error) => {
      // Se der erro (rejected)
      console.log(error);
      let teste = document.querySelector("#texto");
      teste.innerText = "Deu errado";
   })
   .finally(() => {
      // Executa sempre, no final
      console.log("Finalizando...");
   });

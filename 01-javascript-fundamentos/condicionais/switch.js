//CONHECENDO A CONDICIONAL (Switch)
//

let fruta = "pera";
// 1. DEFINIÇÃO: Você criou uma variável e guardou o texto "pera" nela.

switch (fruta) {
   // 2. O COMUTADOR: O JavaScript pega o valor "pera" e diz:
   //    "Vou procurar nos casos abaixo alguém que seja IGUAL a 'pera'."

   case "uva":
      // 3. TESTE 1: "Pera é igual a uva?" -> Não. Pula para o próximo.
      console.log("3 letras");
      break;

   case "melancia":
      // 4. TESTE 2: "Pera é igual a melancia?" -> Não. Pula para o próximo.
      console.log("8 letras");
      break;

   case "Manga":
      // 5. TESTE 3: "Pera é igual a Manga?" -> Não.
      //    DICA: Se fruta fosse "manga" (minúsculo), também daria erro,
      //    pois o switch diferencia maiúsculas de minúsculas.
      console.log("5 letras");
      break;

   default:
      // 6. O PORTO SEGURO: "Já que não encontrei nenhum caso igual a 'pera',
      //    vou executar o que está aqui no default."
      console.log("fruta não registrada");
}

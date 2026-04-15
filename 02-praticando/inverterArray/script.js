// 1. Seleciona o botão da página pelo seu ID "button"
//    document.querySelector busca o primeiro elemento HTML que corresponde ao seletor "#button"
const button = document.querySelector("#button");

// 2. Seleciona o elemento onde o resultado será exibido pelo ID "exibir"
const exibir = document.querySelector("#exibir");

// 3. Cria um array constante com números de 1 a 9
//    const significa que a variável não pode ser reatribuída, mas o conteúdo do array pode ser modificado
const itensArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 4. Adiciona um "ouvinte" de evento ao botão
//    Quando o botão for clicado ("click"), a função inverter será executada
button.addEventListener("click", inverter);

// 6. Declara a função chamada inverter que será executada quando o botão for clicado
function inverter() {
   // 5. Declara uma variável let chamada resultado que começa como um array vazio []
   //    let permite que esta variável seja modificada depois
   let resultado = [];
   // 7. INÍCIO DO LOOP FOR
   //    for - estrutura de repetição
   //    let i = itensArray.length - 1 -> começa com i = 8 (último índice do array)
   //    i >= 0 -> continua enquanto i for maior ou igual a 0
   //    i-- -> diminui i em 1 a cada volta do loop
   for (let i = itensArray.length - 1; i >= 0; i--) {
      // 8. Adiciona o elemento itensArray[i] ao array resultado
      //    push() é um método que adiciona um novo item no FINAL do array
      //    Na primeira volta: i=8 → adiciona itensArray[8] = 9
      //    Na segunda volta: i=7 → adiciona itensArray[7] = 8
      //    E assim por diante até i=0 → adiciona itensArray[0] = 1
      resultado.push(itensArray[i]);

      // 9. FIM DO LOOP FOR
      //    O loop volta para o passo 7 até que i seja menor que 0
   }

   // 10. Exibe o resultado no elemento HTML
   //     textContent altera o texto do elemento selecionado
   //     O array resultado será automaticamente convertido para string com vírgulas
   //     Exemplo: resultado = [9,8,7,6,5,4,3,2,1] vira "9,8,7,6,5,4,3,2,1"
   exibir.textContent = resultado;
}

// Reverter array  com reverse
let teste = itensArray.reverse();
console.log(teste);

let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let exibir = document.querySelector("#exibir");
let button = document.querySelector("button");
button.addEventListener("click", maiorValor);

function maiorValor() {

   let
   if (input1.value > input2.value) {
      exibir.innerHTML = `Maior valor digitado foi ${input1.value}`;
   } else if (input1.value == input2.value) {
      exibir.innerHTML = "Os valores sao iguai";
   } else {
      exibir.innerHTML = `Maior valor digitado foi ${input2.value}`;
   }
   input1.value = "";
   input2.value = "";
}

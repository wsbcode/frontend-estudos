let input = document.querySelector("#input");
let exibir = document.querySelector("#exibir");
let button = document.querySelector("button");

button.addEventListener("click", verificar);

function verificar() {
   let idade = input.value;
   if (idade < 18) {
      exibir.innerHTML = `Sua idade é : ${idade} , voce é criança`;
   } else if (idade >= 18 && idade <= 59) {
      exibir.innerHTML = `Sua idade é : ${idade} , voce é um adulto`;
   } else {
      exibir.innerHTML = `Sua idade é : ${idade} , voce é um idoso`;
   }
}

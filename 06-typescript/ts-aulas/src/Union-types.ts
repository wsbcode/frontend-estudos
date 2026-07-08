// UNION TYPES E LITERAL TYPES
//
// Union type

// Função que aceita números OU textos como parâmetros
function somar(num1: number | string, num2: number | string) {
   // Se num1 for string, converte pra número. Se já for número, mantém.
   let num1S: number = typeof num1 === "string" ? parseFloat(num1) : num1;

   // Se num2 for string, converte pra número. Se já for número, mantém.
   let num2S: number = typeof num2 === "string" ? parseFloat(num2) : num2;

   // Soma os dois valores (agora garantidamente números)
   return num1S + num2S;
}

let res = somar(10, 20);
console.log(res);

// Type literais

// Define os únicos status possíveis para um pagamento
type PaymentStatus = "pendente" | "pago" | "cancelado" | "reembolsado";

let status: PaymentStatus = "pago";
console.log(status);

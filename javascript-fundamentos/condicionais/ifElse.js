// CONDICIAIS (if ... else)
//
let idade = 10;
// 1. Cria uma "caixa" (variável) chamada idade e guarda o número 10 nela.

if (idade >= 18) {
   // 2. PERGUNTA: "O valor dentro da caixa idade é MAIOR ou IGUAL a 18?"

   console.log(`Idade:${idade} , voce é maior de idade`);
   // 3. AÇÃO SE SIM: Se a pergunta acima for verdade, mostra essa mensagem.
} else {
   // 4. CAMINHO ALTERNATIVO: "Se a pergunta do IF for falsa, faça isso aqui..."

   console.log(`Idade:${idade} , voce é menor de idade`);
   // 5. AÇÃO DO SENÃO: Mostra que é menor de idade (é o que vai aparecer no seu console).
}

//-Validando usuário e senha//

let user = "wsb92";
// 1. Guarda o nome de usuário (texto/string).

let password = 1992192;
// 2. Guarda a senha original (um número). Note que tem 7 dígitos.

if (user === "wsb92" && password === 19921992) {
   // 3. A CHECAGEM DUPLA:
   //    - user === "wsb92" (O nome é exatamente esse?)
   //    - && (E TAMBÉM...)
   //    - password === 19921992 (A senha é exatamente essa? Note: aqui tem 8 dígitos!)

   console.log("Acesso autorizado");
   // 4. SUCESSO: Só acontece se o Nome E a Senha estiverem 100% certos.
} else {
   // 5. FALHA: Se o nome estiver errado OU a senha estiver errada, cai aqui.

   console.log("User e password estão incorretos");
   // 6. MENSAGEM: Como a senha no IF tem um "9" a mais, o sistema dirá que está incorreto.
}

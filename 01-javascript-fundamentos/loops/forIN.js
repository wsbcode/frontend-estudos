// LAÇO DE REPETIÇÃO COM (for...in) MAIS UTILIZADO PARA PERCORRER OBJETOS.

let user = {
   nome: "William",
   idade: "33",
   status: true,
};

// O 'for...in' percorre as CHAVES (os nomes das etiquetas)
for (key in user) {
   // CUIDADO: Se você der console.log(user), ele vai imprimir o OBJETO INTEIRO
   // 3 vezes (uma para cada chave: nome, idade, status).
   console.log(key); // Dica: Isso imprimiria apenas "nome", "idade", "status"
}

// --- TESTE OBJETO ---
let dados = {
   nome: "William",
   idade: 33,
   sexo: "masculino",
   ativo: true,
};

// 'i' ou 'key' é o nome que você dá para a CHAVE da vez
for (let i in dados) {
   // CUIDADO: Aqui você pediu console.log(dados.ativo)
   // Ele vai imprimir "true" 4 vezes (porque o objeto tem 4 propriedades).

   // JEITO CERTO DE PEGAR O VALOR DINÂMICO:
   console.log(dados[i]); // Isso imprime: "William", 33, "masculino", true
}

// APRENDENDO SOBRE OPERADOR (spread ...)

// EXEMPLO COM  OBJETOS
// Objeto PERSON , com dados de uma pessoa , que sera copiado e reutilizado em outro Objeto , através do operador Spread ...
let person = {
   name: "William",
   sobreName: "Barbosa",
   age: 33,
   social: {
      instagram: "wsb92@insta",
      facebook: "wsb@facebook",
   },
   contact: {
      email: "wsbcontatos@gmail.com",
      phone: 9999999999,
   },
   nomeCompleto: function () {
      return `${this.name} ${this.sobreName}`;
   },
};

// Novo Person que esta usando o operador Spread... , e adicionando a PERSON dados (pais , estado e cidade)
let spreadPerson = {
   ...person,
   pais: "Brasil",
   estado: "Bahia",
   cidade: "Madre de Deus",
};
// Exibe SpreadPerson , com os dados de PERSON + pais, estado e cidade em um novo objeto.
console.log(spreadPerson);

//EXEMPLO COM ARRAY

// ARRAY NOMES , com vários Itens , que sera copiado e reutilizado em outro Array , através do operador Spread ...
let nomes = ["William", "Rosângela", "Leticia", "Dionísio", "Rosilda"];

// Novo NOME que esta usando o operador Spread... , e adicionando a NOMES novos Itens como: (Edila , Suziane e Lismara)
let spreadNomes = [...nomes, "Edila", "Suziane", "Lismara"];

// Exibe SpreadNomes , com os Itens de NOMES + Edila, Suziane e Lismara em um novo Array.
console.log(spreadNomes);

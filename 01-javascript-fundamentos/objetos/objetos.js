// APRENDENDO SOBRE (objetos)
//
//CRIANDO OBJETO Pessoa , onde dentro dele tem varias informações sobre
let person = {
   name: "William",
   sobreName: "Barbosa",
   age: 33,
   social: {
      instagram: "wsb92@",
      facebook: "wsb@",
   },
   contact: {
      email: "wsbcontatos@gmail.com",
      phone: 9999999999,
   },
   nomeCompleto: function () {
      return `${this.name} ${this.sobreName}`;
   },
};

//ACESSANDO O CONTEÚDO DE DENTRO DO OBJETO

// Pegando a idade
console.log(person.age);
// Pegando todo conteúdo dentro do objeto social
console.log(person.social);
// pegando elementos dentro do objeto contact
console.log(person.contact.email);
// Pegando a Função  dentro do objeto
console.log(person.nomeCompleto());

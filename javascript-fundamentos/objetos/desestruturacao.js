//APRENDENDO SOBRE (desestruturação de objetos)
//
// variável que recebe um objetos com dados de uma pessoa
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

// Desestruturação: extrai 'name' do (Objeto PERSON) mais 'email'/'phone' de dentro de 'contact'
function pegarContatos({ name, contact: { email, phone } }) {
   return `O candidato ${name} possui os seguintes contatos registrados ${email} | ${phone}`;
}
// variável que recebe os dados da função  PegarContatos
let contacts = pegarContatos(person);

// exibir no console o resultado
console.log(contacts);

// Desestruturação: extrai 'name' do (Objeto PERSON) mais 'instagram'/'facebook' de dentro de 'social'
function mostrarRedes({ name, social: { instagram, facebook } }) {
   console.log(`${name} está no IG: ${instagram} e FB: ${facebook}`);
}

// exibir no console o resultado
mostrarRedes(person);

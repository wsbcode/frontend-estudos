// TYPE EM FUNÇÕES

// Type em função
function futebol(time: string) {
   return time;
}
console.log(futebol("Palmeiras"));

// Type retorno da função, informando que essa função ira retornar um Number
function somar(num1: number, num2: number): number {
   return num1 + num2;
}
let res = somar(11, 12);
console.log(res);

//EX 2

// Type retorno da função, informando que essa função ira retornar uma String
function concatenar(nome: string, sobreNome: string): string {
   return `Nome completo: ${nome} ${sobreNome}`;
}
let res2 = concatenar("William", "Barbosa");
console.log(res2);

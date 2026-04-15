//APREENDO SOBRE (desestruturação)
//
// 1. Criamos um array (lista) com 4 strings guardadas na variável 'info'.
let info = ["William Barbosa", "InstaWilliam@", "William", "Barbosa"];

// 2. Desestruturação: Criamos 4 variáveis novas [a, b, c, d].
// O JavaScript olha para a lista 'info' e entrega:
// 'a' recebe o 1º item, 'b' o 2º, 'c' o 3º e 'd' o 4º.
let [a, b, c, d] = info;

// 3. Imprimimos apenas as duas primeiras variáveis no console.
// O resultado será: "William Barbosa InstaWilliam@"
console.log(a, b);

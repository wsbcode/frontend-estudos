// 1. Importamos a definição de como uma "Pessoa" deve ser estruturada.
// O '@' geralmente é um atalho (alias) para a pasta 'src'.

import type { Pessoas } from "../types/Person";

// 2. Criamos e exportamos um Array (lista) constante.
// 'Pessoas[]' indica ao TypeScript que esta variável só aceita uma lista de objetos
// que sigam exatamente o contrato definido no tipo 'Pessoas'.
export const listaPessoas: Pessoas[] = [
   { id: 1, nome: "William", profissao: "Desenvolvedor" },
   { id: 2, nome: "Valdileno", profissao: "Analista de dados" },
   { id: 3, nome: "Rodrigo", profissao: "Desenvolvedor" },
   { id: 4, nome: "Rafael", profissao: "Desenvolvedor" },
   { id: 5, nome: "Thiago", profissao: "Devops" },
   { id: 6, nome: "Luis Mario", profissao: "Designer" },
];

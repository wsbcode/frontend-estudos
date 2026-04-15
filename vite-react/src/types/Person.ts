// 2. 'type' define uma estrutura de objeto personalizada no TypeScript.
export type Pessoas = {
   // Define que o ID deve ser sempre um número (essencial para a 'key' do map).
   id: number;

   // Define que o nome deve ser obrigatoriamente uma string (texto).
   nome: string;

   // Define que a profissão também é um campo obrigatório do tipo texto.
   profissao: string;
};

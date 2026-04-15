// 1. Aqui criamos uma "etiqueta" ou regra chamada PropsNota.
// Estamos dizendo: "Para usar esse componente, você PRECISA me dar uma 'nota' que seja um número".
type PropsNota = {
   nota: number;
};

// 2. Criamos a função do componente e dizemos que ela deve seguir a regra 'PropsNota'.
// O { nota } entre chaves serve para "extrair" o valor direto da caixa de propriedades.
export const ExibirNotas = ({ nota }: PropsNota) => {
   // 3. Criamos uma pergunta: "A nota está entre 1 e 5?".
   // O resultado será apenas 'true' (sim) ou 'false' (não). Guardamos isso em 'NotaValida'.
   const NotaValida = nota >= 1 && nota <= 5;

   // 4. Aqui usamos o "Operador Ternário" (o ? e o :).
   // Se 'NotaValida' for sim (?), pegamos a estrela e repetimos ela o número de vezes da nota.
   // Se for não (:), guardamos a frase de erro.
   const estrelas = NotaValida ? "⭐".repeat(nota) : "Nenhuma nota encontrada";

   return (
      // 5. O container principal que deixa os itens um ao lado do outro (flex) e com letra grande.
      <div className="flex text-7xl">
         {/* 6. Lógica de exibição: "Só mostre o quadradinho com o número se a nota for válida". */}
         {/* O '&&' funciona como um porteiro: se o lado esquerdo for falso, nada do lado direito aparece. */}
         {NotaValida && (
            <div className="h-10 w-10 flex justify-center items-center text-6xl">{nota}</div>
         )}

         {/* 7. Aqui exibimos o resultado final: ou a sequência de estrelas, ou a frase de erro. */}
         <div className="flex justify-center items-center text-5xl">{estrelas}</div>
      </div>
   );
};

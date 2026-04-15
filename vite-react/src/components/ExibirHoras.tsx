export const ExibirHora = () => {
   // Criamos um novo objeto de data que contém o momento atual do sistema
   const agora = new Date();

   // Extraímos apenas o número da hora (0-23) para usar na lógica de saudação
   const hora = agora.getHours();

   // Formatamos a hora para string seguindo o padrão brasileiro (HH:mm:ss)
   const horaFormatada = agora.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
   });

   // Iniciamos uma variável vazia para armazenar o texto da saudação
   let peridosDoDIa = "";

   // Estrutura condicional para definir a saudação com base no valor da variável 'hora'
   if (hora >= 5 && hora <= 11) {
      // Se estiver entre 5h e 11h
      peridosDoDIa = "Bom dia 🌅";
   } else if (hora >= 12 && hora <= 17) {
      // Se estiver entre 12h e 17h
      peridosDoDIa = "Boa tarde 🌇";
   } else if (hora >= 18 && hora <= 23) {
      // Se estiver entre 18h e 23h
      peridosDoDIa = "Boa noite 🌙";
   } else {
      // Caso não seja nenhuma das anteriores (entre 00h e 4h)
      peridosDoDIa = "Boa madrugada 🌄";
   }

   return (
      <div className="flex flex-col text-center gap-1  text-blue-300">
         {/* Exibimos a hora formatada dentro de uma div com fonte grande */}
         <div className="text-7xl">{horaFormatada}</div>

         {/* Exibimos a mensagem de saudação baseada no horário */}
         <div className="text-3xl">{peridosDoDIa}</div>
      </div>
   );
};

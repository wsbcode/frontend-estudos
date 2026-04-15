// Importa o tipo Foto para saber quais dados cada foto possui (id e url)
import type { Foto } from "../types/Foto";

// Define as propriedades (Props) que este componente precisa receber
type Props = {
   foto: Foto; // Recebe o objeto da foto específica
   OnClick: () => void; // Recebe a função que será disparada ao clicar
};

// Componente que desenha a foto individual na tela
export const FotoItem = ({ foto, OnClick }: Props) => {
   return (
      /* Quando o usuário clicar nesta div, a função OnClick é executada */
      <div onClick={OnClick}>
         <img
            /* Monta o caminho da imagem usando a URL que vem do objeto foto */
            src={`/assets/${foto.url}`}
            /* Define um texto alternativo usando o ID da foto */
            alt={`Foto ${foto.id}`}
            className="w-1/7 p-5 cursor-pointer"
         />
      </div>
   );
};

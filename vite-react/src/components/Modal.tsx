// Define quais informações o Modal precisa receber para funcionar
type Props = {
   image: string; // O nome da imagem que vai aparecer no meio
   closeModal: () => void; // A função que será chamada para fechar o modal
};

// Componente do Modal: ele recebe a imagem e a função de fechar
export const Modal = ({ image, closeModal }: Props) => {
   return (
      <>
         {/* Div de fundo: quando clicada, ela executa a função de fechar */}
         <div
            onClick={closeModal}
            className="fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/90"
         >
            {/* A imagem central: o src busca o arquivo dentro da pasta assets */}
            <img src={`/assets/${image}`} alt="Modal" className="max-w-full max-h-full" />
         </div>

         {/* O botão "X" de fechar que fica no canto da tela */}
         <div
            className="fixed top-5 right-5 w-10 h-10 cursor-pointer text-white text-5xl"
            onClick={closeModal} // Também chama a função de fechar ao ser clicado
         >
            X
         </div>
      </>
   );
};

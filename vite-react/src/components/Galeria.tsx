import { useState } from "react";
import { listaFotos } from "../data/listaFotos";
import { FotoItem } from "./FotoItem";
import { Modal } from "./Modal";

export const Galeria = () => {
   // Estado para controlar se o Modal aparece (true) ou some (false)
   const [showModal, setShowModal] = useState(false);

   // Estado para guardar qual imagem específica foi clicada para exibir no Modal
   const [imageOfModal, setImageOfModal] = useState("");

   // Função que abre o Modal baseada no ID da foto clicada
   const openModal = (id: number) => {
      // Procura na lista de fotos aquela que tem o ID igual ao clicado
      const foto = listaFotos.find((item) => item.id === id);

      // Se encontrar a foto, guarda a URL dela e manda mostrar o Modal
      if (foto) {
         setImageOfModal(foto.url);
         setShowModal(true);
      }
   };

   // Função simples que apenas esconde o Modal
   const closeModal = () => {
      setShowModal(false);
   };

   return (
      <div className="w-full h-full flex flex-col items-center text-2xl">
         <h1 className="text-4xl my-10">Galeria de Imagens</h1>

         <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Percorre a lista de fotos e cria um componente FotoItem para cada uma */}
            {listaFotos.map((foto) => (
               <FotoItem
                  key={foto.id} // Identificador único exigido pelo React no map
                  foto={foto} // Passa os dados da foto
                  OnClick={() => openModal(foto.id)} // Passa a função de abrir
               />
            ))}
         </section>

         {/* Se showModal for verdadeiro (true), ele mostra o componente Modal na tela */}
         {showModal && <Modal image={imageOfModal} closeModal={closeModal} />}
      </div>
   );
};

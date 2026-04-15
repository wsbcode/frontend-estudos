import { useState } from "react";
import { VideoPlay } from "./VideoPlay";

export const VideoEffect = () => {
   // Criamos um estado chamado 'playing' que começa como 'false' (parado)
   // Ele serve como um interruptor: true = tocando, false = pausado
   const [playing, setPlaying] = useState(false);

   return (
      <div className="flex justify-center items-center flex-col gap-4">
         <h1 className="text-blue-500 text-2xl mb-2">Video Effect</h1>

         {/* Mostra um texto diferente na tela dependendo do estado 'playing' */}
         {/* Se playing for true, mostra "RODANDO". Se for false, mostra "PARADO" */}
         <p className="text-2xl text-orange-500">{playing ? "RODANDO" : "PARADO"}</p>

         {/* Botão que inverte o estado atual */}
         <button
            className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer mt-4"
            onClick={() => setPlaying(!playing)} // O '!' inverte o valor: se era true vira false e vice-versa
         >
            {/* O texto do botão também muda conforme o estado */}
            {playing ? "PAUSAR" : "INICIAR"}
         </button>

         {/* Chamamos o componente que realmente mostra o vídeo */}
         {/* Passamos o link do vídeo (src) e o nosso estado (isPlaying) para ele */}
         <VideoPlay
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            isPlaying={playing}
         />
      </div>
   );
};

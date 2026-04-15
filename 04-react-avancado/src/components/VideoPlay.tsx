import { useEffect, useRef } from "react";

// Definimos o que este componente precisa receber (as Props)
type Props = {
   src: string; // O link do vídeo
   isPlaying: boolean; // O "interruptor" (ligado ou desligado)
};

export const VideoPlay = ({ src, isPlaying }: Props) => {
   // O 'useRef' é como se fosse um "gancho" ou uma "âncora"
   // Ele serve para pegarmos o elemento real do HTML (a tag <video>) para mexer nele depois
   const video = useRef<HTMLVideoElement>(null);

   // O useEffect aqui serve para Sincronizar o estado do React com o vídeo real
   useEffect(() => {
      // Verificamos se o 'isPlaying' mudou para true ou false
      if (isPlaying) {
         // Se for true, usamos o comando do navegador para dar play
         // O '?. ' serve para garantir que o vídeo existe antes de tentar tocar
         video.current?.play();
      } else {
         // Se for false, usamos o comando do navegador para pausar
         video.current?.pause();
      }
   }, [isPlaying]); // Este efeito só roda quando o 'isPlaying' lá do componente pai mudar

   return (
      <div className="h-64 w-96 bg-gray-900 flex items-center justify-center">
         {/* A propriedade 'ref={video}' conecta este elemento ao nosso "gancho" useRef lá de cima */}
         <video ref={video} src={src} loop playsInline />
      </div>
   );
};

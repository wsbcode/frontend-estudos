//CRIANDO COMPONENTE (Triangulo), onde esta sendo exportado e usando em um componente (Geometria)
export const Triangulo = () => {
   return (
      <div className="relative flex justify-center items-center">
         {/* Div do desenho do Triângulo (feita de bordas) */}
         <div
            className="
               flex justify-center items-center 
               w-0 h-0 
               border-l-[125px] border-l-transparent 
               border-r-[125px] border-r-transparent 
               border-b-[150px] border-b-blue-500"
         ></div>

         {/* Texto centralizado por cima do desenho */}
         <span className="absolute top-[80px] font-bold text-white">Triangulo</span>
      </div>
   );
};

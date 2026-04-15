// Importando componentes ( Circulo , Quadrado , Triangulo), juntando todos em um componente (Geometria), para ser exportado de forma unica para pagina principal
import { Circulo } from "./Circulo";
import { Quadrado } from "./Quadrado";
import { Triangulo } from "./Triangulo";

export const Geometria = () => {
   return (
      <div className="  flex flex-col gap-2 mt-10">
         <div>
            <h1 className="text-3xl text-center text-orange-400">Formas Geométricas</h1>
         </div>
         <div className=" flex gap-10 mt-10">
            <Quadrado />
            <Circulo />
            <Triangulo />
         </div>
      </div>
   );
};

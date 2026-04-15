// Importa o "molde" (Type) que define como uma Foto deve ser
import type { Foto } from "../types/Foto";

// Cria e exporta uma lista (array) contendo os dados das fotos
// O ": Foto[]" diz que esta lista só aceita itens que sigam o molde de "Foto"
export const listaFotos: Foto[] = [
   { id: 1, url: "1.jpg" }, // Cada objeto tem um número de identificação (id)
   { id: 2, url: "2.jpg" }, // E o nome/caminho do arquivo da imagem (url)
   { id: 3, url: "3.jpg" },
   { id: 4, url: "4.jpg" },
   { id: 5, url: "5.jpg" },
   { id: 6, url: "6.jpg" },
   { id: 7, url: "7.jpg" },
   { id: 8, url: "8.jpg" },
   { id: 9, url: "9.jpg" },
];

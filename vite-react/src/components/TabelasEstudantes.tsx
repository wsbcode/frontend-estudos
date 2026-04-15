import type { Estudante } from "../types/Estudante";

type PropsEstudantes = {
   ListaEstudantes: Estudante[];
};

export const TabelaEstudantes = ({ ListaEstudantes }: PropsEstudantes) => {
   return (
      <table className="w-full borde border-gray-600 rounded-md overflow-hidden">
         <thead>
            <tr className="text-left borde-b border-gray-600 bg-gray-800">
               <th className="p-3">Name</th>
               <th className="p-3">Status</th>
               <th className="p-3">Garde 1 </th>
               <th className="p-3">Grade 2</th>
               <th className="p-3">Grade Final</th>
            </tr>
         </thead>
         <tbody className="">
            {ListaEstudantes.map((item) => (
               <tr key={item.id} className=" text-gray-800 bg-gray-400 border-b border-gray-600">
                  <td className="p-3 flex items-center">
                     {
                        <img
                           src={item.avatar}
                           alt={item.name}
                           className="w-10 h-10 rounded-full mr-3"
                        />
                     }
                     <div>
                        <div className="font-bold">{item.name}</div>
                        <div>{item.email}</div>
                     </div>
                  </td>
                  <td>
                     {item.active && (
                        <div className="px-2 p-y1 inline-block border rounded-md border-green-800 bg-emerald-600 text-white text-xs">
                           Ativo
                        </div>
                     )}
                     {!item.active && (
                        <div className="px-2 p-y1 inline-block border rounded-md border-red-800 bg-red-600 text-white text-xs">
                           Inativo
                        </div>
                     )}
                  </td>
                  <td className="p-3">{item.grade1.toFixed(1)}</td>
                  <td className="p-3">{item.grade2.toFixed(1)}</td>
                  <td className="p-3 font-bold">
                     {item.active ? ((item.grade1 + item.grade2) / 2).toFixed(1) : "***"}
                  </td>
               </tr>
            ))}
         </tbody>
      </table>
   );
};

import { Card } from "./components/Card";
import { Condicional } from "./components/Condicional";
import { listaPessoas } from "./data/listaPessoas";
import { ExibirHora } from "./components/ExibirHoras";
import { ExibirNotas } from "./components/ExibirNotas";
import { TabelaEstudantes } from "./components/TabelasEstudantes";
import { Estudantes } from "./data/estudantes";
import { Geometria } from "./components/Geometria";
import { Pessoa } from "./components/Pessoa";
import { Clicando } from "./components/Clicando";
import { CliqueComProps } from "./components/CliqueComProps";
import { Formulario } from "./components/Formulario";
import { IntroState } from "./components/introState";
import { Exibir } from "./components/Exibir";
import { StatesCampos } from "./components/StatesCampos";
import { ObjetoStates } from "./components/ObjetoStates";
import { ArrayStates } from "./components/ArrayStates";
import { Galeria } from "./components/Galeria";
import { Quiz } from "./components/Quiz";

export function Page() {
   {
      /* criando função para filtra e pegar desenvolvedor de dentro do array e trazer para variável trabalho */
   }
   const trabalho = listaPessoas.filter((item) => item.profissao === "Desenvolvedor");
   {
      /* Criando função para eventos  de click com props */
   }
   const click01 = () => alert("Botão 1 foi clicado");
   const click02 = () => alert("Botão 2 foi clicado");
   const click03 = () => alert("Botão 3 foi clicado");

   return (
      <div className="bg-blue-900 text-white flex items-center justify-center flex-col gap-4">
         <h1 className="font-bold text-3xl text-center ">Aulas de React</h1>
         <div className="">
            <Geometria />
         </div>
         <br />
         <div>
            <Pessoa
               nome="William"
               imagem="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400"
               profissao={["Programador", "Front-End", "Atleta"]}
            />
            <Pessoa
               nome="William"
               imagem="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400"
               profissao={["Desenvolvedor", "Back-End", "Atleta"]}
            />
            <Pessoa nome="William" profissao={["Desenvolvedor", "Back-End", "Atleta"]} />
         </div>
         <div>
            <Card>
               <h1 className="text-3xl font-bold">William Barbosa</h1>
               <p className=" text-sm italic text-right ">Desenvolvedor de Software</p>
            </Card>
         </div>
         <div>
            <Condicional frase="Desenvolvedor Front-End em formação" autor="William Barbosa" />
         </div>
         <div className="text-center">
            <ul className="text-center">
               {listaPessoas.map((item) => (
                  <li className="p-1" key={item.id}>
                     {item.nome} --- {item.profissao}
                  </li>
               ))}
            </ul>
         </div>
         <div className="text-center">
            <ul className="text-center">
               {trabalho.map((item) => (
                  <li className="p-1" key={item.id}>
                     {item.nome} --- {item.profissao}
                  </li>
               ))}
            </ul>
         </div>
         <div>
            <ExibirHora />
         </div>
         <div>
            <ExibirNotas nota={2} />
         </div>
         <div className="container">
            <h1 className="text-center text-3xl mt-3 mb-4">Lista de Estudantes</h1>
            <TabelaEstudantes ListaEstudantes={Estudantes} />
         </div>
         <div>
            <Clicando />
            <div>
               <CliqueComProps label="Clique aqui" onClickTeste={click01} />
               <CliqueComProps label="Pode clicar" onClickTeste={click02} />
               <CliqueComProps label="Click here" onClickTeste={click03} />
            </div>
         </div>
         <div>
            <Formulario />
         </div>
         <div>
            <IntroState />
         </div>
         <div>
            <Exibir />
         </div>
         <div>
            <StatesCampos />
         </div>
         <div>
            <ObjetoStates />
         </div>
         <div>
            <ArrayStates />
         </div>
         <div>
            <Galeria />
         </div>
         <div>
            <Quiz />
         </div>
      </div>
   );
}

export default Page;

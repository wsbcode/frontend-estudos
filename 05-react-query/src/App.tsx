import { InitialQuery } from "./components/InitialQuery";

const App = () => {
   return (
      <div className=" h-full w-scream flex flex-col  items-center  bg-blue-500 gap-4 ">
         <h1 className="text-4xl text-orange-400">Aulas React-query / Tanstack-query</h1>
         <div>
            <InitialQuery />
         </div>
      </div>
   );
};

export default App;

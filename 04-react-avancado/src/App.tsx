import { CleanupEffect } from "./components/CleanupEffect";
import { EffectorBase } from "./components/EffectorBase";
import { Header } from "./components/Header";
import { Reducer } from "./components/Reducer";
import { VideoEffect } from "./components/VideoEffect";
import { CountProvider } from "./context/CountContext";
import { Header01 } from "./components/Header01";
import { LoggedUserProvider } from "./context/LoggedUser";
import { RequisicaoApi } from "./components/RequisicaoApi";
import { ReqApiAsync } from "./components/ReqApiAsync";
import { FetchPostApi } from "./components/FetchPostApi";
import { UploadViaFetch } from "./components/UploadViaFetch";
import { ApiAxiosGet } from "./components/ApiAxiosGet";
import { ApiAxiosPost } from "./components/ApiAxiosPost";
import { ApiAxiosInstance } from "./components/ApiAxiosInstace";
import { FormDataAxios } from "./components/FormDataAxios";

function App() {
   // states para poder atualizar o Context
   return (
      <div className=" w-full h-full bg-gray-800 flex flex-col items-center justify-center gap-4">
         <div>
            <h1 className="text-green-500 text-5xl"> Aulas Effects</h1>
         </div>
         <div>
            <EffectorBase />
         </div>
         <div>
            <VideoEffect />
         </div>
         <div>
            <CleanupEffect />
         </div>
         <div>
            <Reducer />
         </div>
         <div>
            <CountProvider>
               <Header />
            </CountProvider>
         </div>
         <div>
            <LoggedUserProvider>
               <Header01 />
            </LoggedUserProvider>
         </div>
         <div>
            <RequisicaoApi />
         </div>
         <div>
            <ReqApiAsync />
         </div>
         <div>
            <FetchPostApi />
         </div>
         <div>
            <UploadViaFetch />
         </div>
         <div>
            <ApiAxiosGet />
         </div>
         <div>
            <ApiAxiosPost />
         </div>
         <div>
            <ApiAxiosInstance />
         </div>
         <div>
            <FormDataAxios />
         </div>
      </div>
   );
}

export default App;

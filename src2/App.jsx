import { BrowserRouter,Route,Routes } from "react-router-dom"
import Bcrud from "./bankCrud/Bcrud"
import Addbankacc from "./bankCrud/Addbankacc"
import FetchBankAcc from "./bankCrud/FetchBankAcc"
import Updatea from "./bankCrud/Updatea"
const App=()=>{
    return(
        <BrowserRouter>
          <Bcrud/>
           <Routes>
             <Route element={<Addbankacc/>} path="/Addbankacc"/>
             <Route element={<FetchBankAcc/>} path="/FetchBankAcc"/>
             <Route element={<Updatea/>} path="/Updatea/:abc"/>
           </Routes>
        </BrowserRouter>
    )
}

export default App
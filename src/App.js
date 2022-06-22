import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import {Route,Routes} from "react-router-dom";
import DashRouter from './Dashboard/DashRouter';
import HomeRouter from './HomeRouter';
import VendorDashboard from "./Dashboard/VendorDashboard"


export default function App() {
   return(
     <div>
       
      <Routes>
        <Route exact path='/*' element={<HomeRouter/>}/>
        <Route path="/dashboard/*" element={<DashRouter/>} />
        <Route path="/vendor/dashboard" element={<VendorDashboard/>} />
      </Routes>
     </div>
   )
}

import './Components/css/App.css';
import Home from "./Components/Home"
import {Route,Routes} from "react-router-dom";
import NavBar from './Components/NavBar';
import Footer from "./Components/Footer";
import Events from "./Components/Events";
import Orders from "./Components/Orders";
import Feedback from './Components/Feedback';
import Plumber from "./Components/Plumber";
import Wireman from './Components/Wireman';
import Carpenter from './Components/Carpenter';
import Groscery from "./Components/Groscery";
import Rent from "./Components/Rent";
import BookServices from "./Components/BookServices";
import Electrician from './Components/Electrician';

const DashRouter = ()=>{
    return(<div>
    <NavBar />
    <Routes>
        <Route exact path="/" element={<Home/>} ></Route>
        <Route exact path="/events" element={<Events/>} />
        <Route  path="/orders" element={<Orders/>} />
        <Route  path="/feedback" element={<Feedback/>} />
        <Route  path="/plumber" element={<Plumber/>} />
        <Route  path="/electrician" element={<Electrician/>} />
        {/* <Route  path="/carpenter" element={<Carpenter/>} /> */}
        {/* <Route  path="/groscery" element={<Groscery/>} /> */}
        <Route path="/rent" element={<Rent/>} />
        <Route path={"/bookservices"} element={<BookServices/>} />
    </Routes>
    <Footer />
     
   </div>)
}

export default DashRouter
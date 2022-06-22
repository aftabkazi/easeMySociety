
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Login from "./Components/Login"
import Sign from "./Components/Sign"
import Profile from "./Components/Profile"
import ForgotPassword from "./Components/ForgotPassword"
import {Routes, Route} from "react-router-dom"
import Navbar from "./Components/NavBar"
import Footer from "./Components/Footer"
import Profsignup from "./Components/Profsignup"
import VendorLogin from "./Components/VendorLogin"


const HomeRouter = () => {
    return (<div>

        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route exact path="/Login" element={<Login />} />
            <Route path="/Signin" element={<Sign />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/vendorLogin" element={<VendorLogin />} />
            <Route path="/vendorSignup" element={<Profsignup />} />
            <Route path="*" element={<Home />} />
        </Routes>
        <Footer />

    </div>)
}

export default HomeRouter
import Form from './Form';
// import About from './About';
// import Contact from './Contact'; 
import {Link} from "react-router-dom";
// import ImageGallery from './ImageGallery';


  const Navbar=()=>{
  return(
    
    <div >
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">My-Socity</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>  
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link to="/"><a className="nav-link active" aria-current="page">Home</a></Link>
            </li>
            <li className="nav-item">
            <Link to="/About"><a className="nav-link">About</a></Link>
            </li>
            <li className="nav-item">
            <Link to="/Contact"><a className="nav-link">Contact</a> </Link>
            </li>
          </ul>
          <Form />
        </div>
      </div>
    </nav>
  </div>
  )
  }
  export default Navbar;
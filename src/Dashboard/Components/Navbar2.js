import './css/App.css';

import {Route,Switch,Link} from "react-router-dom";



  const Navbar2=()=>{
  return(
    
    <div>
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Welcome !!</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
            <Link to="/"><a className="nav-link active" aria-current="page">Register As Professional</a></Link>
            </li> */}
            {/* <li className="nav-item">
            <Link to="/About"><a className="nav-link">My Booking</a></Link>
            </li> */}
            {/* <li className="nav-item">
            <Link to="/Contact"><a className="nav-link">Help</a> </Link>
            </li> */}
          </ul>
          {/* <div>
            <div className="mx-2">
                <img   src="avatar.png" className="log_prof"/>
                <button className="btn btn-danger">LogOut</button>
               
            </div>
        </div> */}
    )
         
        </div>
      </div>
    </nav>
    {/* <ImageGallery />  */}
    {/* <Switch>
        <Route  excat path="/home" component={Navbar} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch> */}

  </div>
  )
  }
  export default Navbar2;
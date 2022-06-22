import Login from './Login';
import {Route,Switch,Link} from "react-router-dom";
import Profile from './Profile';
import './Form.css';

const Form=()=>{
    let isLOgin=false;
    return(
        <div>
            <div class="mx-2">
                <Link className='login' to="/login"><a  className="btn btn-danger">LogIn</a></Link>
                <Link to="/Signin"><a className="btn btn-danger">SignIn</a></Link>
            </div>
        </div>
    )
}
export default Form;
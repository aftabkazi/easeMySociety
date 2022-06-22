// import email from "./image/email.jpg";
// import pass from "./image/pass.png"
// import addvertise from "./image/advertise.jpeg"
// import login_image from 'E:/C-DAC study/ReactJs/my-first-app/public/Images/login'
import "./Login.css";
// import {useEffect} from "react";
import axios from 'axios';
import base_url from "../Api/bootapi";
import {useNavigate} from "react-router-dom"
import { useState } from "react";
const Login=()=>{

  // useEffect=(()=>{
  //   document.title="Login page";
  //   // calling server
  //   Getlogin();
  // },[]);

  /// function to call server
// const Getlogin=()=>{
//   axios.get(`${base_url}\login`).then(
//     (response)=>{
//       // this is for  success

//     },
//     (error)=>{
//       //this is for error
//     }
//   )
// }

const navigate = useNavigate()

const [loginDetails, setLoginDetails] = useState({});

const submitHandler = (events)=>{
  events.preventDefault();
  // console.log(loginDetails)
  axios.get(`http://localhost:9090/users/username/${loginDetails.username}`).then((res)=>{
    console.log(res.data)
    if(res.data.username === loginDetails.username && res.data.password === loginDetails.password){
      localStorage.setItem("username", loginDetails.username)
      localStorage.setItem("phone", res.data.phone)
      localStorage.setItem("address", res.data.address)
      navigate("/dashboard")
    }
    else{
      alert("Wrong Credentials")
    }
  }).catch(()=>{
    alert("Error")
  })

}

const ChangeHandler = (events)=>{
  setLoginDetails({...loginDetails, [events.target.name] : events.target.value})
}
  

  return (
    <>
      <div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
              <div className="container-image">
                <img
                  src="./Images/login_new.jpg"
                  alt="profile"
                  className="profile"
                />
              </div>
            </div>
            <form onSubmit={submitHandler}>
              <div>
                <h1>Login</h1>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    className="name input_in_login"
                    name="username"
                    onChange={ChangeHandler}
                  />
                </div>
                <div className="second-input">
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    className="name input_in_login"
                    name="password"
                    onChange={ChangeHandler}
                  />
                </div>
                <div className="login-button">
                  <button type="submit">Login</button>
                </div>

                <p className="link">
                  <a href="Forgotpassword">Forgot Password ?</a>
                  <br></br> <a href="/vendorLogin">Login as professional</a>Or
                  <a href="/vendorSignup">SignIn as professional</a>
                  <br />
                  <br />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;

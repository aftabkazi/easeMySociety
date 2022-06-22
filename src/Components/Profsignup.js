
// import './App.css';
import { React, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Profsignin.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Profsignup() {

    const navigate = useNavigate()

    const [registerDetails, setRegisterDetails] = useState({});

    const changeHandler = (events)=>{
        setRegisterDetails({...registerDetails, [events.target.name]:events.target.value})
    }

    const submitHandler = (events)=>{
        events.preventDefault();
        console.log(registerDetails);
        axios.post(`http://localhost:9090/vendors`, registerDetails).then((res)=>{
            if(res.data.status){
                navigate("/VendorLogin")
            }
            // else{
            //     alert("Registration Failed! Username!")
            // }
        }).catch(()=>{
            alert("Registration Failed! Username Already Exists!")
        })
    }

    return (
        <>
        <div className='profmaindiv'>
        <div>
            <h2 id="profheading">Create Your Professional Account</h2>
        </div>
            <form onSubmit={submitHandler} className='profform1'>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label1 for="inputEmail4" >Username</label1>
                        <input name='username' onChange={changeHandler} type="text" class="form-control" id="inputEmail4" placeholder="OwnmerName" />
                    </div><br/>
                    <div class="form-group col-md-6">
                        <label1 for="inputEmail4">Email</label1>
                        <input name='email' onChange={changeHandler} type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                    </div><br/>
                    <div class="form-group col-md-2">
                        <label1 for="inputMob">Mobile</label1>
                        <input name='mobile' onChange={changeHandler} type="tel" class="form-control" placeholder='Mobile Number' id="inputZip" style={{ width: 670 }} />
                    </div><br/>
                    <div class="form-group col-md-6">
                        <label1 for="inputPassword4">Password</label1>
                        <input name='password' onChange={changeHandler} type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                    </div><br/>
                </div>
                <div class="form-group">
                    <label1 for="inputAddress">Shop Address</label1>
                    <input name='address' onChange={changeHandler} type="text" class="form-control addinput" id="inputAddress" placeholder="Shopno, Building Name, Lane No, City" style={{ width: 670 }} />
                </div><br/>
                <div class="form-row">
                    {/* <div class="form-group col-md-6">
                        <label1 for="inputCity">City</label1>
                        <input placeholder='City Name' type="text" class="form-control" id="inputCity" />
                    </div><br/> */}
                    <div class="form-group col-md-4">
                        <label1 for="inputState">Occupation</label1>
                        <select name='occupation' onChange={changeHandler} id="inputState" class="form-control">
                            {/* <option selected></option> */}
                            <option value="null">Select Occupation</option>
                            <option value="electrician">Electrician</option>
                            <option value="plumber">Plumber</option>
                            {/* <option>CarPenter</option>
                            <option>PestControl</option>
                            <option>Packers&Movers</option>
                            <option>Transport Service</option>
                            <option>HouseKeeping/Maid Service</option>
                            <option>GroceryShop</option> */}
                        </select>
                    </div><br/>
                </div>

                {/* <form>
                    <div class="form-group">
                        <label1 for="exampleFormControlFile1">Upload Aadhar pdf :</label1>
                        <input aria-required type="file" class="form-control-file" id="exampleFormControlFile1" />
                    </div>
                </form><br/> */}
                {/* <div class="form-group">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                        <label1 class="form-check-label" for="gridCheck">
                            * Accept Terms and Conditions
                        </label1>
                    </div>
                </div><br/><br /> */}
                <button type="submit" className="btn btn-primary profsigninbtn">Sign in</button>
            </form>
            </div>




        </>

    );
}

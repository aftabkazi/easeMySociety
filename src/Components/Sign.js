// import "D:/CDAC Hyderabad/Aftab Kazi/React/node_modules/bootstrap/dist/css";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"


import "./Signin.css";
import React, { useState,useEffect } from "react";
import axios from "axios";
// import base_url from "../Api/bootapi";
import base_url from "../Api/bootapi";

function Signin() {
 
  // useEffect(()=>{
  //   document.title="SignUp page";

  // },[]);

const [Details,setDetails]=useState({});


// Form handler
const submitHandler=(e)=>{
  e.preventDefault();
  console.log(Details);
  postDateToServer();
}
// creating function to post data on server
const postDateToServer=()=>{
  axios.post(`${base_url}/users`,Details).then(
    (response)=>{
      console.log(response);
      console.log("success");
      alert("success")
    },(error)=>{
      console.log(error);
      console.log("Error");
      alert("failed")
    }
  )
}

  return (
    <div className="mainDiv">
      <form className="contactForm" onSubmit={submitHandler}>
        <label>Username </label>
        <input
          type="text"   
          name="username" placeholder="Enter Name" 
          required   
          onChange={(e)=>{
            setDetails({...Details,username:e.target.value})
          }}
        />
        <br />
        <br />
        <label>Phone</label>
        <input
          type="tel" 
          name="phone" 
          // pattern="[0-9]{4}-[0-9]{2}-[0-9]{4}"
          placeholder="XXXX-XX-XXXX" id="phone"
          onChange={(e)=>{
            setDetails({...Details,phone:e.target.value});
          }}
        />
        <br />
        <br />
        <label>Email</label>
        <input
          type="email" 
          name="email"
          placeholder="Enter Email" 
          required id="email"
          onChange={(e)=>{
            setDetails({...Details,email:e.target.value});
          }}
        />
        <br />
        <br />
        <label>Address</label>
        <input
          type="text" 
          name="address"
          placeholder="Flat number " 
          required 
          onChange={(e)=>{
            setDetails({...Details,address:e.target.value});
          }}
        />
        <br />
        <br />
        <label>Password</label>
        <input
          type="password" 
          name="password"
          placeholder="password"   
          required id="password"
          onChange={(e)=>{
            setDetails({...Details,password:e.target.value});
          }}
        />
        <br />
        <br />
        <br />
        <br />
        <input id="submitbutton" type="Submit" value="Submit"  />
      </form>
      {/* <div className="ssuper">
        <div className="smain">
          <form onSubmit={submitHandler}>
            <Col md={4}>
              <div >
                <Label for="name">
                  <h5> Name</h5>
                </Label>
                <input id="name" name="name" placeholder="Full name" onChange={changeHandler}/>
              </div>
              <div>
                <Label for="exampleDate">
                  <h5> Date Of Birth</h5>
                </Label>
                <input
                  id="exampleDate"
                  name="date"
                  placeholder="date "
                  type="date"
                  onChange={changeHandler}
                />
              </div>
            </Col>
          </form>
          <div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Female
              </label>
            </div>
          </div>

          <div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Other
              </label>
            </div>
          </div>

          <Form>
            <Col md={4}>
              <div>
                <Label for="exampleAddress">
                  <h5> Address</h5>
                </Label>
                <input
                  id="exampleAddress"
                  name="address"
                  placeholder="society name,lane no"
                  onChange={changeHandler}
                />
              </div>
            </Col>

            <Col md={4}>
              <div>
                <Label for="exampleAddress2">
                  <h5> Permanent Address</h5>
                </Label>
                <input
                  id="exampleAddress2"
                  name="address2"
                  placeholder="society name,lane no"
                />
              </div>
            </Col>
            <Row form>
              <Col md={4}>
                <div>
                  <Label for="exampleCity">
                    <h5>City</h5>
                  </Label>
                  <input
                    id="exampleCity"
                    name="city"
                    placeholder="Enter City"
                  />
                </div>
              </Col>
              <Col md={4}>
                <div>
                  <Label for="exampleState">
                    <h5>State</h5>
                  </Label>
                  <input
                    id="exampleState"
                    name="state"
                    placeholder="Enter State"
                  />
                </div>
              </Col>
            </Row>
          </Form>
        </div>

        <div className="rightsidesign">
          <Form>
            <Row form>
              <Col md={3}>
                <div>
                  <Label for="exampleZip">
                    <h5> Pin Code</h5>
                  </Label>
                  <input id="exampleZip" name="zip" />
                </div>
                <div>
                  <Label for="exampleZip">
                    <h5> Flat Number</h5>
                  </Label>
                  <input
                    id="exampleZip"
                    name="Flat Number"
                    placeholder="Enter Flat Number"
                  />
                </div>
              </Col>

              <Col md={4}>
                <div>
                  <Label for="exampleEmail">
                    <h5>Email</h5>
                  </Label>
                  <input
                    id="exampleEmail"
                    name="email"
                    placeholder="Enter Email  "
                    type="email"
                    onChange={changeHandler}
                  />
                </div>

                <div>
                  <Label for="exampleEmail">
                    <h5>Mobile Number</h5>
                  </Label>
                  <input
                    id="exampleEmail"
                    name="mnumber"
                    placeholder="Mobile Number"
                    onChange={changeHandler}
                  />
                </div>
              </Col>
              <Col md={4}>
                <div>
                  <Label for="examplePassword">
                    <h5>Password</h5>
                  </Label>
                  <input
                    id="examplePassword"
                    name="password"
                    placeholder="password(at least 5 letters 1 capital,1special character)"
                    type="password"
                    onChange={changeHandler}
                  />
                </div>

                <div>
                  <Label for="examplePassword">
                    <h5>ReEnter Password</h5>
                  </Label>
                  <input
                    id="examplePassword"
                    name="password"
                    type="password"
                  />
                </div>
              </Col>
            </Row>

            <div check>
              <input id="exampleCheck" name="check" type="checkbox" />

              <Label check for="exampleCheck">
                <h5>Accept Terms & Conditions</h5>
              </Label>
            </div>
            <button type="submit">Sign in</button>
          </Form>
        </div>

        <a href="/" className="slogin btn">
          {" "}
          Login
        </a>
      </div> */}
    </div>
  );
}

export default Signin;

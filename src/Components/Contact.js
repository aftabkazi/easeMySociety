import { useState } from 'react';
import './Contact.css'

const Contact=()=>{
    const[value,setvalue]=useState("");

    const clickHandler=()=>{
        alert("form Submitted sucessfully We will contact you soon");
    }
    return(
        <div className='mainDiv'>
            <form className='contactForm' onSubmit={clickHandler}>
                <label>First Name </label>
                <input type="text" name="firstName" placeholder="Enter first name" required/>
                <br /><br />
                <label>Last Name </label>
                <input type="text" name="lastName" placeholder="Enter last name" required/>
                <br /><br />
                <label>Email</label>
                <input type="email" name="email" placeholder="Enter Email" required/>
                <br /><br />
                <label>Phone</label>
                <input type="tel" id="phone" name="phone" pattern="[0-9]{4}-[0-9]{2}-[0-9]{4}" placeholder="XXXX-XX-XXXX" />
                <br/><br/>
                <label>Message</label>
                <textarea />
                <br /><br/>
                <input id="submitbutton"  type="Submit" value="Submit"/>

            </form>
        </div>
    )
}
export default Contact;
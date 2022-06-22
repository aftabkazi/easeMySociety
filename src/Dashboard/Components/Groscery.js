import './css/Groscery.css';
import { React } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
// import {Groceryimages} from './Groceryimages';
// import shopbgimg from './shopimg.jpg';

function Groscery() {
    return (
        <>
          
            <img src="shopbgimg.jpeg" alt='Not found' className='backgroundImg' ></img>
            <div className='grosout'>
            
               <span><h1 id='grosheader'>Paradise Grocery and Daily Needs</h1></span><br />
               <span> <h3 clasName='headerlable' style={{backgroundColor:'aqua',width:500,borderRadius:30,position:'relative',left:430}}>Make Your GroceryItems List Below</h3> </span>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary rateListbtn " type="button" style={{width:200, position:'relative',left:230}}>Click for check RateList</button>
                </div>
                <div className='inputForm'>
                    <div >
                        <form className='cusDetails'>
                        <p>
                            <label className='custdetail cusNameLable'  >Name:</label>
                            <input type="text" className='customerName cusName' placeholder='Enter Your Name Here' style={{width:270,position:'relative'}}></input><br />
                            </p>
                            <p>
                            <label className='custdetail cusMobLable'>Contact Number:</label>
                            <input type="tel" className='customerMobile cusMobNo' placeholder='Enter Your Contact Number' style={{width:270 }}></input><br />
                            </p>
                            <p>
                            <label className='custdetail cusFlatLable'>Flat Number:</label>
                            <input type="text" className='customerFlat cusFlatNo' placeholder='Enter Your Flat No' style={{width:270 }}></input><br />
                            </p>

                        </form>
                    </div>
                </div>
                <br />
                <textarea placeholder='Make Your List Here' className='txtarea'></textarea><br />

                <button type='radio' className='grosSubbtn'>SUBMIT</button>
                
            </div>

        </>

    );
}

export default Groscery;
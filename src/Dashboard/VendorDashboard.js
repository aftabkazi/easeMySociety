
import { React, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './VendorDashboard.css';
import axios from 'axios';

export default function VendorDashboard() {

    const [orders, setOrders] = useState([])

    const fetchOrders = () => {
        console.log(`http://localhost:9090/orders/vendorname/${localStorage.getItem("vendorname")}`)
        axios.get(`http://localhost:9090/orders/vendorname/${localStorage.getItem("vendorname")}`).then(res => {
            setOrders(res.data)
            if (orders.length === 0) {
                console.log("Empty")
            }
        })
    }

    useEffect(fetchOrders, [])

    const acceptHandler = (order) => {
        console.log(order);
        order.status = "Accepted";
        axios.put(`http://localhost:9090/orders`, order).then(res => {
            if (res.data.status) {
                alert("You have accepted the request")
                fetchOrders();
            }
        }).catch(() => {
            alert("Server Error")
        })
    }

    const rejectHandler = (order) => {
        order.status = "Rejected";
        axios.put(`http://localhost:9090/orders`, order).then(res => {
            if (res.data.status) {
                alert("You have rejected the request")
                fetchOrders();
            }
        }).catch(() => {
            alert("Server Error")
        })
    }

    return (
        <>
            <h1 className='sspHeader'>Appointment List</h1>
            {
                orders.length === 0 && <h2>No Apointments Yet</h2>
            }
            <div className="rectangle">
                { orders.length !== 0 &&  <table className="table table table-dark table-striped ssptable">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Username</th>
                            <th scope="col">Mobile</th>
                            {/* <th scope="col">Email</th> */}
                            <th scope="col">Address</th>
                            <th scope="col">Accept</th>
                            <th scope="col">Reject</th>
                            {/* <th scope="col">Note/Reply</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(item => {
                                return <tr>
                                    <th scope="row">{item.id}</th>
                                    <td >{item.username}</td>
                                    <td>{item.mobile}</td>
                                    {/* <td>{item.email}</td> */}
                                    <td>{item.address}</td>
                                    {item.status !== "Requested" ? <td>{item.status === "Accepted" ? "Already Accpted" : "Already Rejected"}</td> : <td><button type="button" onClick={() => { acceptHandler(item) }} className="btn btn-success">Accept</button></td>}
                                    {item.status !== "Requested" ? <td>{item.status === "Accepted" ? "Already Accpted" : "Already Rejected"}</td> : <td>   <button type="button" onClick={() => { rejectHandler(item) }} className="btn btn-danger">Reject</button></td>}
                                    {/* <td><input type="text" placeholder='Reply Here'></input><button type="button" className="btn btn-primary sspbtnSubmit">Submit</button> </td> */}
                                </tr>
                            })
                        }
                    </tbody>
                </table>}

            </div>
        </>
    )
}
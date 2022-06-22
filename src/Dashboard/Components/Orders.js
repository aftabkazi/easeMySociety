import axios from "axios";
import { useEffect, useState } from "react";


const Orders = () => {

    const [orders, setOrders] = useState([])

    const fetchOrders = () => {
        axios.get(`http://localhost:9090/orders/username/${localStorage.getItem("username")}`).then(res => {
            // console.log(res)
            setOrders(res.data)
        })
    }

    useEffect(fetchOrders, [])

    return (
        <div>
            <h1>Orders</h1>
            {
                    orders.length === 0 && <h2>You have not placed any Orders Yet</h2>
                }
            <div className="rectangle">
                { orders.length !== 0 && <table className="table table table-dark table-striped ssptable">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Vendorname</th>
                            <th scope="col">Mobile</th>
                            {/* <th scope="col">Email</th> */}
                            <th scope="col">Occupation</th>
                            <th scope="col">Address</th>
                            <th scope="col">Status</th>
                            {/* <th scope="col">Note/Reply</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(item => {
                                return <tr>
                                    <th scope="row">{item.id}</th>
                                    <td >{item.vendorname}</td>
                                    <td>{item.vendorMobile}</td>
                                    {/* <td>{item.email}</td> */}
                                    <td>{item.vendorOccupation}</td>
                                    <td>{item.vendorAddress}</td>
                                    <td>{item.status}</td>
                                    {/* {item.status!=="Requested" ? <td>{item.status==="Accepted" ? "Already Accpted" : "Already Rejected"}</td> : <td><button type="button" onClick={()=>{acceptHandler(item)}} className="btn btn-success">Accept</button></td>}
                                {item.status!=="Requested" ? <td>{item.status==="Accepted" ? "Already Accpted" : "Already Rejected"}</td> : <td>   <button type="button" onClick={()=>{rejectHandler(item)}} className="btn btn-danger">Reject</button></td>} */}
                                    {/* <td><input type="text" placeholder='Reply Here'></input><button type="button" className="btn btn-primary sspbtnSubmit">Submit</button> </td> */}
                                </tr>
                            })
                        }
                    </tbody>
                </table>}
               
            </div>
        </div>
    )
}
export default Orders;
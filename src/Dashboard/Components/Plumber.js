import axios from "axios";
import { useEffect, useState } from "react";
import "./css/Services.css"

const Plumber = () => {

    const [count, setCount] = useState(0)

    const fetchPlumber = () => {
        axios.get(`http://localhost:9090/vendors`).then((res) => {
            // console.log(res.data)
            setPlumbers(res.data);
            res.data.map(item => {
                if (item.occupation === "plumber") {
                    setCount(count + 1)
                }
            })
        })
    }

    useEffect(fetchPlumber, []);

    const [plumbers, setPlumbers] = useState([])

    const clickHandler = (vendor) => {
        // axios.get(`http://localhost:9090/vendors/vendorname/${username}`).then(vendor => {
            
        // })

        axios.post(`http://localhost:9090/orders`, {
                username: localStorage.getItem("username"),
                mobile: localStorage.getItem("phone"),
                address: localStorage.getItem("address"),
                vendorname: vendor.username,
                vendorMobile:vendor.mobile,
                vendorOccupation:vendor.occupation,
                vendorAddress:vendor.address
            }).then(res => {
                if (res.data.status) {
                    alert("Requested to The Plumber")
                }
            }).catch(() => {
                alert("Failed to send the request")
            })

    }

    return (

        <div>
            <center>
                <table className="bookService">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Username</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Booking Requiest</th>
                        </tr>

                        {
                            plumbers.map(item => {
                                return item.occupation == "plumber" && <tr>
                                    <td>{item.id}</td>
                                    <td>{item.username}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.email}</td>
                                    <td>{item.address}</td>
                                    <td><button onClick={() => { clickHandler(item) }}>Request</button></td>
                                </tr>
                            })
                        }

                        {
                            <h2>{count === 0 ? "No Plumbers Availble" : ""}</h2>
                        }

                    </tbody>
                </table>
            </center>

            <br />

            <div>

                <table border="2px" >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: "\ntable, th, td {\n  border:1px solid black;\n}\n"
                        }}
                    />
                </table>

            </div>


        </div>



    )

}
export default Plumber;
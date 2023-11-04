import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';

const UserDetails = () => {

    const {userId} =useParams();

    const [usercart,setUserCart] = useState([]);
    const [user,setUser] = useState("");

    console.log(usercart);

    const getUserDetails =()=>{
        axios.get(`http://localhost:7000/login/${userId}`)
        .then((res)=>{
            setUser(res.data);
        }).catch((err)=>{
            console.log(err);
            return false;
        })
    }
    
    const getUserCartdetails =()=>{
        axios.get(`http://localhost:7000/Cart?userId=${userId}`)
        .then((res)=>{
            setUserCart(res.data);
        }).catch((err)=>{
            console.log(err);
            return false;
        })
    }
    useEffect(()=>{
       getUserCartdetails();
       getUserDetails();

    })

    return (
        <main className='main p-5' id="main">
        
        <center>
        <h3>User Cart Details</h3>
            <div className='container'>
            <h5 className='p-1 text-start'>User Name : {user.name}</h5>
            <h5 className='p-1 text-start'>User Email : {user.email}</h5>

                <div className='row'>
                    <table class="table table-striped mt-5 text-center">
                        <thead style={{ textAlign: 'center', backgroundColor: 'black' }} className='p-4 text-light'>
                            <th className='h6 p-2'>Id</th>
                            <th className='h6 p-2'>Image</th>
                            <th className='h6 p-2'>Brand</th>
                            <th className='h6 p-2'>Name</th>
                            <th className='h6 p-2'>Qty</th>
                            <th className='h6 p-2'>Price</th>
                        </thead>
                        <tbody>
                             {
                                usercart.map((v)=>{
                                    return(
                                        <tr key={v.id}>
                                            <td width="10%">{v.id}</td>
                                            <td width="20%"><img src={v.image} className="rounded-start w-100" alt="..." />
                                            </td>
                                            <td width="20%">{v.brand}</td>
                                            <td width="20%">{v.name}</td>
                                            <td width="10%">{v.qty}</td>
                                            <td width="20%">{v.price}</td>
                                        </tr>
                                    )
                                })
                             }
                        </tbody>
                    </table>
                
                </div>
            </div>
        </center>
        </main>
    )
}

export default UserDetails

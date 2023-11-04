import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios';
const Users = () => {
   
    const [user,setUser]= useState([]);
    console.log(user);

    useEffect(()=>{
        axios.get(`http://localhost:7000/login?role=user`)
        .then((res)=>{
            setUser(res.data)
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
            return false;
        })
    })

    return (
        <main className='main p-5' id="main">

        <h3 className='text-center'>View User Details</h3>
            <div>
                <table class="table table-striped">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">Id</th>
                            <th scope="col">User Name</th>
                            <th scope="col">User Email</th>
                            <th scope="col">User Password</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((v)=>{
                                return(
                                    <tr className='text-center'>
                                        <td>{v.id}</td>
                                        <td>{v.name}</td>
                                        <td>{v.email}</td>
                                        <td>{v.password}</td>
                                        <td>
                                        <Link to={`/admin/userdetails/${v.id}`}>
                                        <button type='button' className='btn mt-2 text-light' style={{ backgroundColor: 'black' }} >View More</button>
                                      </Link>   
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default Users

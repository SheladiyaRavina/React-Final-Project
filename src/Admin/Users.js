import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios';
const Users = () => {

    const [user, setUser] = useState([]);
    console.log(user);

    useEffect(() => {
        axios.get(`http://localhost:7000/login?role=user`)
            .then((res) => {
                setUser(res.data)
                console.log(res.data);
            }).catch((err) => {
                console.log(err);
                return false;
            })
    })

    return (
        <main className='main p-5' id="main">
            <div className="pagetitle">
                <h1 className='text-center mb-3'>View User Details</h1>
            </div>{/* End Page Title */}

            <div>
                <table class="table table-striped" border={1}>
                    <thead>
                        <tr className='text-center'>
                            <th scope="col" className='color' style={{ color: '#012970' }}>Id</th>
                            <th scope="col" className='color' style={{ color: '#012970' }}>User Name</th>
                            <th scope="col" className='color' style={{ color: '#012970' }}>User Email</th>
                            <th scope="col" className='color' style={{ color: '#012970' }}>User Password</th>
                            <th scope="col" className='color' style={{ color: '#012970' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((v) => {
                                return (
                                    <tr className='text-center'>
                                        <td>{v.id}</td>
                                        <td>{v.name}</td>
                                        <td>{v.email}</td>
                                        <td>{v.password}</td>
                                        <td>
                                            <Link to={`/admin/userdetails/${v.id}`}>
                                                <button type='button' className='btn mt-2 text-light' style={{ backgroundColor: '#012970' }} >View More</button>
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

import React, { useEffect, useState } from 'react'
import UserAuth from './UserAuth';
import axios from 'axios';
const UserProfile = () => {
  const [profile, setProfile] = useState([])
  const [cart, setCart] = useState([]);

  const cartdata = () => {
    axios.get(`http://localhost:7000/Cart?userId=${UserAuth().id}`)
      .then((res) => {
        setCart(res.data)
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }

  const productDelete = (id) => {
    axios.delete(`http://localhost:7000/Cart/${id}`).then((res) => {
      alert("record successfully delete..");
      cartdata();
    }).catch((err) => {
      console.log(err);
      return false;
    })
  }

  useEffect(() => {
    setProfile(JSON.parse(localStorage.getItem('checkUserLogin')))
    cartdata()
  }, [])
  return (
    
            <center>
                <div className="pagetitle">
                    <h1 className='text-center mb-3 mt-5'>User profile</h1>
                </div>{/* End Page Title */}
                <div className='container'>
                    <h5 className='p-1' >User Name : {profile.name}</h5>
                    <h5 className='p-1'>User Email : {profile.email}</h5>

                    <div className='row'>
                        <table class="table table-striped mt-5 text-center" border={1}>
                            <thead style={{ textAlign: 'center',fontSize:'20px',color:'#012970'}} className='p-4'>
                                <th className=' p-2 '>Id</th>
                                <th className=' p-2'>Image</th>
                                <th className=' p-2'>Brand</th>
                                <th className=' p-2'>Name</th>
                                <th className=' p-2'>Qty</th>
                                <th className=' p-2'>Price</th>
                            </thead>
                            <tbody>
                                {
                                    cart.map((v) => {
                                        return (
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
      

  )
}
export default UserProfile;
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';

const AdminViewproduct = () => {
    const [product, setProduct] = useState([]);
    console.log(product);

    const [marketstatus, setMarketStatus] = useState(["trending", "latest", "upcomming", "best"])
    const [status, setStatus] = useState(["instock", "outstock"])

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:7000/product/${id}`, {
        }).then((res) => {
            alert("product delete..");
            viewproduct();
        }).catch((err) => {
            console.log(err);
            return false;
        })
    }


    const selectMarketstatus = (id, value) => {
        axios.patch(`http://localhost:7000/product/${id}`, {
            marketstatus: value
        }).then((res) => {
            alert("value updated..");
        }).catch((err) => {
            console.log(err);
            return false;
        })
    }

    const selectStatus = (id, value) => {
        axios.patch(`http://localhost:7000/product/${id}`, {
            status: value
        }).then((res) => {
            alert("value updated..");
        }).catch((err) => {
            console.log(err);
            return false;
        })
    }

    const viewproduct = () => {
        axios.get(`http://localhost:7000/product`, {
        }).then((res) => {
            setProduct(res.data);
        }).catch((err) => {
            console.log(err);
            return false;
        })
    }
    useEffect(() => {
        viewproduct();
    }, [])


    return (
        <main className='main p-5' id="main">
            <div className="pagetitle">
                <h1 className='text-center mb-3'>View All Watches</h1>
            </div>{/* End Page Title */}
            <div>
                <table class="table table-striped" border={1} >
                    <thead>
                        <tr className='text-center'>
                            <th scope="col" className='color' style={{ color: '#012970' }}>Id</th>
                            <th scope="col" className='color' style={{ color: '#012970' }}>Watch Name</th>
                            <th scope="col" className='color' style={{ color: '#012970' }}>Price</th>
                            <th scope="col" className='color' style={{ color: '#012970' }}>Qty</th>
                            <th scope="col" className='color' style={{ color: '#012970' }}>Market status</th>
                            <th scope="col" className='color' style={{ color: '#012970' }}> status</th>
                            <th scope="col" className='color' style={{ color: '#012970' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.map((v) => {
                                return (
                                    <tr key={v.name}>
                                        <td width="5%" className='text-center'>{v.id}</td>
                                        <td width="20%" className='text-center'>{v.name}</td>
                                        <td width="12%" className='text-center'>{v.price}</td>
                                        <td width="5%" className='text-center'>
                                            <input value={v.qty} type='number' className='from-control' />
                                        </td>
                                        <td width="20%">
                                            <select onChange={(e) => selectMarketstatus(v.id, e.target.value)} className='form-control'>
                                                <option value="">select market status</option>
                                                {
                                                    marketstatus.map((val) => {
                                                        return (v.marketstatus === val ? <option selected>{v.marketstatus}</option> : <option>{val}</option>)
                                                    })
                                                }
                                            </select>
                                        </td>
                                        <td width="20%">
                                            <select className='form-control' onChange={(e) => selectStatus(v.id, e.target.value)}>
                                                <option>select status</option>
                                                {
                                                    status.map((val) => {
                                                        return (v.status === val ? <option selected>{v.status}</option> : <option>{val}</option>)
                                                    })
                                                }
                                            </select>
                                        </td>
                                        <td>
                                            <button className="btn btn-outline-danger" onClick={() => deleteProduct(v.id)}><i class="bi bi-trash 3-fill" ></i>&nbsp;&nbsp;Delete</button>


                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <center>
                    <NavLink to={`/admin/product`}>
                        <button className="btn text-light mt-3" type='button' style={{ backgroundColor: '#012970' }}>Add Product</button>
                    </NavLink>
                </center>
            </div>
        </main>
    )
}

export default AdminViewproduct

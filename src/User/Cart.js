import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UserAuth from './UserAuth';
import { NavLink } from 'react-router-dom';

const Cart = () => {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    console.log(cart);

    const deleteData = (id) => {
        axios.delete(`http://localhost:7000/cart/${id}`).then((res) => {
            alert('delete...');
            CartAdd();
        }).catch((err) => {
            console.log(err);
            return false;
        })
    }

    const CartAdd = () => {
        axios.get(`http://localhost:7000/cart?userId=${UserAuth().id}`)
            .then((res) => {
                setCart(res.data)
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }

    const dataChange = (id, qty) => {
        let editdata = cart.map((v) => {
            if (v.id == id) {
                return {
                    ...v,
                    qty: parseInt(qty)
                }
            }
            return v;
        })
        setCart(editdata);

        let updateData = editdata.find((v) => {
            return v.id == id;
        })

        axios.patch(`http://localhost:7000/cart/${updateData.id}`, {
            qty: updateData.qty
        }).then((res) => {
            alert("Cart successfully update");
            CartAdd();
        }).catch((err) => {
            console.log(err);
            return false;
        })
    }

    useEffect(() => {
        CartAdd();
    }, [])

    useEffect(() => {
        let total = 0;
        cart.forEach((v) => {
            total += v.qty * v.price;
        })
        setTotal(total)
    }, [cart]);

    return (
        <center>
            <div className='container'>
                <div className='row'>
                    <table class="table table-striped mt-5">
                        <thead style={{ textAlign: 'center'}} className='p-4 color'>
                            <th className='h6 p-2'>Image</th>
                            <th className='h6 p-2'>Brand</th>
                            <th className='h6 p-2'>Name</th>
                            <th className='h6 p-2'>Qty</th>
                            <th className='h6 p-2'>Price</th>
                            <th className='h6 p-2'>Action</th>
                        </thead>
                        <tbody>
                            {
                                cart.map((v) => {
                                    return (
                                        <tr style={{ textAlign: 'center' }}>
                                            <td width="20%"><img src={v.image} width={150}></img></td>
                                            <td width="15%">{v.brand}</td>
                                            <td width="15%">{v.name}</td>
                                            <td width="15%"><input value={v.qty} onChange={(e) => dataChange(v.id, e.target.value)}
                                                type='number' /></td>
                                            <td width="15%">{v.qty * v.price}</td>
                                            <td width="20%">
                                            <button className="btn btn-outline-danger" onClick={()=>deleteData(v.id)}><i class="bi bi-trash 3-fill" ></i>&nbsp;&nbsp;Delete</button>

                                                &nbsp;&nbsp;
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                       
                            <tr className='text-center'>
                                <th colspan="4" className='ps-5 text-end'>Total:-</th>
                                <th style={{paddingLeft:'10px'}}>{total}</th>
                            </tr>

                    </table>
                    <NavLink to="/user/product"><button className='btn mt-3'>Continue Shopping</button></NavLink>
                    </div>
            </div>
        </center>
    )
}

export default Cart

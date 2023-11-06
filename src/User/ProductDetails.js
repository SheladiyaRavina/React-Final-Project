import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import checkUserLogin from './UserAuth';

const ProductDetails = () => {

    const navigate = useNavigate();
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    const getSingleRecord = async () => {
        try {
            let single = await axios.get(`http://localhost:7000/product/${productId}`);
            if (single) {
                setProduct(single.data)
            } else {
                console.log("record not fetch...");
                return false;
            }

        } catch (err) {
            console.log(err);
            return false;
        }
    }

    const AddtoCart = (productId) => {
        if (!checkUserLogin()) {
            alert("Please Login....");
            navigate('/user/login');
        }
        axios.get(`http://localhost:7000/product/${productId}`)
            .then((res) => {
                axios.post(`http://localhost:7000/Cart`, {
                    name: res.data.name,
                    price: res.data.price,
                    qty: res.data.qty,
                    image: res.data.image,
                    brand: res.data.brand,
                    userId: checkUserLogin().id,
                }).then((res) => {
                    alert("product successfully add....");
                    navigate('/user/cart')
                }).catch((err) => {
                    console.log(err);
                    return false;
                })
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }

    useEffect(() => {
        getSingleRecord();
    }, [])

    return (
        <center>
            <div className='container p-5'>
                <h1 className='text-center mb-4' style={{color:'#012970'}}>Watch Details</h1>
                <div className='row'>
                    <div className="card mb-3 text-start">
                        <div className="row g-0 col-lg-12">
                            <div className="col-lg-6">
                                <img src={product.image} className="img-fluid rounded-start mt-4" alt="..." />
                            </div>
                            <div className="col-lg-6 p-5">
                                <div className="card-body">
                                    <p className="card-title"><span className='fw-bold h5'>Brand Name :- </span> {product.brand}</p>
                                    <p className="card-title"><span className='fw-bold h5'>Watch Name :- </span>{product.name}</p>
                                    <p className="card-title"><span className='fw-bold h5'>Watch Price :- </span>{product.price}</p>
                                    <h4 className='mt-4'>DESCRIPTION</h4>
                                    <hr />
                                    <p>
                                        Pre-Owned Patek Philippe Grand Complications Perpetual Calendar (5140J001) self - winding automatic watch, features a 37.2mm 18k yellow gold case surrounding a silver dial on a black alligator strap with an 18k yellow gold Calatrava Cross deployant buckle. Functions include hours, minutes, seconds, chronograph, date, day, month, moon phase and perpetual calendar. This watch has been serviced and comes with the original box and manual. Time remaining on the Manufacturer's service warranty!
                                    </p>
                                    <h4 className='mt-4'>FUNCTION </h4>
                                    <hr />
                                    <p className='m-0'> <span className='fw-bold'>Movement:</span> Automatic</p>
                                    <p><span className='fw-bold'>Complications:</span> Chronograph, Date, Day, Month, Moon Phase, Perpetual Calendar, Hours and Minutes, Seconds
                                    </p>
                                    <button className='mt-3 btn w-25' style={{ backgroundColor: '#012970', color: 'white' }} onClick={() => AddtoCart(productId)}>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <NavLink to="/user/product"><button className='btn mt-3'>Continue Shopping</button></NavLink>
            </div>
        </center>
    )
}

export default ProductDetails;

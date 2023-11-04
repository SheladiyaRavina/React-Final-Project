import { useEffect, useState } from "react";
import Slider from "./Slider";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Home = () => {

    const [allproduct, setAllproduct] = useState([]);
    const [patek, setPatek] = useState([]);
    const [rolex, setRolex] = useState([]);
    const [cartier, setCartier] = useState([]);
    const [greubel, setGreubel] = useState([]);

    const AllProduct = () => {
        axios.get(`http://localhost:7000/product`)
            .then((res) => {
                setAllproduct(res.data);
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }

    const Patek_Philippe = () => {
        axios.get(`http://localhost:7000/product`)
            .then((res) => {
                let ans = res.data.filter((val, i) => {
                    if (i < 4) {
                        return val.brand === "Patek Philippe"
                    }
                })
                setPatek(ans);
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }

    const Rolex = () => {
        axios.get(`http://localhost:7000/product?brand=Rolex&&status=instock`)
            .then((res) => {
                setRolex(res.data.slice(0, 4));
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }

    const Cartier = () => {
        axios.get(`http://localhost:7000/product?brand=Cartier&&status=instock`)
            .then((res) => {
                setCartier(res.data.slice(0, 4));
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }

    const Greubel_Forsey = () => {
        axios.get(`http://localhost:7000/product?brand=Greubel_Forsey&&status=instock`)
            .then((res) => {
                setGreubel(res.data.slice(0, 4));
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }

    useEffect(() => {
        AllProduct();
        Patek_Philippe();
        Rolex();
        Cartier();
        Greubel_Forsey();
    }, [])
    return (
        <body style={{ fontFamily: 'poppins' }}>
            <Slider />
            <div className='col-lg-12 row pt-5'>
                <div className='col-lg-3'></div>
                <div className='col-lg-6'>
                    <h1 className="text-center">All Watches</h1>
                    <p className=' text-center'>With thousands of pre-owned luxury watches from the best brands around the world, we are dedicated to bringing collectors and enthusiasts an unrivaled selection of timepieces. Our in-house team of Swiss-trained watchmakers, technicians, and refinishers.</p>
                </div>
                <div className='col-lg-3'></div>
            </div>
            <div className="container p-5">
                <h2 className="pt-5">Patek Philippe Watches</h2>
                <hr />
                <div className="row">
                    {
                        patek.map((val) => {
                            return (
                                <div className=" col-lg-3 border-0 text-center">
                                    <img src={val.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title m-1 p-0" style={{ fontSize: '14px' }}> {val.brand}</h5>
                                        <h5 className="card-title m-1 p-0" style={{ fontSize: '14px' }}> {val.name}</h5>
                                        <hr className=" mx-auto m-2" style={{ width: '5%' }} />
                                        <p className="card-text p-0 text-muted" style={{ fontSize: '14px' }}>Price :- {val.price}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

                <h2 className="pt-5">Rolex Watches</h2>
                <hr />
                <div className="row">
                    {
                        rolex.map((val) => {
                            return (
                                <div className="col-lg-3 border-0 text-center mb-5">
                                    <img src={val.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title m-1 p-0" style={{ fontSize: '14px' }}> {val.brand}</h5>
                                        <h5 className="card-title m-1 p-0" style={{ fontSize: '14px' }}> {val.name}</h5>
                                        <hr className=" mx-auto m-2" style={{ width: '5%' }} />
                                        <p className="card-text p-0 text-muted" style={{ fontSize: '14px' }}>Price :- {val.price}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="col-lg-12 row mt-5 mb-5">
                    <div className="col-lg-8">
                        <NavLink to='/user/product'>
                            <img src="https://watchbox-sfcc.imgix.net/2023.06.05-Content+Block+Refresh_patek.jpg" height="500" className="img-fluid"></img>
                        </NavLink>
                    </div>
                    <div className="col-lg-4 text-center">
                        <img src="https://watchbox-cdn.imgix.net/posted-product-images/638325250533032698_0f1b7deb-2357-45cc-bd78-5466ffacb236.jpg?w=1134&h=1134&auto=compress,format" height="400" className="" />

                        <h5 className="card-title m-1 p-0" style={{ fontSize: '14px' }}>Brand :- Patek Philippe </h5>
                        <h5 className="card-title m-1 p-0" style={{ fontSize: '14px' }}>Name :- Calatrava </h5>
                        <hr className=" mx-auto m-2" style={{ width: '5%' }} />
                        <p className="card-text p-0 text-muted" style={{ fontSize: '14px' }}>Price :- 41950</p>
                    </div>
                </div>


                <h2 className="pt-5"> Cartier Watches</h2>
                <hr />
                <div className="row">
                    {
                        cartier.map((val) => {
                            return (
                                <div className="col-lg-3 border-0 text-center mb-5">
                                    <img src={val.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title m-1 p-0" style={{ fontSize: '14px' }}> {val.brand}</h5>
                                        <h5 className="card-title m-1 p-0" style={{ fontSize: '14px' }}> {val.name}</h5>
                                        <hr className=" mx-auto m-2" style={{ width: '5%' }} />
                                        <p className="card-text p-0 text-muted" style={{ fontSize: '14px' }}>Price :- {val.price}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

                <h2 className="pt-5"> Greubel Forsey Watches</h2>
                <hr />
                <div className="row">
                    {
                        greubel.map((val) => {
                            return (
                                <div className="col-lg-3 border-0 text-center mb-5">
                                    <img src={val.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title m-1 p-0" style={{ fontSize: '14px' }}> {val.brand}</h5>
                                        <h5 className="card-title m-1 p-0" style={{ fontSize: '14px' }}> {val.name}</h5>
                                        <hr className=" mx-auto m-2" style={{ width: '5%' }} />
                                        <p className="card-text p-0 text-muted" style={{ fontSize: '14px' }}>Price :- {val.price}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

                <div className="col-lg-12 row mt-5 mb-5">
                    <div className="col-lg-8">
                        <NavLink to='/'>
                            <img src="https://watchbox-sfcc.imgix.net/2023.07.12-Game+Changers-Content+Blocks_awaw.jpg" height="500" className="img-fluid"></img>
                        </NavLink>
                    </div>
                    <div className="col-lg-4 text-center">
                        <img src="https://watchbox-cdn.imgix.net/posted-product-images/638282353323373752_seik306264_4857173_96759_41_1.jpg?w=1134&h=1134&auto=compress,format" height="400" className="" />
                        <h5 className="card-title m-1 p-0" style={{ fontSize: '14px' }}>Brand :- Rolex </h5>
                        <h5 className="card-title m-1 p-0" style={{ fontSize: '14px' }}>Name :- Heritage </h5>
                        <hr className=" mx-auto m-2" style={{ width: '5%' }} />
                        <p className="card-text p-0 text-muted" style={{ fontSize: '14px' }}>Price :- 4950</p>
                    </div>
                </div>

            </div>

        </body>
    )
}
export default Home;

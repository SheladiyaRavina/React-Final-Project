import React, { useEffect } from 'react'
import { useState } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';

const Otp = () => {

    let navigate = useNavigate();
    const [otp, setOtp] = useState("");

    const createOtp = () => {
        let useremail = JSON.parse(localStorage.getItem('checkUserLogin'));
        let otp = Math.floor(Math.random()*100);
        let obj ={
            otp : otp,
            email:useremail.email
        }
        localStorage.setItem('userOtp',JSON.stringify(obj));
        alert("your Otp:-"+otp);
    }

    const handlesubmit =()=>{
        let newotp = JSON.parse(localStorage.getItem('userOtp'));
        if(otp == newotp.otp){
            navigate('/user/newpassword');
        }else{
            alert("otp is wrong..");
        }
    }
    useEffect(()=>{
        createOtp();
    },[])

    return (
        <div>
            <main>
                <div className="container">
                    <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                    <div className="card mb-3 p-3">
                                        <div className="card-body">
                                            <div className="pt-4 pb-2">
                                                <h5 className="card-title text-center pb-0 pt-0 fs-4">Forget Your Password</h5>
                                                <p className="text-center small">Enter your otp </p>
                                            </div>
                                            <form className="row g-3 needs-validation" noValidate>

                                                <div className="col-12">
                                                    <label htmlFor="yourEmail" className="form-label">Your otp</label>
                                                    <input type="email" name="email" className="form-control" id="yourEmail" onChange={(e) => setOtp(e.target.value)} value={otp} required />
                                                </div>
                                                <center>
                                                    <div className="col-12">
                                                        <button className="btn text-light" style={{ backgroundColor: '#012970' }} type="button" onClick={() => handlesubmit()}>Submit</button>
                                                    </div>
                                                </center>
                                                <div className="col-12">
                                                    <p className="small mb-0">Don't have account?  <NavLink to={`/user/register`}>Create an account</NavLink></p>
                                                </div>

                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default Otp

import axios from 'axios';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        try {
            let users = await axios.get(`http://localhost:7000/login?email=${email}&password=${password}`);

            if (users.data.length === 0) {
                console.log("Email and Password not valid");
                return false;

            }
            localStorage.setItem('checkUserLogin', JSON.stringify(users.data[0]));
            setEmail("");
            setPassword("");
            navigate('/');

        } catch (err) {
            console.log(err);
            return false;
        }
    }

    const Forget =()=>{
        axios.get(`http://localhost:7000/login?email=${email}&password=${password}`).then((res)=>{
            if(res.data){
                localStorage.setItem('checkUserLogin',JSON.stringify(res.data[0]));
                navigate('/user/forget');
            return false;
            }
        }).catch((err)=>{
            console.log(err);
        })
    }

    return (
        <div style={{ fontFamily: 'poppins' }}>
            <div className='container'>
                <div className='row  mx-auto card mt-5 border-0' style={{ border: '1px solid #CBCBCB',width:'40%' }}>
                    <div className='col-lg-12 ps-5 pb-5 pe-5 pt-4'>
                        <h4 className='fw-normal'>Sign In</h4>
                        <p className='text-muted' style={{ fontSize: '15px' }}>Sign in to check order status, add to wishlist, update billing information, or review past orders.</p>
                        <hr />
                        <form className='fs-5'>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label fw-bold" style={{ fontSize: '13px' }}>Email address</label><br />
                                <input type="text" name='email' onChange={(e) => setEmail(e.target.value)} value={email} className="w-100" style={{ backgroundColor: '#F4F4F4', border: '1px solid #1D1C1B' }} id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label fw-bold" style={{ fontSize: '13px' }}>Password</label><br />
                                <input type="password" name='password' onChange={(e) => setPassword(e.target.value)} value={password} className="w-100" id="exampleInputPassword1" style={{ backgroundColor: '#F4F4F4', border: '1px solid #1D1C1B' }} />
                            </div>
                            <div className='mb-3 text-end'>
                                <div onClick={()=>Forget()} style={{fontSize:'14px'}} className='text-primary'>forget password?</div>
                            </div>
                            <button type="button" onClick={() => handleSubmit()} className="w-100 border-0 text-uppercase text-light p-2 mt-3" style={{ backgroundColor: '#012970', fontSize: '12px' }}>Sign In</button>
                        </form>
                        <hr className='mt-4' />
                        <div className="w-100 mx-auto mt-4" id="exampleInputPassword1" style={{ border: '1px solid #1D1C1B',height:'40px' }} >
                        <center>
                        <img src='https://www.thewatchbox.com/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dw8fd2515a/images/social/signin-google.svg' className='mt-2'></img>
                        </center>
                        </div>
                    </div>
                </div>
                <div className='row p-5 mx-auto mb-5 border-0' style={{ border: '1px solid #CBCBCB',width:'40%' }}>
                    <div className='col-lg-12 text-center'>
                        <h5 className='text-center color'>Don't Have an Account?</h5>
                        <NavLink to={`/user/register`} className='text-center text-primary' style={{fontSize:'12px'}}>CREATE AN ACCOUNT</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const AdminRegister =()=>{

    const [name,setName] =useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confrompassword,setConfrompassword] = useState("");
    const [record,setRecord] =useState([]);
    
    const handlesubmit =()=>{
        axios.post(`http://localhost:7000/admin`,{
            name:name,email:email,password:password,cpassword:confrompassword
        }).then((res)=>{
            if(password === confrompassword){
                alert("record sucessfully add...");
                setName("");
                setConfrompassword("");
                setEmail("");
                setPassword("");
                getuser();
            }else{
                alert("password ans confrom password not match");
            }
            
        }).catch((err)=>{
            console.log(err);
            return false;
        })
    }

    const getuser = ()=>{
        axios.get(`http://localhost:7000/admin`)
        .then((res)=>{
            setRecord(res.data);
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
            return false;
        })
    }

    useEffect(()=>{
        getuser();
    },[])
    return(
        <div style={{ fontFamily: 'poppins' }}>
        <div className='container'>
            <h1 className='text-center p-5'>User Register</h1>
            <div className='row mx-auto' style={{ border: '1px solid #CBCBCB',width:'50%' }}>
                <div className='row text-center'>
                    <NavLink to={`/admin/adminlogin`} className='col-6 text-uppercase pt-4 text-dark'>Sign In</NavLink>
                    <NavLink to={`/admin/adminregister`} className='col-6 text-uppercase pt-4 text-dark'>Craete Account</NavLink>
                    <hr className='mt-4' />
                </div>
                <div className='col-lg-12 ps-5 pb-5 pe-5 pt-4'>
                    <h4 className='fw-normal'>Create An Account
                    </h4>
                    <p className='text-muted' style={{ fontSize: '15px' }}>
                        Create an account by social or email for faster check out experience, easy order tracking and save items to your wishlist.</p>

                    <hr className='mt-4 mb-4' />
                    <h5>Register With Social</h5>
                    <div className="w-100 mx-auto mt-4" id="exampleInputPassword1" style={{ border: '1px solid #1D1C1B', height: '40px' }} >
                        <center>
                            <img src='https://www.thewatchbox.com/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dw8fd2515a/images/social/signin-google.svg' className='mt-2'></img>
                        </center>
                    </div>
                    <div className="w-100 mx-auto mt-4" id="exampleInputPassword1" style={{ border: '1px solid #1D1C1B', height: '40px' }} >
                        <center>
                            <img src='https://www.thewatchbox.com/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dw08f93c61/images/social/signin-facebook.svg' className='mt-2'></img>
                        </center>
                    </div>
                    <hr className='mt-4 mb-4' />
                    <h5>Register With Email</h5>

                    <form className='fs-5'>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label fw-bold" style={{ fontSize: '13px' }}>Name</label><br />
                            <input type="text" name='name' onChange={(e) => setName(e.target.value)} value={name} className="w-100" style={{ backgroundColor: '#F4F4F4', border: '1px solid #1D1C1B' }} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label fw-bold" style={{ fontSize: '13px' }}>Email address</label><br />
                            <input type="text" name='email' onChange={(e) => setEmail(e.target.value)} value={email} className="w-100" style={{ backgroundColor: '#F4F4F4', border: '1px solid #1D1C1B' }} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label fw-bold" style={{ fontSize: '13px' }}>Password</label><br />
                            <input type="password" name='password' onChange={(e) => setPassword(e.target.value)} value={password} className="w-100" id="exampleInputPassword1" style={{ backgroundColor: '#F4F4F4', border: '1px solid #1D1C1B' }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label fw-bold" style={{ fontSize: '13px' }}>Confrom Password</label><br />
                            <input type="cpassword" name='cpassword' onChange={(e) => setConfrompassword(e.target.value)} value={confrompassword} className="w-100" id="exampleInputPassword1" style={{ backgroundColor: '#F4F4F4', border: '1px solid #1D1C1B' }} />
                        </div>
                        <p style={{fontSize:'13px'}}>By creating an account, you agree to our Privacy Policy and Terms & Conditions.</p>
                        <button type="button" onClick={() => handlesubmit()} className="w-100 border-0 text-uppercase text-light p-2" style={{ backgroundColor: 'black', fontSize: '12px' }}>create account</button>
                    </form>                                                
                </div>
            </div>
            <div className='row p-5 mt-5 w-50 mx-auto mb-5' style={{ border: '1px solid #CBCBCB',width:'50%' }}>
                <div className='col-lg-12 text-center'>
                    <h5 className='text-center fw-bold'>Already Have an Account?
                    </h5>
                    <NavLink to={`/admin/adminlogin`} className='text-center fs-6 text-dark'>sign in</NavLink>
                </div>
            </div>
        </div>
    </div>
    );
}
export default AdminRegister;

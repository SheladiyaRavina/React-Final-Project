import { useState ,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const AdminLogin =()=>{

    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [admin,setAdmin] = useState("");
    console.log(admin);

    const handlesubmit = () => {
        axios.get(`http://localhost:7000/admin?email=${email}&password=${password}`).then((res)=>{
            if(res.data){
                localStorage.setItem('adminLogin',JSON.stringify(res.data[0]));
                navigate('/admin/dashbord');
            }else{
                alert("Email and Password not valid")
            }
        }).catch((err)=>{
            console.log(err);
            return false;
        })
    }

    const Forget =()=>{
        axios.get(`http://localhost:7000/admin?email=${email}&password=${password}`).then((res)=>{
            if(res.data){
                localStorage.setItem('adminLogin',JSON.stringify(res.data[0]));
                navigate('/forget');
            return false;
            }
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem('adminLogin'));
        if(data){
            navigate('/admin/dashbord')
        }
        setAdmin(data)    
    },[])


    return(

        <main>
            <div className="container">
                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                <div className="d-flex justify-content-center py-4">
                                    <div className="logo d-flex align-items-center w-auto">
                                        <img src="../img/logo.png" alt />
                                        <span className="d-none d-lg-block">NiceAdmin</span>
                                    </div>
                                </div>{/* End Logo */}
                                <div className="card mb-3 p-3">
                                    <div className="card-body">
                                        <div className="pt-4 pb-2">
                                            <h5 className="card-title text-center pb-0 pt-0 fs-4">Login to Your Account</h5>
                                            <p className="text-center small">Enter your username & password to login</p>
                                        </div>
                                        <form className="row g-3 needs-validation" noValidate>
                                            
                                            <div className="col-12">
                                                <label htmlFor="yourEmail" className="form-label">Your Email</label>
                                                <input type="email" name="email" className="form-control" id="yourEmail" onChange={(e)=>setEmail(e.target.value)} value={email} required />
                                                <div className="invalid-feedback">Please enter a valid Email adddress!</div>
                                            </div>

                                            <div className="col-12">
                                                <label htmlFor="yourPassword" className="form-label">Password</label>
                                                <input type="password" name="password" className="form-control" id="yourPassword" onChange={(e)=>setPassword(e.target.value)} value={password} required />
                                                <div className="invalid-feedback">Please enter your password!</div>
                                            </div>
                                            <div className="col-12 text-end">
                                                <NavLink style={{fontSize:'14px'}} onClick={()=>Forget()}>Forget Password?</NavLink>
                                            </div>
                                            <center>
                                                <div className="col-12">
                                                    <button className="btn text-light" style={{ backgroundColor: '#012970' }} type="button" onClick={() => handlesubmit()}>Sing In</button>
                                                </div>
                                            </center>
                                            <div className="col-12">
                                                <p className="small mb-0">Don't have account?  <NavLink to={`/register`}>Create an account</NavLink></p>
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
   
    );
}
export default AdminLogin;

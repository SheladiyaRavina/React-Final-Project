import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, json } from "react-router-dom";

const AdminRegister = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confrompassword, setConfrompassword] = useState("");
    const [record, setRecord] = useState([]);

    const handlesubmit = () => {
        axios.post(`http://localhost:7000/admin`, {
            name: name, email: email, password: password, cpassword: confrompassword
        }).then((res) => {
            if (password === confrompassword) {
                alert("record sucessfully add...");
                setName("");
                setConfrompassword("");
                setEmail("");
                setPassword("");
                getuser();
            } else {
                alert("password ans confrom password not match");
            }
        }).catch((err) => {
            console.log(err);
            return false;
        })
    }

    const getuser = () => {
        axios.get(`http://localhost:7000/admin`)
            .then((res) => {
                setRecord(res.data);
                // localStorage.setItem('adminLogin',JSON.stringify(res.data));
                console.log(res.data);
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }


    useEffect(() => {
        getuser();
    }, [])
    return (

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
                                            <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
                                            <p className="text-center small">Enter your personal details to create account</p>
                                        </div>
                                        <form className="row g-3 needs-validation" noValidate>
                                            <div className="col-12">
                                                <label htmlFor="yourName" className="form-label">Your Name</label>
                                                <input type="text" name="name" className="form-control" id="yourName" onChange={(e)=>setName(e.target.value)} value={name} required />
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="yourEmail" className="form-label">Your Email</label>
                                                <input type="email" name="email" className="form-control" id="yourEmail" onChange={(e)=>setEmail(e.target.value)} value={email} required />
                                            </div>

                                            <div className="col-12">
                                                <label htmlFor="yourPassword" className="form-label">Password</label>
                                                <input type="password" name="password" className="form-control" id="yourPassword" onChange={(e)=>setPassword(e.target.value)} value={password} required />
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="yourPassword" className="form-label">Confrim Password</label>
                                                <input type="cpassword" name="cpassword" className="form-control" id="yourPassword" onChange={(e)=>setConfrompassword(e.target.value)} value={confrompassword} required />
                                            </div>
                                            <center>
                                                <div className="col-12">
                                                    <button className="btn text-light" style={{ backgroundColor: '#012970' }} type="button" onClick={() => handlesubmit()}>Create Account</button>
                                                </div>
                                            </center>
                                            <div className="col-12">
                                                <p className="small mb-0">Already have an account? <NavLink to={`/login`}>Log in</NavLink></p>
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
export default AdminRegister;

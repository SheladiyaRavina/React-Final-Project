import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const AdminBrand = () => {

    const [name, setName] = useState("");
    const [brand, setBarnd] = useState([]);
    console.log(brand
    );
    const [edit, setEdit] = useState("");

    const handleSubmit = () => {
        if (edit) {
            axios.put(`http://localhost:7000/brand/${edit}`, { brand_name: name })
                .then((res) => {
                    alert("categary update");
                    getuser();
                }).catch((err) => {
                    console.log(err);
                    return false;
                })
        } else {
            axios.post(`http://localhost:7000/brand`, {
                brand_name: name
            }).then((res) => {
                console.log(name);
                alert("brand Add...");
                getuser();
            }).catch((err) => {
                console.log(err);
                return false;
            })
        }
        setName("");
    }

    const deleteBrand= (id) => {
        axios.delete(`http://localhost:7000/brand/${id}`)
            .then((res) => {
                alert("brand delete");
                getuser();
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }

    const editdata = (id) => {
        axios.get(`http://localhost:7000/brand/${id}`)
            .then((res) => {
                setName(res.data.name);
                setEdit(res.data.id)
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }

    const getuser = () => {
        axios.get(`  http://localhost:7000/brand`)
            .then((res) => {
                setBarnd(res.data);
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }

    useEffect(() => {
        getuser();
    }, [])

    return (
        <center>
            <center>
                <main id="main" className="main">
                    <div className="pagetitle">
                        <h1>Brand Add</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><NavLink to={`/admin/dashbord`}>Home</NavLink></li>
                            </ol>
                        </nav>
                    </div>{/* End Page Title */}
                    <section className="section">
                        <div className="row">
                            <div className="col-lg-3"></div>
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        {/* General Form Elements */}
                                        <form>
                                            <div className="row mb-3">
                                                <label htmlFor="inputText" className="col-sm-3 col-form-label">Barnd Name:-</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control"
                                                        name="name" value={name} onChange={(e) => setName(e.target.value)}
                                                        placeholder="add brand..." />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <label className="col-sm-1 col-form-label"></label>
                                                <div className="col-sm-10">
                                                    <button type="button" className="btn text-light" style={{ backgroundColor: 'black' }} onClick={() => handleSubmit()}>Submit</button>
                                                </div>
                                            </div>
                                        </form>{/* End General Form Elements */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="card justify-content-between p-5 pt-1">
                                <table class="table table-striped">
                                    <thead>
                                        <tr className="text-center">
                                            <th scope="col">Brand Name</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                            {
                                                brand.map((v) => {
                                                    return (
                                                        <tr className="text-center">
                                                            <td>{v.brand_name}</td>
                                                            
                                                            <td>
                                                            <i class="bi bi-trash 3-fill h3 text-dark" onClick={()=>deleteBrand(v.id)}></i>&nbsp;&nbsp;&nbsp;&nbsp;

                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </main>{/* End #main */}

            </center>
        </center>
    );
}
export default AdminBrand;

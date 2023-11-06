import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const AdminSlider = () => {

    const [image, setImage] = useState("");
    const [slider, setSlider] = useState([]);
    const [edit, setEdit] = useState("");

    const handleSubmit = () => {
        if (edit) {
            axios.put(`http://localhost:7000/slider/${edit}`, { image: image })
                .then((res) => {
                    alert("Slider update");
                    getuser();
                }).catch((err) => {
                    console.log(err);
                    return false;
                })
        } else {
            axios.post(`http://localhost:7000/slider`, {
                image: image
            }).then((res) => {
                console.log(image);
                alert("Slider Add...");
                getuser();
            }).catch((err) => {
                console.log(err);
                return false;
            })
        }
        setImage("");
    }

    const deleteSlider= (id) => {
        axios.delete(`http://localhost:7000/slider/${id}`)
            .then((res) => {
                alert("slider deleted..");
                getuser();
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }

    const editdata = (id) => {
        axios.get(`http://localhost:7000/slider/${id}`)
            .then((res) => {
                setImage(res.data.image);
                console.log(res.data.image);
                setEdit(res.data.id)
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }

    const getuser = () => {
        axios.get(`  http://localhost:7000/slider`)
            .then((res) => {
                setSlider(res.data);
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
                        <h1>Slider Add</h1>
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
                                            <div className="row mb-3 mt-3" >
                                                <label htmlFor="inputText" className="col-sm-2 col-form-label color">Image Url:-</label>
                                                <div className="col-sm-10">
                                                <input type="text" className="form-control" value={image} name="image" onChange={(e) => setImage(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <label className="col-sm-1 col-form-label"></label>
                                                <div className="col-sm-10">
                                                    <button type="button" className="btn text-light" style={{ backgroundColor: '#012970' }} onClick={() => handleSubmit()}>Submit</button>
                                                </div>
                                            </div>
                                        </form>{/* End General Form Elements */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="card justify-content-between p-5 pt-4 ">
                                <table class="table table-striped">
                                    <thead>
                                        <tr className="text-center">
                                            <th scope="col" className="h5" style={{color:'#012970'}}>Slider Image</th>
                                            <th scope="col" className="h5" style={{color:'#012970'}}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                            {
                                                slider.map((v) => {
                                                    return (
                                                        <tr className="text-center">
                                                            <td width="60%"><img src={v.image} width='100%'></img></td>
                                                            <td width="40%">
                                                            <button className="btn btn-outline-danger" onClick={()=>deleteSlider(v.id)}><i class="bi bi-trash 3-fill" ></i>&nbsp;&nbsp;Delete</button>
                                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                                            <button className=" btn btn-outline-success" onClick={()=>editdata(v.id)}><i class="bi bi-pencil-square"></i>&nbsp;&nbsp;Edit</button>
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
export default AdminSlider;


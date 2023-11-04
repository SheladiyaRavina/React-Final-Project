import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

const AdminProduct = () => {

  const [brand,setBrand]=useState([]);
  console.log(brand);

  const[brandname,setBrandName] = useState("");
  const[productname,setProductName] = useState("");
  const[price,setPrice] = useState("");
  const[qty,setQty] = useState("");
  const[image,setImage] = useState("");
  const[marketstatus,setMarketStatus] = useState("");
  const[status,setStatus] = useState("");

  const Brand_name=()=>{
    axios.get(`http://localhost:7000/brand`,{
      brand_name:brand
    }).then((res)=>{
      setBrand(res.data)
    }).catch((err)=>{
      console.log(err);
      return false;
    })
  }

  const handlesubmit =()=>{
    axios.post(`http://localhost:7000/product`,{
        name:productname,price:price,qty:qty,image:image,marketstatus:marketstatus,status:status,brand:brandname
    }).then((res)=>{
      alert("product sucessfully add..");
      setProductName("");
      setPrice("");
      setQty("");
      setImage("");
      setMarketStatus("");
      setStatus("");
    })
  }

  useEffect(()=>{
    Brand_name();
  },[])
  return (
    <center>
      <main className="main" id="main">
        <div className="pagetitle">
          <h1 className='p-3'>Product Add</h1>

        </div>{/* End Page Title */}
        <section className="section">
          <div className="row">
            <div className='col-lg-2'></div>
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  {/* General Form Elements */}
                  <form className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Brand Name</label>
                      <select className='form-control' name='brandname' value={brandname} onChange={(e)=>setBrandName(e.target.value)}>
                      <option value="">---Select Brand---</option>
                      {
                        brand.map((v)=>{
                          return(
                            <option value={v.brand_name}>{v.brand_name}</option>
                          )
                        })
                      }
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Product Name</label>
                      <input type="text" className="form-control" name='name' value={productname} onChange={(e)=>setProductName(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Product Price</label>
                      <input type="number" className="form-control" name='price' value={price} onChange={(e)=>setPrice(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Product Qty</label>
                      <input type="number" className="form-control"  name='qty' value={qty} onChange={(e)=>setQty(e.target.value)}/>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Product Image</label>
                      <input type="text" className="form-control"  name='image' value={image} onChange={(e)=>setImage(e.target.value)}/>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" >Market status</label>
                      <select class="form-control"  name='marketstatus' value={marketstatus} onChange={(e)=>setMarketStatus(e.target.value)}>
                        <option value="">--select status--</option>
                        <option value="trending">Trending</option>
                        <option value="latest">Latest</option>
                        <option value="upcomming">Upcomming</option>
                        <option value="best">Best</option>
                      </select>
                    </div>
                    <div className='col-md-3'></div>
                    <div className="col-md-6">
                      <label className="form-label"> status</label>
                      <select class="form-control"  name='status' value={status} onChange={(e)=>setStatus(e.target.value)}>
                        <option value="">--select status--</option>
                        <option value="instock">Instock</option>
                        <option value="outstock">Outstock</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <button type="button" className="btn text-light" style={{backgroundColor:'black'}} onClick={()=>handlesubmit()}>Add Product</button>
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </section>
        <NavLink to={`/admin/viewproduct`}>
          <button className="btn text-light" style={{backgroundColor:'black'}} type="button">viewproduct</button>
        </NavLink>
      </main>{/* End #main */}

    </center>

  )
}

export default AdminProduct

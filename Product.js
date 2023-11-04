import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Product = () => {

  const [allproduct, setAllproduct] = useState([]);
  const [brand, setBrand] = useState([]);
  const [marketstatus, setMarketStatus] = useState([]);
  const [price, setPrice] = useState([]);
  const [search,setSearch]=useState("");

  const [currentpage, setCurrentpage] = useState(1);

  const recordperpage = 6;
  const lastIndex = currentpage * recordperpage;
  const firstIndex = lastIndex - recordperpage;

  const currentproduct = allproduct.slice(firstIndex, lastIndex);

  const npages = Math.ceil(allproduct.length / recordperpage);

  const number = [...Array(npages + 1).keys()].slice(1);

  const change = (id) => {
    setCurrentpage(id);
  }
  const AllProduct = () => {
    axios.get(`http://localhost:7000/product?status=instock`)
      .then((res) => {
        setAllproduct(res.data);
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }

  const allBrand = () => {
    axios.get(`http://localhost:7000/brand`)
      .then((res) => {
        setBrand(res.data)
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }

  const allMarketStatus = () => {
    axios.get(`http://localhost:7000/marketstatus`)
      .then((res) => {
        setMarketStatus(res.data)
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }

  const allPrice = () => {
    axios.get(`http://localhost:7000/price`)
      .then((res) => {
        setPrice(res.data)
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }

  const BrandFilter = (brand) => {
    if (brand === "all") {
      AllProduct();
    } else {
      axios.get(`http://localhost:7000/product?brand=${brand}&status=instock`).then((res) => {
        setAllproduct(res.data);
      }).catch((err) => {
        console.log(err);
        return false;
      })
    }
  }

  const MarketStatusFilter = (marketstatus) => {
    if (marketstatus === "all") {
      AllProduct();
    } else {
      axios.get(`http://localhost:7000/product?marketstatus=${marketstatus}&status=instock`).then((res) => {
        setAllproduct(res.data);
        console.log(res.data);
      }).catch((err) => {
        console.log(err);
        return false;
      })
    }
  }

  const priceFilter = (price) => {
    if(price === "price"){
      allproduct();
    }else{
      axios.get(`http://localhost:7000/product?price=${price}`)
      .then((res) => {
        console.log(res.data);
        setAllproduct(res.data);
      }).catch((err) => {
        console.log(err);
        return false
      })
    }
  }

  useEffect(() => {
    AllProduct();
    allBrand();
    allMarketStatus();
    allPrice();
  }, [])

  return (
    <div className='container pt-5' style={{ fontFamily: 'sans-serif' }}>
      <div className='col-lg-12 row pb-5'>
        <div className='col-lg-3'></div>
        <div className='col-lg-6'>
          <h1 className="text-center">All Watches</h1>
          <p className=' text-center'>With thousands of pre-owned luxury watches from the best brands around the world, we are dedicated to bringing collectors and enthusiasts an unrivaled selection of timepieces. Our in-house team of Swiss-trained watchmakers, technicians, and refinishers.</p>
        </div>
        <div className='col-lg-3'></div>
        <input type='text' className='from-control' onChange={(e)=>setSearch(e.target.value)} value={search} placeholder='Search watch name ,brand name'/>

      </div>
      <div className='row'>
        <div className='col-lg-3'>
          {/* brand */}
          <h5 className='fw-bold p-2 card border-0' >Watches Brand Filter</h5>
          <div className="" style={{ width: '18rem' }}>
            {
              brand.map((val) => {
                return (
                  <div className='from-check' style={{ padding: '10px 0px' }}>
                    <input className="form-check-input" type="radio" name="flexRadioDefault"
                     id="flexRadioDefault2" 
                     defaultChecked onClick={() => BrandFilter(val.brand_name)} />
                    <label className="form-check-label fw-bold ps-3 text-muted" htmlFor="flexRadioDefault2">
                      {val.brand_name}
                    </label>
                  </div>
                )
              })
            }

            <div className="form-check" style={{ padding: '10px 25px' }}>
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" 
              defaultChecked onClick={() => BrandFilter("all")} />
              <label className="form-check-label fw-bold ps-3" htmlFor="flexRadioDefault2">
                All
              </label>
            </div>
          </div>
          {/* Market staus */}
          <h5 className='fw-bold p-2 card border-0 mt-5'>Market Status</h5>
          <div className="" style={{ width: '18rem' }}>
            {
              marketstatus.map((val) => {
                return (
                  <div className='from-check' style={{ padding: '10px 0px' }}>
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" 
                    defaultChecked onClick={() => MarketStatusFilter(val.marketstatus)} />
                    <label className="form-check-label fw-bold ps-3 text-muted" htmlFor="flexRadioDefault2">
                      {val.marketstatus}
                    </label>

                  </div>
                )
              })
            }
            <div className="form-check" style={{ padding: '10px 25px' }}>
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" 
              defaultChecked onClick={() => MarketStatusFilter("all")} />
              <label className="form-check-label fw-bold ps-3" htmlFor="flexRadioDefault2">
                All
              </label>
            </div>
          </div>
          {/* price Filter */}
          <h5 className='fw-bold p-2 card border-0 mt-5'>Price Filter</h5>
          <div className="" style={{ width: '18rem' }}>
            {
              price.map((val) => {
                return (
                  <div className='from-check' style={{ padding: '10px 0px' }}>
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                     defaultChecked onClick={() => priceFilter(val.price)} />
                    <label className="form-check-label fw-bold ps-3 text-muted" htmlFor="flexRadioDefault2">
                      {val.price}
                    </label>
                  </div>
                )
              })
            }
            <div className="form-check" style={{ padding: '10px 25px' }}>
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
               defaultChecked onClick={() => priceFilter("all")} />
              <label className="form-check-label fw-bold ps-3" htmlFor="flexRadioDefault2">
                All
              </label>
            </div>
          </div>
        </div>



        <div className='col-lg-9 row'>
          {
            currentproduct.map((val) => {
              return (
                <div className="col-lg-4 pb-3">
                  <div className="card border-0 text-center" style={{ width: '18rem', padding: '10px' }}>
                    <img style={{ objectFit: 'contain' }} src={val.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title m-1 p-0" style={{ fontSize: '14px' }}> {val.name}</h5>
                      <hr className=" mx-auto m-2" style={{ width: '5%' }} />
                      <p className="card-text p-0 m-1 text-muted" style={{ fontSize: '14px' }}>Price :- {val.price}</p>
                      <Link to={`/user/productdetails/${val.id}`}>
                        <div className='placeholder bg-light' style={{ color: 'red', fontSize: '14px' }}>View More</div>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
        <div className='d-flex justify-content-center align-item-center'>
          {
            number.map(n => (
              <div key={n} className={`page-item ${currentpage == n ? 'active' : ''}`}>
                <a onClick={() => setCurrentpage(n)} className='page-link p-3' href='#'>{n}</a>
              </div>
            ))
          }
        </div>
      </div>
    </div >
  )
}

export default Product
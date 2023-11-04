import React, { useEffect, useState } from 'react';
import axios from "axios"; 

const Slider = () => {

    const [slider,setSlider] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:7000/slider`)
        .then((res)=>{
            console.log(res.data);
            setSlider(res.data);
        }).catch((err)=>{
            console.log(err);
            return false;
        })
    },[])
  return (
   <div>
        
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                        {
                            slider.map((val)=>{
                                return(
                                    <div className="carousel-item active">
                                        <img src={val.image} style={{height:"500px",objectFit : "cover",objectPosition : "center"}} className="d-block w-100"/>
                                    </div>
                                )
                            })
                        }
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                        </button>
                    </div>
    </div>

  )
}

export default Slider;

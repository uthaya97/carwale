import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '@mui/material/Button';
import product from '../product.json'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleCarwaledata } from '../redux/Cardslice';

const Comparecar = () => {

    const navigate=useNavigate()
    const dispatch=useDispatch()
    const handleCompare=(carindex,carName1,des1,carName2,des2)=>{
        const item=product.Carwaledata.find((e)=>e.id === carindex)
        dispatch(handleCarwaledata(item))
        navigate(`/comparecar/${carindex}/${carName1}/${des1}/${carName2}/${des2}`)
    }
    const handlecomparision=()=>{
        navigate('/compare-car')
    }
    var settings = {
        dots:false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint:820,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='compare-container'>
            <h2 className="compare-head">Compare Cars</h2>
            <Slider {...settings}>
                {
                    product.Carwaledata.map((e) => {
                        return <div className="compare-col"onClick={()=>{handleCompare(e.id,e.comparName1,e.comparDes1,e.comparName2,e.comparDes2)}}>
                            <div className="compare">
                                <div className="cpmpare-cd">
                                    <div className="compare-card">
                                        <div className="compare-img">
                                            <img src={e.comparImgUrl1}alt=''></img>
                                        </div>
                                        <div className="compare-content">
                                            <h6>{e.comparName1}</h6>
                                            <h4>{e.comparDes1}</h4>
                                            <h6>{e.comparAmount1}</h6>
                                            <span>Onwards</span>
                                        </div>

                                    </div>
                                    <div className="vs">
                                        <p>vs</p>
                                    </div>
                                    <div className="compare-card">
                                        <div className="compare-img">
                                            <img src={e.comparImgUrl2}alt=''></img>
                                        </div>
                                        <div className="compare-content">
                                            <h6>{e.comparName2}</h6>
                                            <h4>{e.comparDes2}</h4>
                                            <h6>{e.comparAmount2}</h6>
                                            <span>Onwards</span>
                                        </div>

                                    </div>
                                </div>
                                <div className="compare-btn">
                                <Button variant="outlined">Compare Now</Button>
                                </div>


                            </div>

                        </div>
                    })
                }
            </Slider>
            <h5 className='comparision'onClick={handlecomparision}>More Comparisons <i class="fa fa-angle-right" aria-hidden="true"></i>   <i class="fa fa-angle-right" aria-hidden="true"></i></h5>
        </div>
    )
}

export default Comparecar
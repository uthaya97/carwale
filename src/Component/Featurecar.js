import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '@mui/material/Button';
import { useState } from 'react'
import product from '../product.json'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleCarwaledata } from '../redux/Cardslice';




const Featurecar = () => {
   
    const [justLanch,setJustLanch]=useState(true)
    const [Popul,setPopular]=useState(false)
    const [upcome,setUpcome]=useState(false)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const featureBtn=(carindex,carName)=>{
        const item=product.Carwaledata.find((e)=>e.id === carindex)
        dispatch(handleCarwaledata(item))
        navigate(`/trending/${carindex}/${carName}`)
    }
    const featurePopularBtn=(carindex,carName)=>{
        const item=product.Carwaledata.find((e)=>e.id === carindex)
        dispatch(handleCarwaledata(item))
        navigate(`/popular/${carindex}/${carName}`)
    }
    const featureUpBtn=(carindex,carName)=>{
        const item=product.Carwaledata.find((e)=>e.id === carindex)
        dispatch(handleCarwaledata(item))
        navigate(`/upcoming/${carindex}/${carName}`)
    }
    const populBtn=()=>{
        setPopular(true)
        setJustLanch(false)
        setUpcome(false)
    }
    const justLanBtn=()=>{
        setPopular(false)
        setJustLanch(true)
        setUpcome(false)
    }
    const upComBtn=()=>{
        setPopular(false)
        setJustLanch(false)
        setUpcome(true)
    }
    var settings = {
        dots: false,
        infinite:false,
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
                    infinite:false,
                    dots: false
                }
            },
            {
                breakpoint: 820,
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
        <div className='fea-container'>
            <h2>Featured Cars</h2>
            <div className="feature-btn">
                <button onClick={justLanBtn}>TRENDING</button>
                <button onClick={populBtn}>POPULAR</button>
                <button onClick={upComBtn}>UPCOMING</button>
            </div>

            {
                justLanch ? (<Slider {...settings}>
                    {
                      product.Carwaledata.map((e) => {
                            return <div className="fea-col">
                                <div className="fea-card">
                                    <div className="fea-img">
                                        <img src={e. trendImgUrl}alt=" "onClick={()=>{featureBtn(e.id,e.trendName)}}></img>
                                    </div>
                                    <div className="fea-content">
                                        <h4>{e.trendName}</h4>
                                        <p className="pop-para1">{e.trendAmount}<small className="pop3">Onwards</small></p>
                                        <small className="pop5">Avg. Ex-Showroom Price</small>
                                        <div>
                                            <Button variant="outlined">Show price in my city</Button>
                                        </div>
    
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </Slider>):('')
            }

            {
                Popul ? ( <Slider {...settings}>
                    {
                        product.Carwaledata.map((e) => {
                            return <div className="jus-col">
                                <div className="jus-card">
                                    <div className="jus-img">
                                        <img src={e.popularImgUrl}alt=''onClick={()=>{featurePopularBtn(e.id,e.popularName)}}></img>
                                    </div>
                                    <div className="jus-content">
                                        <h3>{e.popularName}</h3>
                                        <p className="jus-para">{e.populatAmount}<small className="jus-sn">onwards</small></p>
                                        <small className='paa'>Avg.Ex-Showroom Price</small>
                                       <div>
                                       <Button variant="outlined">Show price in my city</Button>
                                       </div>
                                    </div>
                                </div>
    
                            </div>
                        })
                    }
                </Slider>):('')
            }
            
            {
                upcome ? (  <Slider {...settings}>
                    {
                        product.Carwaledata.map((e)=>{
                            return <div className="up-col">
                            <div className="up-card">
                                <div className="up-img">
                                    <img src={e.upcomeImgUrl}alt=''onClick={()=>{featureUpBtn(e.id,e.upcomeName)}}></img>
                                </div>
                                <div className="up-content">
                                    <h3>{e.upcomeName}</h3>
                                    <p className="up-para">{e.upcomeAmount} <small class="up-sn">Estimated Price</small></p>
                                    <small className="up-para1">{e.upcomeDate} <small class="up-sn1">Excepted Lanch<i class="fa fa-times-circle-o" aria-hidden="true"></i></small></small>
                                </div>
                                <div className="up-btn">
                                    <Button variant="outlined"><i class="fa fa-whatsapp up-ws" aria-hidden="true"></i>Get Lanch Alert on Whatsapp</Button>
                                </div>
                            </div>
                        </div>
                        })
                    }
                </Slider>):('')
            }
           
          
        </div>
    )
}

export default Featurecar
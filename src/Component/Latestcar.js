import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product from '../product.json'



const Latestcar = () => {
    const [news,setNews]=useState(true)
    const [expert,setExpert]=useState(false)
    const [video,setVideo]=useState(false)

    const carNewBtn=()=>{
        setNews(true)
        setExpert(false)
        setVideo(false)
    }
    const expertBtn =()=>{
        setNews(false)
        setExpert(true)
        setVideo(false)
    }
    const videoBtn=()=>{
        setNews(false)
        setExpert(false)
        setVideo(true)
    }
    var settings = {
        dots:false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots:false
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
        <div className='latest-container'>
            <h2>Latest Car Updates</h2>
            <div class="late-btn">
                <button  onClick={carNewBtn}>CARS NEWS</button>
                <button  onClick={expertBtn}>EXPERT REVIEWS</button>
                <button  onClick={videoBtn}>VIDEOS</button>
            </div>
            {
                news ? ( <Slider {...settings}>
                    {
                        product.LatestcartopcarData.map((e) => {
                            return <div className="latest-col">
                                <div className="latest-card">
                                    <div className="latest-img">
                                        <img src={e.newsImgUrl}alt=''></img>
                                    </div>
                                    <div className="latest-content">
                                        <h4>{e.newsName}</h4>
                                        <div class="late-con">
                                            <p><span className="late-sl">By</span><span>{e.newsManufacture}</span></p>
                                            <small className="late-sl">{e.newsTime}</small>
                                        </div>
                                        <p>{e.newsPara} </p>
                                    </div>
                                    <div className="latest-btn">
                                        <button>Read More</button>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </Slider>):('')
            }
           
           {
            expert ? (    <Slider {...settings}>
                {
                    product.LatestcartopcarData.map((e) => {
                        return <div className="ex-col">
                            <div className="ex-card">
                                <div className="ex-img">
                                    <img src={e.reviewImgUrl}alt=''></img>
                                </div>
                                <div className="ex-content">
                                    <h4>{e.reviewName}</h4>
                                    <div class="ex-con">
                                        <p><span className="ex-sl">By</span><span>{e.reviewManufacture}</span></p>
                                        <small className="ex-sl1">{e.reviewTime}</small>
                                    </div>
                                    <p>{e.reviewPara} </p>
                                </div>
                                <div className="ex-btn">
                                    <button>Read More</button>
                                </div>
                            </div>
                        </div>
                    })
                }
            </Slider>):('')
           }

           {
            video ? ( <Slider {...settings}>

                {
                    product.LatestcartopcarData.map((e)=>{
                        return <div className="vd-col">
                        <div className="vd-card">
                            <div className="vd-img">
                                <img src={e.videosImgUrl1}alt=''></img>
                            </div>
                            <div className="video-img">
                                <img src={e.videosImgUrl2}alt=""></img>
                            </div>
                            <div className="vd-content">
                                <h4>{e.videosName}</h4>
                                <div className="vd-con">
                                    <p><span className="vd-sl">By</span><span>CarWale Team</span></p>
                                    <small className="vd-sl1">{e.videosTime}</small>
                                </div>
                                <div className='vd-empty'>

                                </div>
                                <div className="vd-con">
                                    <p><i class="fa fa-eye" aria-hidden="true"></i>{e.videosView}</p>
                                    <p><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>{e.videosLike}</p>
                                </div>
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

export default Latestcar
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import product from '../product.json'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleLatestcartopcarData } from '../redux/Cardslice';





const Topcarindia = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handletopcarDiv = (carIndex) => {
    const item = product.LatestcartopcarData.find((e) => e.id === carIndex)
    dispatch(handleLatestcartopcarData(item))
    navigate(`/topcar/${carIndex}`)

  }
  var settings = {
    dots: false,
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
    <div className='top-container'>
      <h2 className="top-head">Top Cars In India</h2>
      <Slider {...settings}>
        {
          product.LatestcartopcarData.map((e) => {
            return <div className="top-col" onClick={() => { handletopcarDiv(e.id) }}>
              <div className="top-card">
                <div className="top-img">
                  <img src={e.topImgUrl} alt=''></img>
                </div>
                <div className="top-content">
                  <h4>{e.topName}</h4>
                  <p>{e.topDescribe}</p>
                </div>
              </div>

            </div>
          })
        }
      </Slider>
    </div>
  )
}

export default Topcarindia
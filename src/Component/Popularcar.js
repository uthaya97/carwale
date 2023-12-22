import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product from '../product.json'
import{useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { handlePoppularcar } from '../redux/Cardslice';

const Popularcar = () => {
  const navigate=useNavigate()
  const dispatch =useDispatch()
  const handlePopularDiv=(carindex)=>{
    const item=product.Popularcarr.find((e)=>e.id === carindex)
    dispatch(handlePoppularcar(item))
    navigate(`/popular/${carindex}`)
  }

  var settings = {
    dots: false,
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
    <div className='pop-container'>
      <h2 className="pop-head">Popular Used Cars</h2>
      <Slider {...settings}>
        {
          product.Popularcarr.map((e) => {
            return <div className="pop-col" >
              <div className="pop-card">
                <div className="pop-img">
                  <img src={e.imgUrl}onClick={ ()=>{handlePopularDiv(e.id)} }alt=''></img>
                </div>
                <div className="pop-content">
                  <h4>{e.name}</h4>
                  <p>{e.amount} <span>Starting Price</span></p>
                </div>
              </div>
            </div>
          })
        }
      </Slider>
    </div>
  )
}

export default Popularcar
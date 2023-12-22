import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import '../Css/Allbranddetail.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '@mui/material/Button';
import product from '../product.json'
const Allbranddetail = () => {
  const params = useParams()
  const data = useSelector((state) => state.cart)
  console.log(data);
  const item = product.Allbrand2.find((e) => e.id === parseInt(params.id))
  console.log(item);

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

    <div className='allbrand-detail-container'>
      <h3>{item.name} Cars</h3>
      <p>{item.name} car price starts at {item.imgAmount1} for the cheapest model which is Tiago and the price of most expensive model, which is {item.name} starts at {item.imgAmount1}. Tata offers 11 car models in India, including 2 cars in SUV category, 4 cars in Hatchback category, 3 cars in Compact SUV category, 2 cars in Compact</p>
      <div className='allbrand-detail-row'>
        <div className='allbrand-detail-col'>
          <div className='allbrand-detail-card'>
            <div className='allbrand-detail-img'>
              <img src={item.imgUrl1}></img>
            </div>
          </div>
        </div>
        <div className='allbrand-detail-col'>
          <div className='allbrand-detail-card'>
            <div className='allbrand-detail-content'>
              <h5>{item.imgName1}</h5>
              <p>{item.imgMileage1}</p>
              <div className='allbrand-detail-col2'>
                <h4>{item.imgAmount1}</h4>
                <small><i class="fa fa-star" aria-hidden="true"></i> {item.imgRate1} Rating</small>
              </div>
              <small>Avg.Ex-Showroom Price</small>
            </div>
          </div>
        </div>
      </div>
      <div className='allbrand-detail-row'>
        <div className='allbrand-detail-col'>
          <div className='allbrand-detail-card'>
            <div className='allbrand-detail-img'>
              <img src={item.imgUrl2}></img>
            </div>
          </div>
        </div>
        <div className='allbrand-detail-col'>
          <div className='allbrand-detail-card'>
            <div className='allbrand-detail-content'>
              <h5>{item.imgName2}</h5>
              <p>{item.imgMileage2}</p>
              <div className='allbrand-detail-col2'>
                <h4>{item.imgAmount2}</h4>
                <small><i class="fa fa-star" aria-hidden="true"></i> {item.imgRate2} Rating</small>
              </div>
              <small>Avg.Ex-Showroom Price</small>
            </div>
          </div>
        </div>
      </div>
      <div className='allbrand-detail-row'>
        <div className='allbrand-detail-col'>
          <div className='allbrand-detail-card'>
            <div className='allbrand-detail-img'>
              <img src={item.imgUrl3}></img>
            </div>
          </div>
        </div>
        <div className='allbrand-detail-col'>
          <div className='allbrand-detail-card'>
            <div className='allbrand-detail-content'>
              <h5>{item.imgName3}</h5>
              <p>{item.imgMileage3}</p>
              <div className='allbrand-detail-col2'>
                <h4>{item.imgAmount3}</h4>
                <small><i class="fa fa-star" aria-hidden="true"></i> {item.imgRate3} Rating</small>
              </div>
              <small>Avg.Ex-Showroom Price</small>
            </div>
          </div>
        </div>
      </div>
      <div className='allbrand-detail-row'>
        <div className='allbrand-detail-col'>
          <div className='allbrand-detail-card'>
            <div className='allbrand-detail-img'>
              <img src={item.imgUrl4}></img>
            </div>
          </div>
        </div>
        <div className='allbrand-detail-col'>
          <div className='allbrand-detail-card'>
            <div className='allbrand-detail-content'>
              <h5>{item.imgName4}</h5>
              <p>{item.imgMileage4}</p>
              <div className='allbrand-detail-col2'>
                <h4>{item.imgAmount4}</h4>
                <small><i class="fa fa-star" aria-hidden="true"></i> {item.imgRate4} Rating</small>
              </div>
              <small>Avg.Ex-Showroom Price</small>
            </div>
          </div>
        </div>
      </div>
      <div className='allbrand-detail-row'>
        <div className='allbrand-detail-col'>
          <div className='allbrand-detail-card'>
            <div className='allbrand-detail-img'>
              <img src={item.imgUrl5}></img>
            </div>
          </div>
        </div>
        <div className='allbrand-detail-col'>
          <div className='allbrand-detail-card'>
            <div className='allbrand-detail-content'>
              <h5>{item.imgName5}</h5>
              <p>{item.imgMileage5}</p>
              <div className='allbrand-detail-col2'>
                <h4>{item.imgAmount5}</h4>
                <small><i class="fa fa-star" aria-hidden="true"></i> {item.imgRate5} Rating</small>
              </div>
              <small>Avg.Ex-Showroom Price</small>
            </div>
          </div>
        </div>
      </div>
      <div className='allbrand-detail-row'>
        <div className='allbrand-detail-col'>
          <div className='allbrand-detail-card'>
            <div className='allbrand-detail-img'>
              <img src={item.imgUrl6}></img>
            </div>
          </div>
        </div>
        <div className='allbrand-detail-col'>
          <div className='allbrand-detail-card'>
            <div className='allbrand-detail-content'>
              <h5>{item.imgName6}</h5>
              <p>{item.imgMileage6}</p>
              <div className='allbrand-detail-col2'>
                <h4>{item.imgAmount6}</h4>
                <small><i class="fa fa-star" aria-hidden="true"></i> {item.imgRate6} Rating</small>
              </div>
              <small>Avg.Ex-Showroom Price</small>
            </div>
          </div>
        </div>
      </div>
      <div className='allbrand-detail-row'>
        <div className='allbrand-detail-col'>
          <div className='allbrand-detail-card'>
            <div className='allbrand-detail-img'>
              <img src={item.imgUrl7}></img>
            </div>
          </div>
        </div>
        <div className='allbrand-detail-col'>
          <div className='allbrand-detail-card'>
            <div className='allbrand-detail-content'>
              <h5>{item.imgName7}</h5>
              <p>{item.imgMileage7}</p>
              <div className='allbrand-detail-col2'>
                <h4>{item.imgAmount7}</h4>
                <small><i class="fa fa-star" aria-hidden="true"></i> {item.imgRate7} Rating</small>
              </div>
              <small>Avg.Ex-Showroom Price</small>
            </div>
          </div>
        </div>
      </div>
      <div className='allbrand-slider-row'>
        <h2 className="allbrand-compare-head">{item.name} Car Comparisons</h2>
        <Slider {...settings}>

          <div className="compare-col">
            <div className="compare">
              <div className="cpmpare-cd">
                <div className="compare-card">
                  <div className="compare-img">
                    <img src={item.imgUrl1} alt=''></img>
                  </div>
                  <div className="compare-content">
                    <h6>{item.imgName1}</h6>
                    <h6>{item.imgAmount1}</h6>
                    <span>Onwards</span>
                  </div>

                </div>
                <div className="vs">
                  <p>vs</p>
                </div>
                <div className="compare-card">
                  <div className="compare-img">
                    <img src={item.imgUrl2} alt=''></img>
                  </div>
                  <div className="compare-content">
                    <h6>{item.imgName2}</h6>
                    <h6>{item.imgAmount2}</h6>
                    <span>Onwards</span>
                  </div>

                </div>
              </div>
              <div className="compare-btn">
                <Button variant="outlined">Compare Now</Button>
              </div>


            </div>

          </div>
          <div className="compare-col">
            <div className="compare">
              <div className="cpmpare-cd">
                <div className="compare-card">
                  <div className="compare-img">
                    <img src={item.imgUrl3} alt=''></img>
                  </div>
                  <div className="compare-content">
                    <h6>{item.imgName3}</h6>
                    <h6>{item.imgAmount3}</h6>
                    <span>Onwards</span>
                  </div>

                </div>
                <div className="vs">
                  <p>vs</p>
                </div>
                <div className="compare-card">
                  <div className="compare-img">
                    <img src={item.imgUrl4} alt=''></img>
                  </div>
                  <div className="compare-content">
                    <h6>{item.imgName4}</h6>
                    <h6>{item.imgAmount4}</h6>
                    <span>Onwards</span>
                  </div>

                </div>
              </div>
              <div className="compare-btn">
                <Button variant="outlined">Compare Now</Button>
              </div>


            </div>

          </div>
          <div className="compare-col">
            <div className="compare">
              <div className="cpmpare-cd">
                <div className="compare-card">
                  <div className="compare-img">
                    <img src={item.imgUrl5} alt=''></img>
                  </div>
                  <div className="compare-content">
                    <h6>{item.imgName5}</h6>
                    <h6>{item.imgAmount5}</h6>
                    <span>Onwards</span>
                  </div>

                </div>
                <div className="vs">
                  <p>vs</p>
                </div>
                <div className="compare-card">
                  <div className="compare-img">
                    <img src={item.imgUrl6} alt=''></img>
                  </div>
                  <div className="compare-content">
                    <h6>{item.imgName6}</h6>
                    <h6>{item.imgAmount6}</h6>
                    <span>Onwards</span>
                  </div>

                </div>
              </div>
              <div className="compare-btn">
                <Button variant="outlined">Compare Now</Button>
              </div>


            </div>

          </div>
          <div className="compare-col">
            <div className="compare">
              <div className="cpmpare-cd">
                <div className="compare-card">
                  <div className="compare-img">
                    <img src={item.imgUrl7} alt=''></img>
                  </div>
                  <div className="compare-content">
                    <h6>{item.imgName7}</h6>
                    <h6>{item.imgAmount7}</h6>
                    <span>Onwards</span>
                  </div>

                </div>
                <div className="vs">
                  <p>vs</p>
                </div>
                <div className="compare-card">
                  <div className="compare-img">
                    <img src={item.imgUrl2} alt=''></img>
                  </div>
                  <div className="compare-content">
                    <h6>{item.imgName2}</h6>
                    <h6>{item.imgAmount2}</h6>
                    <span>Onwards</span>
                  </div>

                </div>
              </div>
              <div className="compare-btn">
                <Button variant="outlined">Compare Now</Button>
              </div>


            </div>

          </div>
          

        </Slider>
      </div>
      <div class="accordion accordion-flush" id="accordionFlushExample">
      <h3 className='heading'>FAQs About {item.name}</h3>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Performance
          </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body"><h3>Q: What is the top speed of {item.name}?</h3>
            <p>{item.name} has a top speed of 270 Kmph.</p></div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Specifications
          </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body"><h3>Q: What is the seating capacity in {item.name}?</h3><p>{item.name} has a seating capacity of 5 people.</p><h3>Q: What are the dimensions of {item.name}?</h3><p>The dimensions of {item.name} include its length of 5049 mm, width of 1937 mm and height of 1423 mm. The wheelbase of the {item.name} is 2950 mm.</p></div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            Safety
          </button>
        </h2>
        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body"><h3>Q: Does {item.name} get ABS?</h3><p>Yes, all variants of {item.name} have ABS. ABS is a great accident prevention technology, allowing drivers to steer while braking hard.</p></div>
        </div>
      </div>

    </div>

    </div>
  )
}

export default Allbranddetail
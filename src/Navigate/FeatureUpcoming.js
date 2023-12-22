import React from 'react'
import { useParams } from 'react-router-dom';
import product from '../product.json'
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Css/Featurecar2.css'
import tnx1 from '../images/f1.webp'
import tnx2 from '../images/f2.webp'
import tnx3 from '../images/f3.webp'
import tnx4 from '../images/f4.webp'
import tnx5 from '../images/f5.webp'
import tnx6 from '../images/f6.webp'
import tnx7 from '../images/f7.webp'
import tnx8 from '../images/f8.webp'

const FeatureUpcoming = () => {
    const params=useParams()
    console.log(params.id,params.name);
    const data = useSelector((state) => state.cart)
    console.log(data);
    const item = product.Carwaledata.find((e) => e.id === parseInt(params.id))
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
    <div className='trending-container'>
    <h2>{item.upcomeName}</h2>
    <div className='trending-row'>
      <div className='trending-col'>
        <div className='trending-card'>
          <div className='trending-img'>
            <img src={item.upcomeImgUrl}></img>
          </div>
        </div>
      </div>
      <div className='trending-col'>
        <div className='trending-card'>
          <h2>{item.upcomeAmount}</h2>
          <p>Avg. Ex-Showroom price</p>
          <div className='trending-emi'>
            <div>
              <p>Calculate your EMI</p>
              <p>EMI Calculator</p>
            </div>

            <div className='trending-emi-btn'>
              <Button variant="outlined">Get EMI Offers</Button>
            </div>
          </div>

          <p>Compare with Nexon [2020-2023]</p>

          <div className='trending-getyear-btn'>
            <button>Get Year-End Offers</button>
          </div>
        </div>
      </div>
    </div>

    <div className='trending-rates'>
      <h3>{item.upcomeName}</h3>
      <p>{item.upcomeName} price for the base model starts at {item.upcomeAmount} Lakh and the top model price goes upto Rs. 15.50 Lakh (Avg. ex-showroom). Nexon price for 68 variants is listed below.</p>
      <div className='trending-slider'>

        <Slider {...settings}>
          {
            product.Carwaledata.map((e) => {
              return <div className='trending-slider-img'>
                <img src={e.tatanx1}></img>
              </div>
            })
          }
        </Slider>

      </div>
      <table>
        <h3 className='heading'>{item.upcomeName} Car Specification</h3>
        <tr>
          <td>🏧 Price</td>
          <th>{item.upcomeAmount}</th>
        </tr>
        <tr>
          <td>🧳 Mileage</td>
          <th>{item.mileage}</th>
        </tr>
        <tr>
          <td>🚢 Engine</td>
          <th>{item.engine}</th>
        </tr>
        <tr>
          <td>🦺 Safety</td>
          <th>{item.safety}</th>
        </tr>
        <tr>
          <td>⛽ Fuel type</td>
          <th>{item.fueltype}</th>
        </tr>
        <tr>
          <td>🥏 Transmission</td>
          <th>{item.transmission}</th>
        </tr>
        <tr>
          <td>💺 Seating Capacity</td>
          <th>{item.seat}</th>
        </tr>
      </table>
    </div>
    <div className='trend'>
      <h3 className='heading'>How is the {item.upcomeName} Car</h3>

      <div className='trending-row'>
        <div className='trending-col'>
          <div className='trending-card'>
            <div className='trending-icon-name'>
              <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
              <p>Pros</p>
            </div>
            <ul className='trending-list'>
              <li>The {item.upcomeName} styling is extensively tweaked to make it look attractive and sharp.</li>
              <li>Six airbags (standard), all seats have three-point seat belts, expect a high safety rating.</li>
              <li>The now all-black cabin gets revised styling elements and a long list of features.</li>
              <li>Strong mid-range, solid high-speed cruisability, frequent gear shifts are not needed. </li>
            </ul>
          </div>

        </div>
        <div className='trending-col'>
          <div className='trending-card'>
            <div className='trending-icon-name'>
              <i class="fa fa-thumbs-o-down dislike" aria-hidden="true"></i>
              <p>Cons</p>
            </div>
            <ul className='trending-list'>
              <li>Compared to its segment rivals, the fit and finish in some areas is still lacking.</li>
              <li>The {item.upcomeName} diesel engine is not as refined as the segment competitors.</li>
              <li>The well-judged suspension setup lends an overall comfortable ride.engine</li>
              <li>The Nexon's diesel engine is not as refined as the segment competitors.</li>

            </ul>
          </div>

        </div>
      </div>
    </div>
    <table className='mileage'>
      <h3 className='heading'>{item.upcomeName} Mileage</h3>
      <tr>
        <th>Powertrain</th>
        <th>ARAI Mileage</th>
        <th>User Report Mileage</th>
      </tr>
      <tr>
        <td>Petrol - Manual(1199 cc)</td>
        <td>{item.mile1}</td>
        <td>17.25 kmpl</td>
      </tr>
      <tr>
        <td>Diesel - Manual(1497 cc)</td>
        <td>{item.mile2}</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Petrol - Automatic (AMT)(1199 cc)</td>
        <td>{item.mile3}</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Petrol - Automatic (DCT)(1199 cc)</td>
        <td>{item.mile4}</td>
        <td>17.4 kmpl</td>
      </tr>
      <tr>
        <td>Diesel - Automatic (AMT)(1497 cc)</td>
        <td>{item.mile5}</td>
        <td>-</td>
      </tr>
    </table>
    <div className='imagess'>
        <h3>{item.upcomeName} Images</h3>
            <div className='rowss'>
                <div className='colss1'>
                    <div className='cardss'>
                    <img src={item.upcomeImgUrl}></img>
                    </div>
                </div>
                <div className='colss2'>
                    <div className='cardss'>
                        <img src={tnx1}></img>
                    </div>
                </div>
                <div className='colss3'>
                    <div className='cardss'>
                    <img src={tnx2}></img>
                    </div>
                </div>
                <div className='colss4'>
                    <div className='cardss'>
                    <img src={tnx3}></img>
                    </div>
                </div>
                <div className='colss5'>
                    <div className='cardss'>
                    <img src={tnx4}></img>
                    </div>
                </div>
                <div className='colss6'>
                    <div className='cardss'>
                    <img src={tnx5}></img>
                    </div>
                </div>
                <div className='colss7'>
                    <div className='cardss'>
                    <img src={tnx6}></img>
                    </div>
                </div>
                <div className='colss8'>
                    <div className='cardss'>
                    <img src={tnx7}></img>
                    </div>
                </div>
                <div className='colss9'>
                    <div className='cardss'>
                    <img src={tnx8}></img>
                    </div>
                </div>
            </div>
      </div>
    <div class="accordion accordion-flush" id="accordionFlushExample">
      <h3 className='heading'>FAQs About {item.upcomeName}</h3>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Performance
          </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body"><h3>Q: What is the top speed of {item.upcomeName}?</h3>
            <p>{item.upcomeName} has a top speed of 270 Kmph.</p></div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Specifications
          </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body"><h3>Q: What is the seating capacity in {item.upcomeName}?</h3><p>{item.upcomeName} has a seating capacity of {item.seat} people.</p><h3>Q: What are the dimensions of Porsche Panamera?</h3><p>The dimensions of {item.upcomeName} include its length of 5049 mm, width of 1937 mm and height of 1423 mm. The wheelbase of the {item.upcomeName} is 2950 mm.</p></div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            Safety
          </button>
        </h2>
        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body"><h3>Q: Does {item.upcomeName} get ABS?</h3><p>Yes, all variants of {item.upcomeName} have ABS. ABS is a great accident prevention technology, allowing drivers to steer while braking hard.</p></div>
        </div>
      </div>

    </div>
  </div>
  )
}

export default FeatureUpcoming
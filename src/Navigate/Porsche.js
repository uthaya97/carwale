import React from 'react'
import '../Css/Porsche.css'
import Button from '@mui/material/Button';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product from '../product.json'
const Porsche = () => {

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 1,
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
        <div className='pors-container'>
            <h2>Porsche Panamera</h2>
            <div className='pors-rating'>
                <div>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <p>Rating</p>
                </div>
            </div>
            {/* <div className='pors-btns'>
                <Button variant="outlined" className='btns'><a href='*'></a>OVERREVIEW</Button>
                <Button variant="outlined" className='btns'><a href='*'></a>VARIANTS</Button>
                <Button variant="outlined" className='btns'><a href='*'></a>OFFERS</Button>
                <Button variant="outlined" className='btns'><a href='*'></a>KEY SPACES</Button>
                <Button variant="outlined" className='btns'><a href='*'></a>COLORS</Button>
                <Button variant="outlined" className='btns'><a href='*'></a>NEWS</Button>
                <Button variant="outlined" className='btns'><a href='*'></a>USED CARD</Button>


            </div> */}
            <div className='pors-row'>
                <div className='pors-col'>
                    <Slider {...settings}>
                        {
                            product.Carwaledata.map((e) => {
                                return <div className='pors-img'>
                                    <img src={e.porcImgUrl}></img>
                                </div>
                            })
                        }
                    </Slider>
                </div>
                <div className='pors-col'>
                    <div className='pors-card'>
                        <h2>Rs. 1.68 Crore</h2>
                        <p>Avg. Ex-Showroom price</p>
                        <div className='pors-emi'>
                            <div>
                                <p>Calculate your EMI</p>
                                <p>EMI Calculator</p>
                            </div>

                            <div className='pors-emi-btn'>
                                <Button variant="outlined">Get EMI Offers</Button>
                            </div>
                        </div>
                        <div className='pors-getyear-btn'>
                            <button>Get Year-End Offers</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='panamera-price'>
                <h2>Porsche Panamera Price</h2>
                <p className='panamer-para'>Porsche Panamera price for the base model is Rs. 1.68 Crore (Avg. ex-showroom). Panamera price for 1 variant is listed below.</p>
                <div className='panamera-price-drtail'>
                    <div>
                        <p>Panamera G3</p>
                        <p>2894 cc, Petrol, Automatic (DCT), 3...</p>
                    </div>
                    <div>
                        <p>Ex-Showroom-Price</p>
                        <h4>Rs. 1.68 Crore</h4>
                    </div>
                    <div>
                        <small>add to Compare</small>
                        <p>Show price in my city | Get Offers</p>
                    </div>
                </div>
            </div>
            <div className='panarama-specification'>
                <h2>Porsche Panamera Car Specifications</h2>
                <div className='panarama-sepci'>
                    <div className='panasss'>
                        <p>Fuel Type</p>
                        <h5>Petrol</h5>
                    </div>
                    <div className='panasss'>
                        <p>Engine</p>
                        <h5>2894 cc</h5>
                    </div>
                    <div className='panasss'>
                        <p>Power and Torque</p>
                        <h5>349 bhp & 500 Nm</h5>
                    </div>
                    <div className='panasss'>
                        <p>DriveTrain</p>
                        <h5>RWD</h5>
                    </div>
                    <div className='panasss'>
                        <p>Acceleration</p>
                        <h5>5.6 seconds</h5>
                    </div>
                    <div className='panasss'>
                        <p>Top Speed</p>
                        <h5>270 kmph</h5>
                    </div>
                </div>

            </div>
            <div className='panarama-summary'>
                <h2>All New Porsche Panamera Summary</h2>
                <div className='panarama-sum'>
                    <small>Price</small>
                    <p>Porsche Panamera price is Rs. 1.68 Crore.</p>
                    <p>When was the Porsche Panamera launched?</p>
                </div>
            </div>
            <div className='panarama-pros'>
                <h2>How is the Porsche Panamera car?</h2>
                <div className='panarama-pros-row'>
                    <div className='panama-prs-col'>
                        <div className='panama-prs-card'>
                            <div className='panama-icon-name'>
                                <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                                <p>Pros</p>
                            </div>
                            <ul className='panama-prs-list'>
                                <li>Snob value.</li>
                                <li>Restyled exterior and interior design elements.</li>
                            </ul>
                        </div>

                    </div>
                    <div className='panama-prs-col'>
                        <div className='panama-prs-card'>
                            <div className='panama-icon-name'>
                                <i class="fa fa-thumbs-o-down dislike" aria-hidden="true"></i>
                                <p>Pros</p>
                            </div>
                            <ul className='panama-prs-list'>
                                <li>Steep asking price.</li>
                                <li>Luxury sports sedans are a shrinking lot.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Performance
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body"><h3>Q: What is the top speed of Porsche Panamera?</h3>
                            <p>Porsche Panamera has a top speed of 270 Kmph.</p></div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Specifications
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body"><h3>Q: What is the seating capacity in Porsche Panamera?</h3><p>Porsche Panamera has a seating capacity of 4 people.</p><h3>Q: What are the dimensions of Porsche Panamera?</h3><p>The dimensions of Porsche Panamera include its length of 5049 mm, width of 1937 mm and height of 1423 mm. The wheelbase of the Porsche Panamera is 2950 mm.</p></div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Safety
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body"><h3>Q: Does Porsche Panamera get ABS?</h3><p>Yes, all variants of Porsche Panamera have ABS. ABS is a great accident prevention technology, allowing drivers to steer while braking hard.</p></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Porsche
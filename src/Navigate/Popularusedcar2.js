
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import product from '../product.json'
import uthaya from '../images/35.png'
import Button from '@mui/material/Button';
const Popularusedcar2 = () => {
  const params = useParams()
  const data = useSelector((state) => state.cart)
  console.log(data);
  const item = product.Popularcarr.find((e) => e.id === parseInt(params.id))
  console.log(item);
  console.log(uthaya);


  return (
    <div className='popuu-container'style={{ width: "80%", margin: "auto", paddingTop: "7%",fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }}>
      <h3 style={{paddingBottom:"15px"}}>{item.name}</h3>
      <div className='pors-row' >
        
        <div className='pors-col'>

          <div className='pors-img'>
            <img src={item.imgUrl}></img>
          </div>

        </div>
        <div className='pors-col'>
          <div className='pors-card'>
            <h2>{item.amount}</h2>
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
      <div class="accordion accordion-flush" id="accordionFlushExample">
      <h3 className='heading'>FAQs About {item.upcomeName}</h3>
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
          <div class="accordion-body"><h3>Q: What is the seating capacity in {item.name}?</h3><p>{item.name} has a seating capacity of {item.seat} people.</p><h3>Q: What are the dimensions of Porsche Panamera?</h3><p>The dimensions of {item.name} include its length of 5049 mm, width of 1937 mm and height of 1423 mm. The wheelbase of the {item.name} is 2950 mm.</p></div>
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

export default Popularusedcar2


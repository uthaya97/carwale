import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../Css/Topcar2.css'
import Findthecar from '../Component/Findthecar';
import Topcarindia from '../Component/Topcarindia';
import Allbrands from '../Component/Allbrands';
import product from '../product.json'
const Topcar2 = () => {
  const params = useParams()
  const data = useSelector((state) => state.cart)
  console.log(data);
  const item = product.LatestcartopcarData.find((e) => e.id === parseInt(params.id))
  console.log(item);

  return (
    <div className='topcars-container'>
      <div className='topcars-section'>
        <h2>{item.topName}</h2>
        <p>Are you planning on buying a SUV car? Well, we know that bodystyle is one of the most crucial things while buying a car and with so many options available out there, it gets really difficult to find a good car which suits your pocket. Hence, we have put together a complete list of best SUV cars.</p>
        <div className='topcars-row'>
          <div className='topcars-col'>
            <div className='topcars-card'>
              <div className='topcars-img'>
                <img src={item.imgUrl1}></img>
              </div>
              <div className='topcars-content'>
                <h5>{item.imgName1}</h5>
                <h4>{item.imgAmount1}</h4>
                <small>Avg. Ex-Showroom price</small>
              </div>
            </div>
          </div>
          <div className='topcars-col'>
            <div className='topcars-card'>
              <div className='topcars-img'>
                <img src={item.imgUrl2}></img>
              </div>
              <div className='topcars-content'>
                <h5>{item.imgName2}</h5>
                <h4>{item.imgAmount2}</h4>
                <small>Avg. Ex-Showroom price</small>
              </div>
            </div>
          </div>
          <div className='topcars-col'>
            <div className='topcars-card'>
              <div className='topcars-img'>
                <img src={item.imgUrl3}></img>
              </div>
              <div className='topcars-content'>
                <h5>{item.imgName3}</h5>
                <h4>{item.imgAmount3}</h4>
                <small>Avg. Ex-Showroom price</small>
              </div>
            </div>
          </div>
          <div className='topcars-col'>
            <div className='topcars-card'>
              <div className='topcars-img'>
                <img src={item.imgUrl4}></img>
              </div>
              <div className='topcars-content'>
                <h5>{item.imgName4}</h5>
                <h4>{item.imgAmount4}</h4>
                <small>Avg. Ex-Showroom price</small>
              </div>
            </div>
          </div>
          <div className='topcars-col'>
            <div className='topcars-card'>
              <div className='topcars-img'>
                <img src={item.imgUrl5}></img>
              </div>
              <div className='topcars-content'>
                <h5>{item.imgName5}</h5>
                <h4>{item.imgAmount5}</h4>
                <small>Avg. Ex-Showroom price</small>
              </div>
            </div>
          </div>
          <div className='topcars-col'>
            <div className='topcars-card'>
              <div className='topcars-img'>
                <img src={item.imgUrl6}></img>
              </div>
              <div className='topcars-content'>
                <h5>{item.imgName6}</h5>
                <h4>{item.imgAmount6}</h4>
                <small>Avg. Ex-Showroom price</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Allbrands/>
      <Findthecar />
      <Topcarindia />
    </div>
  )
}

export default Topcar2
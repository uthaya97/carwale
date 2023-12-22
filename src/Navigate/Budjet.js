import React from 'react'
import '../Css/Budjet.css'
import { useParams } from 'react-router-dom'
import product from '../product.json'
import Allbrands from '../Component/Allbrands'
import Findthecar from '../Component/Findthecar'
import Topcarindia from '../Component/Topcarindia'

const Budjet = () => {
    const params=useParams()
    console.log(params.name);
    const item =product.Bodytype.find((e)=>e.id===parseInt(params.id))
    console.log(item);
  return (
    <>
    <div className='budjet-container'>
        <h3>{item.btn}</h3>
        <div className='budjet-row'>
            <div className='budjet-col'>
                <div className='budjet-card'>
                    <div className='budjet-img'>
                        <img src={item.imgUrl1}></img>
                    </div>
                    <div className='budjet-content'>
                        <p>{item.imgName1}</p>
                        <h5>{item.imgAmount1}</h5>
                        <p>{item.imgMileage1}</p>
                        <small>Avg Ex-Showroom Price </small>
                    </div>
                </div>
            </div>
            <div className='budjet-col'>
                <div className='budjet-card'>
                    <div className='budjet-img'>
                        <img src={item.imgUrl2}></img>
                    </div>
                    <div className='budjet-content'>
                        <p>{item.imgName2}</p>
                        <h5>{item.imgAmount2}</h5>
                        <p>{item.imgMileage2}</p>
                        <small>Avg Ex-Showroom Price </small>
                    </div>
                </div>
            </div>
            <div className='budjet-col'>
                <div className='budjet-card'>
                    <div className='budjet-img'>
                        <img src={item.imgUrl3}></img>
                    </div>
                    <div className='budjet-content'>
                        <p>{item.imgName3}</p>
                        <h5>{item.imgAmount3}</h5>
                        <p>{item.imgMileage3}</p>
                        <small>Avg Ex-Showroom Price </small>
                    </div>
                </div>
            </div>
            <div className='budjet-col'>
                <div className='budjet-card'>
                    <div className='budjet-img'>
                        <img src={item.imgUrl4}></img>
                    </div>
                    <div className='budjet-content'>
                        <p>{item.imgName4}</p>
                        <h5>{item.imgAmount4}</h5>
                        <p>{item.imgMileage4}</p>
                        <small>Avg Ex-Showroom Price </small>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <Allbrands/>
    <Findthecar/>
    <Topcarindia/>
    </>
  )
}

export default Budjet
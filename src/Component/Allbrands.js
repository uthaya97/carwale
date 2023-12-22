import React, { useEffect, useState } from 'react'
// import { Allbrand1 } from '../Data/Allbrand1'
// import { Allbrand2 } from '../Data/Allbrand2'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { handleBrand2 } from '../redux/Cardslice'
import product from '../product.json'
const Allbrands = () => {
    const [brandShow, setBrandShow] = useState(true)
    const navigate =useNavigate()
    const dispatch=useDispatch()
    const hanldeBrand=(carindex,carName)=>{
        const item=product.Allbrand2.find((e)=>e.id === carindex)
        dispatch(handleBrand2(item))
        navigate(`/brand/${carindex}/${carName}`)
    }
    const handleMoreBtn = () => {
        setBrandShow(false)
    }
    const handleLessBtn = () => {
        setBrandShow(true)
    }
    return (
        <div className='allbrand-container'>
            <h2>All Brands</h2>
            {
                brandShow ? (   <div>
                    <div className='allbrand-row'>
                        {
                            
                            product.Allbrand1.map((e) => {
                                return <div className='allbrand-col'onClick={()=>{hanldeBrand(e.id,e.name)}}>
                                    <div className='allbrand-card'>
                                        <div className='allbrand-img'>
                                            <img src={e.imgUrl}alt=''></img>
                                            <h6>{e.name}</h6>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
    
                    </div>
                    <div className='allbrand-btn'>
                        <button onClick={handleMoreBtn}>View More Brand</button>
                    </div>
                </div>):( <div>
                <div className='allbrand-row1'>
                    {
                       product.Allbrand2.map((e) => {
                            return <div className='allbrand-col1'onClick={()=>{hanldeBrand(e.id,e.name)}}>
                                <div className='allbrand-card1'>
                                    <div className='allbrand-img1'>
                                        <img src={e.imgUrl}alt=''></img>
                                        <h6>{e.name}</h6>
                                    </div>
                                </div>
                            </div>
                        })
                    }

                </div>
                <div className='allbrand-btn1'>
                    <button onClick={handleLessBtn}>View Less Brands</button>
                </div>
            </div>)
            }
         
           
        </div>
    )
}

export default Allbrands
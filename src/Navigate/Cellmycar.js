import React from 'react'
import '../Css/Cellmycar.css'
import Topcarindia from '../Component/Topcarindia'
import Allbrands from '../Component/Allbrands'
import Findthecar from '../Component/Findthecar'
import Featurecar from '../Component/Featurecar'
const Cellmycar = () => {
  return (
    <>
      <div className='cellmycar-container'>
        <h2>New Cars</h2>
        <p>Are you planning on buying a new car? Well, we know that with so many options available out there, it gets really difficult to find a good car which suits your need. Hence, we have put together a complete list of new cars. Maruti Suzuki, Tata and Hyundai are the 3 most popular car brands. The 5 most popular cars are Tata Nexon, Maruti Suzuki Fronx, Mahindra Scorpio N, Hyundai Exter and Mahindra Thar.</p>

      </div>
      <Allbrands />
      <Findthecar />
      <Featurecar />
      <Topcarindia />
    </>
  )
}

export default Cellmycar
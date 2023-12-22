import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <section className="banner-section">
            <div className="banner">
                <h2>FIND THE RIGHT CAR</h2>
                <div className="ban">
                    <input type="text" placeholder="Type to select car name"></input>
                    <button >Search</button>
                </div>
                <div className='banner-link'>
                   <Link className='eg' to='/porsche'> <small className='eg'>e.g porsche panamera</small></Link>
                    <Link className='eg'to='/sell-my-car'><small>New car discount | <small>Help Me Find A Car | <small>Sell My Car</small></small></small></Link>
                </div>
            </div>
        </section>
    )
}

export default Banner
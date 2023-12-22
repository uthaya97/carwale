import React from 'react'
import head from '../images/end1.svg'

const Header = () => {
    return (
        <div className="menu-bar">
            <div className="main-name">
                <img src={head} style={{ width: "80%" }}alt=''></img>
            </div>
            <input type="checkbox" id="toggle"></input>
            <label for="toggle"><i class="fa fa-bars menu" aria-hidden="true"></i></label>


            <nav className="navigation">
                <ul className="nav-bar">
                    <li><a href="#banner-section">NEWCAR</a></li>
                    <li><a href="#about-section">USED CAR</a></li>
                    <li><a href="#service-section">REVIEW & NEWS</a></li>

                
                        <div className='search'>
                            <input type='text' placeholder='search'></input>
                        </div>
                        <div className='header-icon'>
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </div>

                        <div className='header-icons'>
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        <i class="fa fa-folder-open-o" aria-hidden="true"></i>
                        <i class="fa fa-user-circle" aria-hidden="true"></i>
                        </div>
                    
                </ul>
            </nav>
        </div>
    )
}

export default Header
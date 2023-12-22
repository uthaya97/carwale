import React from 'react'
import foot1 from '../images/play1.png'
import foot2 from '../images/apl.webp' 
const Fotter = () => {
    return (
        <div className="end-container">
            {/* <div className="end-row">
                <div className="head">
                    <div className='head-col'>
                    <img src="images/end1.svg"></img>
                    </div>
                    <div className='head-col'>
                    <img src="images/end2.png"></img>
                    </div>
                    <div className='head-col'>
                    <img src="images/end3.png"></img>
                    </div>
                    <div className='head-col'>
                    <img src="images/end3.png"></img>
                    </div>
                    <div className='head-col'>
                    <img src="images/end1.svg"></img>
                    </div>
                </div>
            </div> */}
            <div className="end-row2">
                <div className="end-col1">
                    <div className="end-card">
                        <p>Languages: English</p>
                        <p>About Us <span>Terms & Condition</span></p>
                        <p>Careers <span>Advertise</span></p>

                    </div>
                </div>
                <div className="end-col2">
                    <div className="end-card2">
                        <p>Download Mobile App</p>
                        <div id="end-img">
                            <img src={foot1} style={{width:"100",height:"40px"}}alt=''></img>
                            <img src={foot2} style={{width:"100",height:"40px"}}alt=''></img>
                        </div>
                        <p>Connect with us</p>
                        <div className="end-icon">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                            <i class="fa fa-youtube-play" aria-hidden="true"></i>
                            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                            <i class="fa fa-instagram" aria-hidden="true"></i>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fotter
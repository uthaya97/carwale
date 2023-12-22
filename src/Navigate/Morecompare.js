import React, { useState } from 'react'
import '../Css/Morecompare.css'
import com from '../images/comparecar.svg'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import maruthi from '../images/1.jpg'
import tata from '../images/2.jpg'
import hyundai from '../images/3.jpg'
import product from '../product.json'




const Morecompare = () => {



    const [open, setOpen] = React.useState(false);
    const [card, setCard] = useState(true)
    const [card2, setCard2] = useState(true)
    const [card3, setCard3] = useState(true)
    const [compare,setCompare]=useState(false)
    const [state, setState] = useState()
    const [state1, setState1] = useState()
    const [state2, setState2] = useState()



    const handleCompareBtn=()=>{
        setCompare(true)
    }
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => setOpen(false);

    const handleDiv1 = () => {
        setCard(false)
    }
    const handleDiv2 = () => {
        setCard2(false)
    }
    const handleDiv3 = () => {
        setCard3(false)
    }
    const style = {
        position: 'fixed',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '40%',
        bgcolor: 'background.paper',

    };
    const handleHyundai = (carindex) => {
        const item = product.Hyundai.find((e) => e.id === carindex)
        console.log(carindex, item);
        setState2(item)
        setOpen(false)
        
    }
    const handleMaruthi = (carindex) => {
        const item = product.Maruthi.find((e) => e.id === carindex)
        console.log(carindex, item);
        setState(item)
        setOpen(false)
        
    }
    const handleTata = (carindex) => {
        const item = product.Tata.find((e) => e.id === carindex)
        console.log(carindex, item);
        setState1(item)
        setOpen(false)
    
    }
    return (
        <div className='morecompare-container'>
            <h3>Compare Cars</h3>
            <p>Important decisions like car purchase are often confusing. The “Compare Cars” tool from CarWale is designed to help you in car comparison on the basis of prices, mileage, power, performances and hundreds of other features and specifications. Our car comparison tool now comes with enhanced capabilities to compare cars at version level.</p>

            <div>
                <div className='morecompare-row'>
                    <div className='morecompare-col' onClick={handleDiv1}>
                        {
                            card ? (<div><div className='morecompare-card'>
                                <Button onClick={handleOpen}> <img src={com}></img></Button>
                            </div>
                                <p>Select Car</p></div>) : (<div className='more-detail'>
                                    <div className='more-img'>
                                        <img src={state?.carImgUrl}></img>
                                    </div>
                                    <div>
                                        <h3>{state?.carName}</h3>
                                        <p>{state?.carAmount}</p>
                                        <small>Avg Ex-Showroom price</small>
                                    </div>
                                </div>)
                        }


                    </div>
                    <div className='morevs'>
                        <p>vs</p>
                    </div>
                    <div className='morecompare-col' onClick={handleDiv2}>
                        {
                            card2 ? (<div>
                                <div className='morecompare-card'>
                                    <Button onClick={handleOpen}> <img src={com}></img></Button>
                                </div>
                                <p>Select Car</p>
                            </div>) : (<div className='more-detail'>
                                <div className='more-img'>
                                    <img src={state1?.carImgUrl}></img>
                                </div>
                                <div>
                                    <h3>{state1?.carName}</h3>
                                    <p>{state1?.carAmount}</p>
                                    <small>Avg Ex-Showroom price</small>
                                </div>
                            </div>)
                        }


                    </div>
                    <div className='morevs'>
                        <p>vs</p>
                    </div>

                    <div className='morecompare-col' onClick={handleDiv3}>
                        {
                            card3 ? (<div>
                                <div className='morecompare-card'>
                                    <Button onClick={handleOpen}> <img src={com}></img></Button>
                                </div>
                                <p>Select Car</p>
                            </div>) : (<div className='more-detail'>
                                <div className='more-img'>
                                    <img src={state2?.carImgUrl}></img>
                                </div>
                                <div>
                                    <h3>{state2?.carName}</h3>
                                    <p>{state2?.carAmount}</p>
                                    <small>Avg Ex-Showroom price</small>
                                </div>
                            </div>)
                        }


                    </div>
                </div>
                <div className='morecompare-btn'>
                    <button onClick={handleCompareBtn}>Compare</button>
                </div>

               {
                compare ? ( <div className='comparecar-detail'>
                <ul className='orderlist'>
                    <div className='compare-order'>
                        <li><a href='#sepecific'>SPECIFICATION</a></li>
                        <li><a href='#feature'>FEATURES</a></li>
                        <li><a href='#'>BROCHURE</a></li>
                        <li><a href='#color'>COLOURS</a></li>
                        <li><a href='#'>USER REVIEWS</a></li>
                    </div>
                    <div className='input-compare'>
                        <input placeholder='search here'></input>
                    </div>
                </ul>
                <div class="accordion accordion-flush" id="accordionFlushExample ">
                    <h3 className='heading'>Specification and Finance</h3>
                    <div class="accordion-item" id='sepecific'>
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Engine & Transmission
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <table>
                                    <tr>
                                        <th>Engine<br></br><small className='small'>(Know more)</small></th>
                                        <td>6498 cc, 12 Cylinders In V Shape, 6 Valves/Cylinder, DOHC</td>
                                        <td>6498 cc, 12 Cylinders In V Shape, 6 Valves/Cylinder, DOHC</td>
                                        <td>6498 cc, 12 Cylinders In V Shape, 6 Valves/Cylinder, DOHC</td>
                                    </tr>
                                    <tr>
                                        <th>Engine Type<br></br><small className='small'>(Know more)</small></th>
                                        <td>V12 NA 6.5 l</td>
                                        <td>6.8L V12 engine</td>
                                        <td>6.8L engine</td>
                                    </tr>
                                    <tr>
                                        <th>Fuel Type<br></br><small className='small'>(Know more)</small></th>
                                        <td>Hybrid (Electric + Petrol)</td>
                                        <td>Petrol</td>
                                        <td>Petrol</td>
                                    </tr>
                                    <tr>
                                        <th>Max Power (bhp@rpm)<br></br><small className='small'>(Know more)</small></th>
                                        <td>814 bhp @ 9250 rpm</td>
                                        <td>563 bhp @ 5000 rpm</td>
                                        <td>563 bhp @ 5000 rpm</td>
                                    </tr>
                                    <tr>
                                        <th>Max Torque (Nm@rpm)<br></br><small className='small'>(Know more)</small></th>
                                        <td>113 Nm @ 4400 rpm</td>
                                        <td>113.8 Nm @ 4400 rpm</td>
                                        <td>113 Nm @ 4400 rpm</td>
                                    </tr>
                                    <tr>
                                        <th>Mileage (ARAI) (kmpl)<br></br><small className='small'>(Know more)</small></th>
                                        <td>7.1</td>
                                        <td>8.4</td>
                                        <td>9.1</td>
                                    </tr>
                                    <tr>
                                        <th>Driving Range (Km)<br></br><small className='small'>(Know more)</small></th>
                                        <td>834</td>
                                        <td>806</td>
                                    </tr>
                                    <tr>
                                        <th>Drivetrain<br></br><small className='small'>(Know more)</small></th>
                                        <td>FWD</td>
                                        <td>FWD</td>
                                        <td>FWD</td>
                                    </tr>

                                    <tr>
                                        <th>Transmission<br></br><small className='small'>(Know more)</small></th>
                                        <td>Automatic (AMT) - 8 Gears, Paddle Shift, Sport Mode</td>
                                        <td>Automatic (TC) - 6 Gears, Manual Override, Sport Mode</td>
                                        <td>Automatic (AMT) - 8 Gears, Paddle Shift, Sport Mode</td>
                                    </tr>
                                    <tr>
                                        <th>Emission Standard<br></br><small className='small'>(Know more)</small></th>
                                        <td>	BS6 Phase 2</td>
                                        <td>	BS6 Phase 2</td>
                                        <td>	BS6 Phase 2</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Dimensions & Weight
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <table>
                                    <tr>
                                        <th>Length (mm)<br></br><small className='small'>(Know more)</small></th>
                                        <td>4947</td>
                                        <td>5730</td>
                                        <td>4987</td>
                                    </tr>
                                    <tr>
                                        <th>Width (mm)<br></br><small className='small'>(Know more)</small></th>
                                        <td>2266</td>
                                        <td>2411</td>
                                        <td>2018</td>
                                    </tr>
                                    <tr>
                                        <th>Height (mm)<br></br><small className='small'>(Know more)</small></th>
                                        <td>1147</td>
                                        <td>1214</td>
                                        <td>1098</td>
                                    </tr>
                                    <tr>
                                        <th>Wheelbase (mm)<br></br><small className='small'>(Know more)</small></th>
                                        <td>2779</td>
                                        <td>3552</td>
                                        <td>2345</td>
                                    </tr>
                                    <tr>
                                        <th>Ground Clearance (mm)<br></br><small className='small'>(Know more)</small></th>
                                        <td>1234</td>
                                        <td>1343</td>
                                        <td>1345</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Suspensions, Brakes, Steering & Tyres
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <table>
                                    <tr>
                                        <th>Front Suspension<br></br><small className='small'>(Know more)</small></th>
                                        <td>Double wishbone front axle</td>
                                        <td>Horizontal monotube damper with push rod system</td>
                                        <td>Double wishbone front axle</td>
                                    </tr>
                                    <tr>
                                        <th>Rear Suspension<br></br><small className='small'>(Know more)</small></th>
                                        <td>Horizontal monotube damper with push rod system</td>
                                        <td>multi-link rear axle</td>
                                        <td>Horizontal monotube damper with push rod system</td>
                                    </tr>
                                    <tr>
                                        <th>Front Brake Type<br></br><small className='small'>(Know more)</small></th>
                                        <td>Disc</td>
                                        <td>Ventilated Disc</td>
                                    </tr>
                                    <tr>
                                        <th>Rear Brake Type<br></br><small className='small'>(Know more)</small></th>
                                        <td>Drum</td>
                                        <td>Drum</td>
                                    </tr>
                                    <tr>
                                        <th>Steering Type<br></br><small className='small'>(Know more)</small></th>
                                        <td>Power assisted (Electric)</td>
                                        <td>Power assisted (Electric)</td>
                                    </tr>
                                    <tr>
                                        <th>Wheels<br></br><small className='small'>(Know more)</small></th>
                                        <td>Steel Rims</td>
                                        <td>Steel Rims</td>
                                    </tr>
                                    <tr>
                                        <th>Front Tyres<br></br><small className='small'>(Know more)</small></th>
                                        <td>	265 / 35 R20</td>
                                        <td>	255 / 35 R20</td>
                                        <td>	265 / 35 R20</td>
                                    </tr>
                                    <tr>
                                        <th>Rear Tyres<br></br><small className='small'>(Know more)</small></th>
                                        <td>345 / 30 R21</td>
                                        <td>285 / 30 R21</td>
                                        <td>345 / 30 R21</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="accordion accordion-flush" id="accordionFlushExample ">
                    <h3 className='heading' id='feature'>Features</h3>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Saftey
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <table>
                                    <tr>
                                        <th>Overspeed Warning<br></br><small className='small'>(Know more)</small></th>
                                        <td>---</td>
                                        <td>1 beep over 80kmph, Continuous beeps over 120kmph</td>
                                    </tr>
                                    <tr>
                                        <th>Lane Departure Warning<br></br><small className='small'>(Know more)</small></th>
                                        <td>---</td>
                                        <td>✔</td>
                                    </tr>
                                    <tr>
                                        <th>Emergency Brake Light Flashing<br></br><small className='small'>(Know more)</small></th>
                                        <td>---</td>
                                        <td>✔</td>
                                    </tr>
                                    <tr>
                                        <th>Puncture Repair Kit<br></br><small className='small'>(Know more)</small></th>
                                        <td>---</td>
                                        <td>✔</td>
                                    </tr>
                                    <tr>
                                        <th>Forward Collision Warning (FCW)<br></br><small className='small'>(Know more)</small></th>
                                        <td>---</td>
                                        <td>✔</td>
                                    </tr>
                                    <tr>
                                        <th>Automatic Emergency Braking (AEB)<br></br><small className='small'>(Know more)</small></th>
                                        <td>---</td>
                                        <td>✔</td>
                                    </tr>
                                    <tr>
                                        <th>High-beam Assist<br></br><small className='small'>(Know more)</small></th>
                                        <td>---</td>
                                        <td>✔</td>
                                    </tr>
                                    <tr>
                                        <th>Blind Spot Detection<br></br><small className='small'>(Know more)</small></th>
                                        <td>---</td>
                                        <td>✔</td>
                                    </tr>

                                    <tr>
                                        <th>Lane Departure Prevention<br></br><small className='small'>(Know more)</small></th>
                                        <td>---</td>
                                        <td>✔</td>
                                    </tr>
                                    <tr>
                                        <th>Rear Cross-traffic Assist<br></br><small className='small'>(Know more)</small></th>
                                        <td>	---</td>
                                        <td>	✔</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Doors & windows
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <table>
                                    <tr>
                                        <th>ORVM Colour<br></br><small className='small'>(Know more)</small></th>
                                        <td>Body Coloured</td>
                                        <td>Body Coloured</td>
                                    </tr>
                                    <tr>
                                        <th>Scuff Plates<br></br><small className='small'>(Know more)</small></th>
                                        <td>---</td>
                                        <td>Metallic</td>
                                    </tr>
                                    <tr>
                                        <th>Power Windows<br></br><small className='small'>(Know more)</small></th>
                                        <td>Front Only</td>
                                        <td>Front & Rear</td>
                                    </tr>
                                    <tr>
                                        <th>One Touch Down<br></br><small className='small'>(Know more)</small></th>
                                        <td>All</td>
                                        <td>All</td>
                                    </tr>
                                    <tr>
                                        <th>Adjustable ORVMs<br></br><small className='small'>(Know more)</small></th>
                                        <td>Electrically Adjustable & Retractable</td>
                                        <td>Electrically Adjustable & Retractable</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Comfort & Convenience
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <table>
                                    <tr>
                                        <th>Electronic Parking Brake<br></br><small className='small'>(Know more)</small></th>
                                        <td>---</td>
                                        <td>Yes with Auto Hold</td>
                                    </tr>
                                    <tr>
                                        <th>Air Conditioner<br></br><small className='small'>(Know more)</small></th>
                                        <td>Yes (Automatic Dual Zone)</td>
                                        <td>Yes (Automatic Climate Control)</td>
                                    </tr>
                                    <tr>
                                        <th>Front AC<br></br><small className='small'>(Know more)</small></th>
                                        <td>Two Zones, Individual Fan Speed Controls</td>
                                        <td>Two Zones, Individual Fan Speed Controls</td>
                                    </tr>
                                    <tr>
                                        <th>Vanity Mirrors on Sun Visors<br></br><small className='small'>(Know more)</small></th>
                                        <td>Driver & Co-Driver</td>
                                        <td>Co-Driver Only</td>
                                    </tr>
                                    <tr>
                                        <th>Parking Sensors<br></br><small className='small'>(Know more)</small></th>
                                        <td> Rear</td>
                                        <td>	Front & Rear</td>
                                    </tr>
                                    <tr>
                                        <th>Steering Adjustment<br></br><small className='small'>(Know more)</small></th>
                                        <td>Tilt & Telescopic</td>
                                        <td>Tilt & Telescopic</td>
                                    </tr>
                                    <tr>
                                        <th>Cruise Control<br></br><small className='small'>(Know more)</small></th>
                                        <td>✔</td>
                                        <td>✔</td>
                                    </tr>
                                    <tr>
                                        <th>Headlight and Ignition On Reminder<br></br><small className='small'>(Know more)</small></th>
                                        <td>✔</td>
                                        <td>✔</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingFour">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Storage

                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <table>
                                    <tr>
                                        <th>Cup Holders<br></br><small className='small'>(Know more)</small></th>
                                        <td>Front Only</td>
                                        <td>Front & Rear</td>
                                    </tr>
                                    <tr>
                                        <th>Driver Armrest Storage<br></br><small className='small'>(Know more)</small></th>
                                        <td>✔</td>
                                        <td>✔</td>
                                    </tr>
                                    <tr>
                                        <th>Cooled Glovebox<br></br><small className='small'>(Know more)</small></th>
                                        <td>✔</td>
                                        <td>✔</td>
                                    </tr>
                                    <tr>
                                        <th>Sunglass Holder<br></br><small className='small'>(Know more)</small></th>
                                        <td>✔</td>
                                        <td>✔</td>
                                    </tr>

                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Entertainment, Information & Communication
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <table>
                                    <tr>
                                        <th>Smart Connectivity<br></br><small className='small'>(Know more)</small></th>
                                        <td>---</td>
                                        <td>Android Auto (No), Apple Car Play (No)</td>
                                    </tr>
                                    <tr>
                                        <th>Integrated (in-dash) Music System<br></br><small className='small'>(Know more)</small></th>
                                        <td>✔</td>
                                        <td>✔</td>
                                    </tr>
                                    <tr>
                                        <th>Speakers<br></br><small className='small'>(Know more)</small></th>
                                        <td>6+</td>
                                        <td>6+</td>
                                    </tr>
                                    <tr>
                                        <th>Steering-mounted controls<br></br><small className='small'>(Know more)</small></th>
                                        <td>✔</td>
                                        <td>✔</td>
                                    </tr>
                                    <tr>
                                        <th>Voice Command<br></br><small className='small'>(Know more)</small></th>
                                        <td>✔</td>
                                        <td>✔</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Instrumentation
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <table>
                                    <tr>
                                        <th>Instantaneous Consumption<br></br><small className='small'>(Know more)</small></th>
                                        <td>✔</td>
                                        <td>✔</td>
                                    </tr>
                                    <tr>
                                        <th>Instrument Cluster<br></br><small className='small'>(Know more)</small></th>
                                        <td>	Analogue</td>
                                        <td>	Analogue</td>
                                    </tr>
                                    <tr>
                                        <th>Trip Meter<br></br><small className='small'>(Know more)</small></th>
                                        <td>Multi-Function Display</td>
                                        <td>Multi-Function Display</td>
                                    </tr>
                                    <tr>
                                        <th>Average Fuel Consumption<br></br><small className='small'>(Know more)</small></th>
                                        <td>✔</td>
                                        <td>✔</td>
                                    </tr>
                                    <tr>
                                        <th>Average Speed<br></br><small className='small'>(Know more)</small></th>
                                        <td>✔</td>
                                        <td>✔</td>
                                    </tr>
                                    <tr>
                                        <th>Distance to Empty<br></br><small className='small'>(Know more)</small></th>
                                        <td>✔</td>
                                        <td>✔</td>
                                    </tr>
                                    <tr>
                                        <th>Clock<br></br><small className='small'>(Know more)</small></th>
                                        <td>Digital</td>
                                        <td>Analogue</td>
                                    </tr>
                                    <tr>
                                        <th>Low Fuel Level Warning<br></br><small className='small'>(Know more)</small></th>
                                        <td>✔</td>
                                        <td>✔</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='colors' id='color'>
                    <h3>Colours</h3>
                    <div className='color-row'>
                        <div className='color-col'>
                            <div className='color-card1'>

                            </div>
                            <p> Nero Noctis</p>
                        </div>
                        <div className='color-col'>
                            <div className='color-card2'>

                            </div>
                            <p>Dark Emerald</p>
                        </div>
                        <div className='color-col'>
                            <div className='color-card3'>

                            </div>
                            <p>Blu Astraeus</p>
                        </div>
                        <div className='color-col'>
                            <div className='color-card4'>

                            </div>
                            <p>Nero Helene</p>
                        </div>
                        <div className='color-col'>
                            <div className='color-card5'>

                            </div>
                            <p>Black</p>
                        </div>
                        <div className='color-col'>
                            <div className='color-card6'>

                            </div>
                            <p>Midnight Sapphire</p>
                        </div>
                        <div className='color-col'>
                            <div className='color-card7'>

                            </div>
                            <p>Verde Mantis</p>
                        </div>
                        <div className='color-col'>
                            <div className='color-card8'>

                            </div>
                            <p>Petra Gold</p>
                        </div>
                        <div className='color-col'>
                            <div className='color-card9'>

                            </div>
                            <p>Rosso Mars</p>
                        </div>
                        <div className='color-col'>
                            <div className='color-card10'>

                            </div>
                            <p>Rosso Anteros</p>
                        </div>
                        <div className='color-col'>
                            <div className='color-card11'>

                            </div>
                            <p>Giallo Inti</p>
                        </div>
                        <div className='color-col'>
                            <div className='color-card12'>

                            </div>
                            <p>Arancio Borealis</p>
                        </div>

                    </div>
                </div>
            </div>) : ('')
               }

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            <div className='accorclose'>
                                <h4> Select Brand or Model</h4>
                            </div>
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            <div className='accord-name'>
                                                <div className='accord-img'>
                                                    <img src={maruthi}></img>
                                                </div>
                                                <div>
                                                    <p>Maruthi Suzuki</p>
                                                </div>

                                            </div>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            {
                                                product.Maruthi.map((e) => {
                                                    return <option onClick={() => { handleMaruthi(e.id) }}>{e.carName}</option>
                                                })
                                            }
                                            {/* <option>Fronx</option>
                                            <option>Grand Vitra</option>
                                            <option>Brezza</option>
                                            <option>Swift</option>
                                            <option>Baleno</option> */}
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            <div className='accord-name'>
                                                <div className='accord-img'>
                                                    <img src={tata}></img>
                                                </div>
                                                <div>
                                                    <p>Tata</p>
                                                </div>

                                            </div>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            {
                                                product.Tata.map((e) => {
                                                    return <option onClick={() => { handleTata(e.id) }}>{e.carName}</option>
                                                })
                                            }
                                            {/* <option>Nexon</option>
                                            <option>Punch</option>
                                            <option>Harrier</option>
                                            <option>Saffari</option>
                                            <option>Tiago</option> */}
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            <div className='accord-name'>
                                                <div className='accord-img'>
                                                    <img src={hyundai}></img>
                                                </div>
                                                <div className='accord-para'>
                                                    <p>Hyundai</p>
                                                </div>

                                            </div>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            {
                                                product.Hyundai.map((e) => {
                                                    return <option onClick={() => { handleHyundai(e.id) }}>{e.carName}</option>
                                                })
                                            }
                                            {/* <option>Exter</option>
                                            <option>Creta</option>
                                            <option>Venue</option>
                                            <option>Verna</option>
                                            <option>Grand i 10 Nios </option> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </div>
    )
}

export default Morecompare
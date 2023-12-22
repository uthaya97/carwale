import React from 'react'
import Button from '@mui/material/Button';
import popular1 from '../images/po1.webp'
import popular2 from '../images/po2.webp'
import '../Css/Comparecar2.css'
import product from '../product.json'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
const Compare2 = () => {
  const params = useParams()
  console.log(params.id, params.name1, params.name2);
  const data = useSelector((state) => state.cart)
  console.log(data);
  const item = product.Carwaledata.find((e) => e.id === parseInt(params.id))
  console.log(item);
  return (
    <div className='compare2-container'>
      <h3>{item.comparName1} {item.comparDes1}  vs  {item.comparName2} {item.comparDes2}</h3>
      <div className='compare2-row'>
        <div className="compare2-col">

          <div className="compare2-card">
            <div className="compare2-img">
              <img src={item.comparImgUrl1} alt=''></img>
            </div>
            <div className="compare2-content">
              <h5>{item.comparName1}</h5>
              <h4>{item.comparDes1}</h4>
              <h6>{item.comparAmount1}</h6>
              <small>Avg Ex-Showroom Price</small>
            </div>
            <div className="compare2-btn">
              <Button variant="outlined">Get Offers</Button>
            </div>

          </div>
        </div>
        <div className="vs2">
          <p>vs</p>
        </div>
        <div className="compare2-col">
          <div className="compare2-card">
            <div className="compare2-img">
              <img src={item.comparImgUrl2} alt=''></img>
            </div>
            <div className="compare2-content">
              <h5>{item.comparName2}</h5>
              <h4>{item.comparDes2}</h4>
              <h6>{item.comparAmount2}</h6>
              <small>Avg Ex-Showroom Price</small>
            </div>
            <div className="compare2-btn">
              <Button variant="outlined">Get Offers</Button>
            </div>
          </div>
        </div>
      </div>
      <div className='comparecar-detail'>
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
                    <td>{item.cmengine1}</td>
                    <td>{item.cmengine2}</td>
                  </tr>
                  <tr>
                    <th>Engine Type<br></br><small className='small'>(Know more)</small></th>
                    <td>{item.cmenginetype1}</td>
                    <td>{item.cmenginetype2}</td>
                  </tr>
                  <tr>
                    <th>Fuel Type<br></br><small className='small'>(Know more)</small></th>
                    <td>{item.cnfuel1}</td>
                    <td>{item.cmfuel2}</td>
                  </tr>
                  <tr>
                    <th>Max Power (bhp@rpm)<br></br><small className='small'>(Know more)</small></th>
                    <td>{item.cmpower1}</td>
                    <td>{item.cmpower2}</td>
                  </tr>
                  <tr>
                    <th>Max Torque (Nm@rpm)<br></br><small className='small'>(Know more)</small></th>
                    <td>113 Nm @ 4400 rpm</td>
                    <td>113.8 Nm @ 4400 rpm</td>
                  </tr>
                  <tr>
                    <th>Mileage (ARAI) (kmpl)<br></br><small className='small'>(Know more)</small></th>
                    <td>{item.mile1}</td>
                    <td>{item.mile2}</td>
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
                  </tr>

                  <tr>
                    <th>Transmission<br></br><small className='small'>(Know more)</small></th>
                    <td>{item.cmemmision1}</td>
                    <td>{item.cmemmision2}</td>
                  </tr>
                  <tr>
                    <th>Emission Standard<br></br><small className='small'>(Know more)</small></th>
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
                    <td>{item.cmlength1}</td>
                    <td>{item.cmlength2}</td>
                  </tr>
                  <tr>
                    <th>Height (mm)<br></br><small className='small'>(Know more)</small></th>
                    <td>{item.cmheight1}</td>
                    <td>{item.cmheight2}</td>
                  </tr>
                  <tr>
                    <th>Width (mm)<br></br><small className='small'>(Know more)</small></th>
                    <td>{item.cmwidth1}</td>
                    <td>{item.cmwidth2}</td>
                  </tr>
                  <tr>
                    <th>Wheelbase (mm)<br></br><small className='small'>(Know more)</small></th>
                    <td>{item.cmwheelbase1}</td>
                    <td>{item.cmwheelbase2}</td>
                  </tr>
                  <tr>
                    <th>Ground Clearance (mm)<br></br><small className='small'>(Know more)</small></th>
                    <td>{item.cmweight1}</td>
                    <td>{item.cmweight2}</td>
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
                    <td>{item.cmfrontsus1}</td>
                    <td>{item.cmfrontsus2}</td>
                  </tr>
                  <tr>
                    <th>Rear Suspension<br></br><small className='small'>(Know more)</small></th>
                    <td>{item.cmrearsus1}</td>
                    <td>{item.cmrearsus2}</td>
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
                    <td>{item.cmfronttyre1}</td>
                    <td>{item.cmfronttyre2}</td>
                  </tr>
                  <tr>
                    <th>Rear Tyres<br></br><small className='small'>(Know more)</small></th>
                    <td>{item.cmreartyre1}</td>
                    <td>{item.cmreartyre2}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>

        </div>
        <div class="accordion accordion-flush" id="accordionFlushExample ">
          <h3 className='heading'id='feature'>Features</h3>
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
        <div className='colors'id='color'>
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
      </div>
    </div>
  )
}

export default Compare2
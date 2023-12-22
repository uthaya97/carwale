import React from 'react'
import tran1 from '../images/tr1.svg'
import tran2 from '../images/tr2.svg'
import { useState } from 'react'
import product from '../product.json'
import { useNavigate } from 'react-router-dom'
const Findthecar = () => {
    const [budjet, setBudjet] = useState(true)
    const [body, setBody] = useState(false)
    const [fuel, setFuel] = useState(false)
    const [tran, setTran] = useState(false)
    const [seat, setSeat] = useState(false)
    const navigate=useNavigate()

    const budgetfun = () => {
        setBudjet(true)
        setBody(false)
        setFuel(false)
        setTran(false)
        setSeat(false)
    }
    const budgetbody = () => {
        setBudjet(false)
        setBody(true)
        setFuel(false)
        setTran(false)
        setSeat(false)

    }
    const budgetfuel = () => {
        setBudjet(false)
        setBody(false)
        setFuel(true)
        setTran(false)
        setSeat(false)
    }
    const budgettran = () => {
        setBudjet(false)
        setBody(false)
        setFuel(false)
        setTran(true)
        setSeat(false)
    }
    const budgetseat = () => {
        setBudjet(false)
        setBody(false)
        setFuel(false)
        setTran(false)
        setSeat(true)
    }
    const handleRateBtn=(carindex,carrate)=>{
        navigate(`/new/${carindex}/${carrate}`)
    }
    return (
        <div className='rs-container'>
            <h2>Find The Cars Of Your Choice</h2>
            <div class="rs-main-btn">
                <button onClick={budgetfun}>BUDGET</button>
                <button onClick={budgetbody}>BODY TYPE</button>
                <button onClick={budgetfuel}>FUEL TYPE</button>
                <button onClick={budgettran}>TRANSMISSION</button>
                <button onClick={budgetseat}>SEATING CAPACITY</button>
            </div>

            {
                budjet ? (<div className="rs-row">
                    {
                        product.Bodytype.map((e)=>{
                            return <div className='rs-col'onClick={()=>{handleRateBtn(e.id,e.btn)}}>
                                <button>{e.btn}</button>
                            </div>
                        })
                    }
                </div>) : ('')
            }

            {
                body ? (<div className='by-row'>
                    {
                        product.Bodytype.map((e) => {
                            return <div className="by-col">
                                <div className="by-card">
                                    <img src={e.imgUrl} style={{ width: "30%" }}alt=''></img><span>{e.name}</span>

                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                </div>
                            </div>
                        })
                    }
                </div>) : ('')
            }

            {
                fuel ? (<div className='fuel-row'>
                    {
                        product.Fueltype.map((e) => {
                            return <div className="fuel-col">
                                <div className="fuel-card">
                                    <div className="fuel-pump">
                                        <div className="fuel-img">
                                            <img src={e.imgUrl}alt=''></img>
                                        </div>
                                        <p>{e.name}</p>
                                        <i class="fa fa-angle-right icon" aria-hidden="true"></i>
                                    </div>

                                </div>
                            </div>
                        })
                    }
                </div>) : ('')
            }

            {
                tran ? (<div className="trans-row">
                    <div className="trans-col">
                        <div className="trans-card">
                            <div className="trans-pump">
                                <div className="trans-img">
                                    <img src={tran1}alt=''></img>
                                </div>
                                <p>Automatic</p>
                                <i class="fa fa-angle-right transt" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div className="trans-col">
                        <div className="trans-card">
                            <div className="trans-pump">
                                <div className="trans-img">
                                    <img src={tran2}alt=''></img>
                                </div>
                                <p>Manual</p>
                                <i class="fa fa-angle-right transt" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>) : ('')
            }

            {
                seat ? (<div className="seat-row">
                    <div className="seat-col">
                        <button>5 Seater</button>
                        <button>6 Seater</button>
                        <button>7 Seater</button>
                        <button>8 Seater</button>

                    </div>
                </div>) : ('')
            }
        </div>
    )
}

export default Findthecar
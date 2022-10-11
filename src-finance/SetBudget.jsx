import { Link } from "react-router-dom"
import { useState } from "react"

const InpBudget = ({inpt, setInpt, setDefBgt, setBudget}) => {

    const setData = () => {
        setDefBgt(parseInt(inpt))
        setBudget(parseInt(inpt))
    }
    return(
        <div className="set-budget">
            <div className="set-budget__title">
                Set Your Monthly Budget
            </div>
            <div className="set-budget__wrapper">
                <input type="text" placeholder="nominal" value={inpt} onChange={(e) => {setInpt(e.target.value)}}/>
                <Link onClick={()=>{setData()}} to="/">set budget</Link>
               
            </div>
        </div>
    )
}

export default InpBudget
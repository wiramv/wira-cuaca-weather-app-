import { Link } from "react-router-dom"
import { useState } from "react"

const InpBudget = ({setDefBgt, setBudget}) => {
    const [inpt, setInpt] = useState('')

    const setData = () => {
        setDefBgt(inpt)
        setBudget(inpt)
    }
    return(
        <div className="set-budget">
            <div className="set-budget__title">
                Set Your Monthly Budget
            </div>
            <div className="set-budget__wrapper">
                <input type="text" placeholder="nominal" value={inpt} onChange={(e) => {setInpt(parseInt(e.target.value))}}/>
                <Link onClick={()=>{setData()}} to="/">set budget</Link>
               
            </div>
        </div>
    )
}

export default InpBudget
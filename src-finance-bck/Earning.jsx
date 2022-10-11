import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Earning = ({earning, setEarning, setCash, cash, log, waktu}) => {

    const [noms, setNoms] = useState('')
    const [notes, setNotes] = useState('')
    const [diss, setDiss] = useState('disabled-link')
    useEffect(()=> {
        noms ? setDiss('') : setDiss('disabled-link')
    },[noms])

    const hitungSpending =  () => {
        const balance = cash + noms
        setEarning(earning + noms )
        setCash(cash + noms)
        log.push({date : waktu,  notes, earning : noms, spending : "-", balance})
    }
    
    return(
        <div className="money">
            <div className="money-title">Earning</div>
            <div className="money-control">
                <label htmlFor="nominal">Nominal</label>                
                <input type="text" placeholder="nominal" value={noms} onChange={(e)=> setNoms(parseInt(e.target.value))}/>
            </div>
            <div className="money-control">
                <label htmlFor="nominal">Notes (optional)</label>                
                <input type="text" placeholder="earning notes" value={notes} onChange={(e)=> setNotes(e.target.value)}/>
            </div>
            <Link className={diss} onClick={()=> hitungSpending()} to="/">Submit Earning</Link>
        </div>
    )
}

export default Earning
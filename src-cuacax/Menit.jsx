import { useState, useEffect } from "react"

const Menit = () => {
    const [bulan, setBulan] = useState("")
    const [tanggal, setTanggal] = useState("")
    const [menit, setMenit] = useState("")
    const namaBulan = [
        "jan", "Feb", "Mar", "Apr", "Mei",
        "Juni", "Juli", "Agustus", "Sept",
        "Okt", "Nov", "Des"
    ]

    useEffect(()=>{
        const waktu = new Date()
        setTanggal(waktu.getDate())
        setBulan(namaBulan[waktu.getMonth()])
        setMenit(waktu.getMinutes() > 9 ? waktu.getMinutes() : 
        "0"+waktu.getMinutes())
    },[])
    return(
        <div className="jam">
            <div className="jam__hari">
                {tanggal} {bulan}
            </div>
            <div className="jam__jam">
                {menit}
            </div>
        </div>
    )
}
export default Menit
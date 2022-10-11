import { useEffect, useState} from "react"

const Jam = () => {
    const [hari, setHari] = useState("")
    const [jam, setJam] = useState("")

    const waktu = new Date()
    const namaHari = [
        "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"
    ]
    useEffect(
        () => {
            const waktu = new Date()
            setHari(namaHari[waktu.getDay() - 1])
            setJam(waktu.getHours() > 9 ? waktu.getHours() : 
            "0"+waktu.getHours())
        },[]
    )


    return(
        <div className="jam">
            <div className="jam__hari">
                {hari}
            </div>
            <div className="jam__jam">
                {jam}
            </div>
        </div>
    )
}
export default Jam
import { useState, useEffect } from "react";
import axios from 'axios'
import pagiAwan from "./img/pagi-awan.png";
import pagiCerah from "./img/pagi-cerah.png"
import pagiHujan from "./img/pagi-hujan.png"
import pagiPetir from "./img/pagi-petir.png"
import malamAwan from "./img/malam-awan.png"
import malamCerah from "./img/malam-cerah.png"
import malamHujan from "./img/malam-hujan.png"
import malamPetir from "./img/malam-petir.png"

const Cuaca = () => {
  const [kondisi, setKondisi] = useState("Loading...");
  const [suhu, setSuhu] = useState("loading...");
  const [gbr, setGbr] = useState(pagiAwan);
  const [ip, setIp] = useState('')
  const [city, setCity] = useState("Loading...")

//   ambil data
const dataQ = async () => {
    const res = await axios.get('https://api.ipify.org/?format=json')
    // setIp(res)
    console.log(res)

    // // ambil lokasi
    // const locationUri = ["https://dataservice.accuweather.com//locations/v1/cities/ipaddress?apikey=V6AGnRqtha012ZV9PmHoK9JCVRn0rKEp%20&q=", "&language=id"]
    // const fixLocationUri = locationUri[0]+res.data.IPv4+locationUri[1]
    // const locationRes = await axios.get(fixLocationUri)
    // console.log(locationRes)
    // const locationKey = locationRes.data.ParentCity.Key
    // setCity(locationRes.data.ParentCity.LocalizedName)
    // // kondisi cuaca
    // const cuacaUri = ["https://dataservice.accuweather.com/forecasts/v1/daily/1day/", "?apikey=V6AGnRqtha012ZV9PmHoK9JCVRn0rKEp&language=id-id&details=true&metric=true"]
    // const fixCuacaUri = cuacaUri[0]+locationKey+cuacaUri[1]
    // const cuacaRes = await axios(fixCuacaUri)
    // console.log(cuacaRes)
    // setSuhu(cuacaRes.data.DailyForecasts[0].Temperature.Minimum.Value)
    // let suhuIcon = 0
    // if(new Date().getHours() > 17){
    //   setKondisi(cuacaRes.data.DailyForecasts[0].Night.IconPhrase)
    //   suhuIcon = cuacaRes.data.DailyForecasts[0].Night.Icon
    // } else{
    //   setKondisi(cuacaRes.data.DailyForecasts[0].Day.IconPhrase)
    //   suhuIcon = cuacaRes.data.DailyForecasts[0].Day.Icon
    // }




    // // gbr suhu
    // if(suhuIcon > 0 && suhuIcon < 6){
    //   setGbr(pagiCerah)
    // } else if(suhuIcon > 5 && suhuIcon < 12){
    //   setGbr(pagiAwan)
    // }else if((suhuIcon > 11 && suhuIcon < 15) || (suhuIcon > 18 && suhuIcon < 22)){
    //   setGbr(pagiHujan)
    // } else if(suhuIcon > 14 && suhuIcon < 19){
    //   setGbr(pagiPetir)
    // } else if(suhuIcon > 32 && suhuIcon < 35){
    //   setGbr(malamCerah)
    // }else if(suhuIcon > 34 && suhuIcon < 39){
    //   setGbr(malamAwan)
    // } else if((suhuIcon > 38 && suhuIcon < 41) || (suhuIcon === 43)){
    //   setGbr(malamHujan)
    // } else if(suhuIcon > 40 && suhuIcon < 43){
    //   setGbr(malamPetir)
    // }

}





useEffect(()=>{
  dataQ()
},[])



  return (
    <div className="cuaca">
      <div className="cuaca-text">
        <div className="cuaca-text-1">
          <div className="cuaca-text-1__lokasi">{city}</div>
          <div className="cuaca-text-1__kondisi">{kondisi}</div>
        </div>
        <div className="cuaca-text-2">{suhu}°</div>
      </div>
      <img className="cuaca-gbr" src={gbr} alt="" />
    </div>
  );
};

export default Cuaca;

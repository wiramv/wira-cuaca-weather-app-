import { Link } from "react-router-dom";
import pp from "./img/pp.png"

const Main = ({setHalaman}) => {

    return(
        <div className="main">
            <div className="main-text">
                <div className="h4">Hello there,</div>
                <div className="h1">I'm <b>Wira</b></div>
                <div className="h5">ReactJs Developer</div>
                <div className="main-btn">
                    <Link to="/about" className="btn-line" onClick={()=> {setHalaman("about")}}>About Me</Link>
                    <Link to="/portfolio" className="btn-fill" onClick={()=> {setHalaman("port")}}>My Portfolio</Link>
                </div>
            </div>

            <div className="main-me main-blur">
                <img src={pp} alt="wira-pp" />
                <div className="h5">
                    Wira<b>Mahatvavirya</b>
                </div>
            </div>
        </div>
    )
}

export default Main
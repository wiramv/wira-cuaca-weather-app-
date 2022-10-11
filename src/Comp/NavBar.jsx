import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import pp from "../img/Logo.png"

const NavBar = ({halaman,setHalaman}) => {
    const [naviCol, setNaviCol] = useState("navbar-list collapse")
    const [burger, setBurger] = useState("navbar-burger")
    const navTog = () => {
        if(burger === "navbar-burger"){
            setBurger("navbar-burger cross")
            setNaviCol("navbar-list")
        }else{
            setBurger("navbar-burger")
            setNaviCol("navbar-list collapse")
        }
    }

    useEffect(()=>{
        setBurger("navbar-burger")
        setNaviCol("navbar-list collapse")
    },[halaman])
    return(
        <nav className="navbar">
                <Link className="navbar-brand">
                <img src={pp} alt="logo-wira" />
                <span>Wira<b>Mahatvavirya</b></span>
                </Link>
                <div className="toggle">
                <div className={burger} onClick={()=>navTog()}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            <div className={naviCol}>
                <Link onClick={()=> {setHalaman("home")}} className="navlink" to="/"><div>Home</div>
                {halaman === "home" && <div className="lining"></div>}</Link>
                <Link onClick={()=> {setHalaman("about")}} className="navlink"to="/about"><div>About Me</div>{halaman === "about" && <div className="lining"></div>}</Link>
                <Link onClick={()=> {setHalaman("skills")}} className="navlink"to="/skills"><div>Skill</div>{halaman === "skills" && <div className="lining"></div>}</Link>
                <Link onClick={()=> {setHalaman("char")}} className="navlink"to="/character"><div>Characteristic</div>{halaman === "char" && <div className="lining"></div>}</Link>
                <Link onClick={()=> {setHalaman("edu")}} className="navlink"to="/education"><div>Educations</div>{halaman === "edu" && <div className="lining"></div>}</Link>
                <Link onClick={()=> {setHalaman("port")}} to="/portfolio" className="btn-line"><div>Portfolio</div>{halaman === "port" && <div className="lining"></div>}</Link>    
                <Link onClick={()=> {setHalaman("contact")}} to="/contact" className="btn-fill"><div>Contact</div>{halaman === "contact" && <div className="lining"></div>}</Link>    
            </div>
                </div>
        </nav>
    )
}

export default NavBar
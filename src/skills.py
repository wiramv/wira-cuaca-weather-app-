import rIcon from "./img/reactIcon.png"
import redux from "./img/Redux.png"
import router from "./img/Router.png"
import expressIcn from "./img/express.png"
import nodejs from "./img/nodejs.png"
import typescript from "./img/typescript.png"
import sql from "./img/sql.png"
import bootstrap from "./img/bootstrap.png"
import sass from "./img/sass.png"
import tailwind from "./img/tailwind.png"
import xd from "./img/xd.png"
import figma from "./img/figma.png"


const Skills = ({setSkill}) => {


    const mySkill = (e) => {
        setSkill(e.target.alt)
        if(window.innerWidth < 460){
            window.scroll(0, 1700)
        }else if(window.innerWidth < 1000){
            window.scroll(0, 1500)
        } else{
            window.scroll(0, 1000)
        }
    }    

    return(
        <div className="skills main-blur">
            <a  onClick={(e)=>mySkill(e)} name="react" >
                <img src={rIcon} alt="react"  />
                <div className="h6">react</div>
            </a>
            <a  onClick={(e)=>mySkill(e)} name="redux">
                <img src={redux} alt="redux"  />
                <div className="h6">redux</div>
            </a>
            <a  onClick={(e)=>mySkill(e)} name="router">
                <img src={router} alt="router"  />
                <div className="h6">router</div>
            </a>
            <a  onClick={(e)=>mySkill(e)} name="express">
                <img src={expressIcn} alt="express"  />
                <div className="h6">express</div>
            </a>
            <a  onClick={(e)=>mySkill(e)} name="node">
                <img src={nodejs} alt="node"  />
                <div className="h6">node js</div>
            </a>
            <a  onClick={(e)=>mySkill(e)} name="typescript">
                <img src={typescript} alt="typescript"  />
                <div className="h6">typescript</div>
            </a>
            <a  onClick={(e)=>mySkill(e)} name="sql">
                <img src={sql} alt="sql"  />
                <div className="h6">sql</div>
            </a>
            <a  onClick={(e)=>mySkill(e)} name="bootstrap" >
                <img src={bootstrap} alt="bootstrap" />
                <div className="h6">bootstrap</div>
            </a>
            <a  onClick={(e)=>mySkill(e)} name="tailwind">
                <img src={tailwind} alt="tailwind"  />
                <div className="h6">tailwind</div>
            </a>
            <a  onClick={(e)=>mySkill(e)} name="sass">
                <img src={sass} alt="sass"  />
                <div className="h6">sass</div>
            </a>
            <a  onClick={(e)=>mySkill(e)} name="xd">
                <img src={xd} alt="xd"  />
                <div className="h6">xd</div>
            </a>
            <a  onClick={(e)=>mySkill(e)} name="figma">
                <img src={figma} alt="figma"  />
                <div className="h6">figma</div>
            </a>
        </div>
    )
}

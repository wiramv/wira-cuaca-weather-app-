import skillImg from "./img/skillImg";


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

    const skillSet = [
        "react", "redux", "router", "express", "node", "typescript", "sql", "bootstrap", "tailwind", "sass", "xd", "figma"
    ]

    return(
        <div className="skill-page main-blur">
        <div className="h3">Skills</div>    
        <div className="skills">
            {skillSet.map((skill, index) => (
                <a key={index+1} onClick={(e)=>mySkill(e)} name={skill}>
                    <img src={skillImg[index]} alt={skill} />
                    <div className="h6">{skill}</div>
                </a>
            ))}
        </div>
        </div>
    )
}

export default Skills
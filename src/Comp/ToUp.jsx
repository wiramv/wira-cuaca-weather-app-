import upImg from "../img/up.png"

const ToUp = () => {

    const scrollUp = () => {
        window.scroll(0, 0)
    }

    return(
        <a className="up-btn" onClick={()=> scrollUp()}>
            <img src={upImg} alt="up-btn" />
        </a>
    )
}

export default ToUp
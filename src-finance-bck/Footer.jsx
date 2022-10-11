import wa from "./img/whatsapp.png"
import ln from "./img/linkdin.png"


const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-top">
                <a href="#" className="footer-top-connect">
                    <img src={wa} alt="logo=wa" />
                    <span>Contact Me On Whatsapp</span>
                </a>
                <a href="#" className="footer-top-connect">
                    <img src={ln} alt="logo=wa" />
                    <span>Add Me On Linkdin</span>
                </a>
            </div>
            <div className="footer-bottom">
                This Portfolio was made by Wira Mahatvavirya
            </div>
        </div>
    )
}

export default Footer
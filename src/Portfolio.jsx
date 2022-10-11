
import portImg from "./img/portImg"

const Portfolio = () => {
    const portData = [
        {
            title : "wira-cuaca",
            link : "https://wira-cuaca.netlify.app/"
        },
        {
            title : "wira-finance",
            link : "https://wira-finance-tracker.netlify.app/"
        },
        {
            title : "name-generator",
            link : "https://wira-name-generator.netlify.app/"
        }
    ]
    return(
        <div className="port main-blur">
            <div className="port-title h3">
                Portfolio
            </div>
            <div className="port-thumb">
                {portData.map((pr, index) => (
                    <a href={pr.link} target="_blank" className="port-thumb-x" key={index+1}>
                        <img src={portImg[index]} alt={pr.title} />
                        <div className="text h6">
                            {pr.title}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}
export default Portfolio
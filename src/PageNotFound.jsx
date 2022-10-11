import { Link } from "react-router-dom"

const PageNotFound = ({setHalaman}) => {
    return(
        <div className="pnf main-blur">
            <div className="pnf-main">404</div><br />
            <p className="h6">We cannot find the page you are looking For</p> <br /><br />
            <Link className="btn btn-fill" to="/" onClick={()=> {setHalaman("home")}}>return</Link>
        </div>
    )
}

export default PageNotFound
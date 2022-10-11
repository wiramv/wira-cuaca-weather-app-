import spendingBtn from "./img/spending.png";
import earningBtn from "./img/earning.png";
import dataLog from "./img/datalog.png";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <Link className="main-btn" to="/spending">
        <img src={spendingBtn} alt="spending-btn" />
        <span>Spending</span>
      </Link>
      <Link className="main-btn" to="/earning">
        <img src={earningBtn} alt="spending-btn" />
        <span>Earning</span>
      </Link>
      <Link className="main-btn" to="/datalog">
        <img src={dataLog} alt="spending-btn" />
        <span>Data Log</span>
      </Link>
    </div>
  );
};

export default Main;

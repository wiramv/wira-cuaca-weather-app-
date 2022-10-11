import logo from "./img/logo.png";
const Header = ({cash, budget, earning, spending}) => {
  return (
    <div className="header">
      <div className="header-top">
        <div className="header-top-brand">
          <div className="header-top-brand-logo">
            <span>WIRA</span>
            <img src={logo} alt="wira-logo" />
          </div>
          <div className="header-top-brand-subtitle">Finance Tracker</div>
        </div>
        <a className="header-btn cash">
          <div className="header-btn-title">Cash</div>
          <div className="header-btn-nominal">Rp {cash.toLocaleString()},--</div>
        </a>
      </div>
      <div className="header-bottom">
        <a className="header-btn">
          <div className="header-btn-title">Monthly Budget</div>
          <div className="header-btn-nominal">Rp {budget.toLocaleString()},--</div>
        </a>
        <a className="header-btn">
          <div className="header-btn-title">Monthly Earning</div>
          <div className="header-btn-nominal">Rp {earning.toLocaleString()},--</div>
        </a>
        <a className="header-btn">
          <div className="header-btn-title">Monthly Spending</div>
          <div className="header-btn-nominal">Rp {spending.toLocaleString()},--</div>
        </a>
      </div>
    </div>
  );
};
export default Header;

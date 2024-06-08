import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const Navbar = () => {
  const logout = () => {
    cookies.remove("isAuth");
    cookies.remove("user");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <a className="navbar-brand" href="">
          <i className="bi bi-wallet"></i> E Wallet
        </a>
        <button
          className="navbar-toggler p-0 border-0"
          type="button"
          data-toggle="offcanvas"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse offcanvas-collapse" id="navbarsDefault">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/dashboard">
              <i className="bi bi-speedometer2"></i> Dashboard
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdown01"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="bi bi-cash-coin"></i> Received/Given
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown01">
                <Link className="dropdown-item" to="/loan/payout">
                <i className="bi bi-cash-stack"></i> Loan Payout
                </Link>
                <Link className="dropdown-item" to="/lend/receive">
                <i className="bi bi-credit-card-2-front"></i> Lend Received
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="bi bi-clock-history"></i> History
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown">
                <Link className="dropdown-item" to="/">
                <i className="bi bi-currency-exchange"></i> Transaction History
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="bi bi-receipt"></i> Reports Summary
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown">
                <Link className="dropdown-item" to="/report/total">
                <i className="bi bi-filetype-pdf"></i> Total Report
                </Link>
                {/* <Link className="dropdown-item" to="/report/total">
                  <i className="bi bi-filetype-pdf"></i> Monthly Report
                </Link>
                <Link className="dropdown-item" to="/report/total">
                  <i className="bi bi-filetype-pdf"></i> Monthly Transaction
                  Report
                </Link> */}
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="bi bi-person-circle"></i> Mustafizur Rahman
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown">
                <Link className="dropdown-item" to="/settings">
                  <i className="bi bi-gear-wide-connected"></i> Settings
                </Link>
                <div role="separator" className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/profile">
                  <i className="bi bi-info-circle"></i> Profile
                </Link>
                <Link className="dropdown-item" to="/feedback">
                  <i className="bi bi-chat-text"></i> Feedback
                </Link>
                <div role="separator" className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/">
                  <i className="bi bi-database-fill-down"></i> DB Backup
                </Link>
                <Link className="dropdown-item" to="/db/restore">
                  <i className="bi bi-database-up"></i> DB Restore
                </Link>
                <div role="separator" className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/" onClick={logout}>
                  <i className="bi bi-box-arrow-left"></i> Logout
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

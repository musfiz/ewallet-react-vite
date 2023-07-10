import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const Navbar = () => {
  const logout = () => {
    cookies.remove("token");
    cookies.remove("user");
    window.location.reload();
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <a className="navbar-brand" href="">
          <FontAwesomeIcon icon="fa-wallet" /> E Wallet
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
                <FontAwesomeIcon icon="fa-tachometer-alt" /> Dashboard
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
                <FontAwesomeIcon icon="fa-hand-holding-usd" /> Received/Given
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown01">
                <Link className="dropdown-item" to="/loan/payout">
                  <FontAwesomeIcon icon="fa-money-bill-alt" /> Loan Payout
                </Link>
                <Link className="dropdown-item" to="/lend/receive">
                  <FontAwesomeIcon icon="fa-credit-card" /> Lend Received
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
                <FontAwesomeIcon icon="fa-history" /> History
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown">
                <Link className="dropdown-item" to="/">
                  <FontAwesomeIcon icon="fa-exchange-alt" /> Transaction History
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
                <FontAwesomeIcon icon="fa-file-invoice" /> Reports Summary
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown">
                <Link className="dropdown-item" to="/report/total">
                  <FontAwesomeIcon icon="fa-file-pdf" /> Total Report
                </Link>
                {/* <Link className="dropdown-item" to="/report/total">
                  <FontAwesomeIcon icon="fa-file-pdf" /> Monthly Report
                </Link>
                <Link className="dropdown-item" to="/report/total">
                  <FontAwesomeIcon icon="fa-file-pdf" /> Monthly Transaction
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
                <FontAwesomeIcon icon="fa-power-off" /> Mustafizur Rahman
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown">
                <Link className="dropdown-item" to="/settings">
                  <FontAwesomeIcon icon="fa-cog" /> Settings
                </Link>
                <div role="separator" className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/profile">
                  <FontAwesomeIcon icon="fa-info-circle" /> Profile
                </Link>
                <Link className="dropdown-item" to="/feedback">
                  <FontAwesomeIcon icon="fa-comment" /> Feedback
                </Link>
                <div role="separator" className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/">
                  <FontAwesomeIcon icon="fa-database" /> DB Backup
                </Link>
                <Link className="dropdown-item" to="/db/restore">
                  <FontAwesomeIcon icon="fa-window-restore" /> DB Restore
                </Link>
                <div role="separator" className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/" onClick={logout}>
                  <FontAwesomeIcon icon="fa-sign-out-alt" /> Logout
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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
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
              <a className="nav-link" href="">
                <FontAwesomeIcon icon="fa-tachometer-alt" /> Dashboard
                <span className="sr-only">(current)</span>
              </a>
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
                <a className="dropdown-item" href="">
                  <FontAwesomeIcon icon="fa-money-bill-alt" /> Loan Payout
                </a>
                <a className="dropdown-item" href="#">
                  <FontAwesomeIcon icon="fa-credit-card" /> Lend Received
                </a>
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
                <a className="dropdown-item" href="#">
                  <FontAwesomeIcon icon="fa-exchange-alt" /> Transaction History
                </a>
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
                <FontAwesomeIcon icon="fa-file-invoice" /> Summary Report
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown">
                <a className="dropdown-item" href="">
                  <FontAwesomeIcon icon="fa-file-pdf" /> Total Report
                </a>
                <a className="dropdown-item" href="">
                  <FontAwesomeIcon icon="fa-file-pdf" /> Monthly Report
                </a>
                <a className="dropdown-item" href="">
                  <FontAwesomeIcon icon="fa-file-pdf" /> Monthly Transaction
                  Report
                </a>
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
                <FontAwesomeIcon icon="fa-sign-in-alt" /> Mustafizur Rahman
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown">
                <a className="dropdown-item" href="#">
                  <FontAwesomeIcon icon="fa-info-circle" /> Profile
                </a>
                <a className="dropdown-item" href="">
                  <FontAwesomeIcon icon="fa-comment" /> Feedback
                </a>
                <div role="separator" className="dropdown-divider"></div>
                <a className="dropdown-item" href="">
                  <FontAwesomeIcon icon="fa-database" /> DB Backup
                </a>
                <a className="dropdown-item" href="">
                  <FontAwesomeIcon icon="fa-window-restore" /> DB Restore
                </a>
                <div role="separator" className="dropdown-divider"></div>
                <a className="dropdown-item" href="">
                  <FontAwesomeIcon icon="fa-sign-out-alt" /> Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

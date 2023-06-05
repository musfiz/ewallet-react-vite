import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <a className="navbar-brand mr-auto mr-lg-0" href="">
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
                Dashboard
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdown01"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Received/Given
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown01">
                <a className="dropdown-item" href="">
                  Loan Payout
                </a>
                <a className="dropdown-item" href="#">
                  Lend Received
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                History
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown">
                <a className="dropdown-item" href="#">
                  Transaction History
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Summary Report
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown">
                <a className="dropdown-item" href="">
                  Total Report
                </a>
                <a className="dropdown-item" href="">
                  Monthly Report
                </a>
                <a className="dropdown-item" href="">
                  Monthly Transaction Report
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-sign-in-alt"></i>Mustafizur Rahman
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown">
                <a className="dropdown-item" href="#">
                  Profile
                </a>
                <a className="dropdown-item" href="">
                  Feedback
                </a>
                <a className="dropdown-item" href="#">
                  Version
                </a>
                <div role="separator" className="dropdown-divider"></div>
                <a className="dropdown-item" href="">
                  DB Backup
                </a>
                <a className="dropdown-item" href="">
                  DB Restore
                </a>
                <div role="separator" className="dropdown-divider"></div>
                <a className="dropdown-item" href="">
                  {/* font */}
                </a>
                <form
                  id="logout-form"
                  action=""
                  method="POST"
                  style={{ display: "none" }}
                ></form>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

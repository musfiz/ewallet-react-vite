import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboard = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-12 col-sm-6">
            <h2>June, 2023</h2>
          </div>
        </div>
        <hr />
        <div className="row justify-content-start">
          <div className="col-3">
            <h4 style={{ color: " #2d995b" }} className="h4 text-center">
              8457.00 <br /> <span>CASH (current)</span>
            </h4>
          </div>
          <div className="col-3">
            <h4 style={{ color: "#bf3642" }} className="h4 text-center">
              0 <br /> <span>EXPENSE</span>
            </h4>
          </div>
          <div className="col-3">
            <h4 style={{ color: "#e4c360" }} className="h4 text-center">
              0.00 <br /> <span>LOAN</span>
            </h4>
          </div>
          <div className="col-3">
            <h4 style={{ color: "#383d41" }} className="h4 text-center">
              0.00 <br /> <span>BORROW</span>
            </h4>
          </div>
        </div>
        <div className="row mt-4 justify-content-between">
          <div className="col">
            <button className="btn btn-success btn-sm btn-flat me-1">
              <FontAwesomeIcon icon="fa-plus" /> Add Transaction
            </button>
            <button className="btn btn-primary btn-sm btn-flat">
              <FontAwesomeIcon icon="fa-file-pdf" /> PDF
            </button>
          </div>
          <div className="col-auto me-3 gx-4">
            <div className="row">
              <div className="col-auto gx-1">
                <select className="form-select form-select-sm">
                  <option>Transaction Type</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-auto gx-1">
                <select className="form-select form-select-sm">
                  <option>Select Year</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-auto gx-1">
                <select className="form-select form-select-sm">
                  <option>Select Month</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-auto gx-1">
                <button className="btn btn-primary btn-sm btn-flat me-1">
                  <FontAwesomeIcon icon="fa-search" /> Search Transaction
                </button>
              </div>
              <div className="col g-0">
                <button className="btn btn-secondary btn-sm btn-flat">
                  <FontAwesomeIcon icon="fa-refresh" /> Reset
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Dashboard;

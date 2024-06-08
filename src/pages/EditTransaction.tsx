import { Link } from "react-router-dom";
const editTransaction = () => {
  return (
    <>
      <div className="container">
        <div className="row mb-3 d-flex justify-content-between">
          <div className="col-auto">
            <h2>Add Transaction</h2>
          </div>
          <div className="col-auto">
            <Link
              className="btn btn-outline-primary btn-sm btn-flat me-1"
              to="/dashboard"
            >
              <i className="bi bi-plus-circle"></i> View Transaction
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="input-group mb-3">
              <label className="input-group-text" for="type">
                Type
              </label>
              <select className="form-select" id="type">
                <option selected> Select Type</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="col">
            <div className="input-group mb-3">
              <label className="input-group-text" for="date">
                Date
              </label>
              <input type="date" id="date" className="form-control" />
            </div>
          </div>
          <div className="col">
            <div className="input-group mb-3">
              <label className="input-group-text" for="number">
                Number
              </label>
              <input
                type="number"
                id="number"
                className="form-control"
                placeholder="0.00"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="input-group">
              <span className="input-group-text">Note</span>
              <textarea
                className="form-control"
                aria-label="With textarea"
                placeholder="Note Your Quotes"
                rows={3}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col d-grid">
            <button className="btn btn-success btn-flat">
              Store Transaction
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default editTransaction;

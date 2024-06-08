import { Link } from "react-router-dom";
import { useState } from "react";
import serverApi from "../api/ServerApi";
import notify from "../utils/Toast";

const addTransaction = () => {
  const [type, setType] = useState();
  const [date, setDate] = useState();
  const [amount, setAmount] = useState();
  const [note, setNote] = useState();

  const onChangeType = (e) => {
    setType(e.target.value);
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const onChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  const onChangeNote = (e) => {
    setNote(e.target.value);
  };

  const storeTransaction = () => {
    if (!type || !date || !amount || !note) {
      notify("Please give all input porperly!", "error");
    } else {
      const bodyParam = {
        type: type,
        date: date,
        amount: amount,
        note: note,
      };
      const response = serverApi.post("transaction/add", bodyParam, {});
      response.then((response) => {
        if (response.data.success) {
        }
      });
    }
  };

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
              <label className="input-group-text">Type</label>
              <select className="form-select" id="type" onChange={onChangeType}>
                <option value="">Transaction Type</option>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
                <option value="Loan">Loan</option>
                <option value="Borrow">Borrow</option>
                <option value="Cash">Cash(Old)</option>
              </select>
            </div>
          </div>
          <div className="col">
            <div className="input-group mb-3">
              <label className="input-group-text">Date</label>
              <input
                type="date"
                id="date"
                className="form-control"
                onChange={onChangeDate}
              />
            </div>
          </div>
          <div className="col">
            <div className="input-group mb-3">
              <label className="input-group-text">Amount</label>
              <input
                type="number"
                id="amount"
                className="form-control"
                placeholder="0.00"
                onChange={onChangeAmount}
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
                rows={5}
                onChange={onChangeNote}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col d-grid">
            <button
              className="btn btn-success btn-flat"
              onClick={storeTransaction}
            >
              Store Transaction
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default addTransaction;

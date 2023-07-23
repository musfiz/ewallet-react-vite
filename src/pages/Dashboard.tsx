import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import customStyles from "../utils/CustomStyles";
import { useState, useEffect } from "react";
import serverApi from "../api/ServerApi";

const columns = [
  {
    name: "SI.",
    cell: (row, index) => index + 1,
    width: "5%",
  },
  {
    name: "Amount",
    selector: (row) => row.amount,
    sortable: true,
    width: "10%",
    style: {
      justifyContent: "flex-end",
    },
  },
  {
    name: "Date",
    selector: (row) => row.date,
    sortable: true,
    width: "12%",
    style: {
      justifyContent: "center",
    },
  },
  {
    name: "Time",
    selector: (row) => row.time,
    width: "9%",
  },
  {
    name: "Note",
    selector: (row) => row.note,
    style: {
      width: "500px",
    },
  },
  {
    name: "Action",
    width: "11%",
    button: true,
    cell: (row: object) => (
      <>
        <a
          className="btn btn-outline-success btn-sm btn-flat"
          onClick={approvedAmount}
        >
          <FontAwesomeIcon icon="fa-check" />
        </a>
        <Link
          className="btn btn-outline-primary btn-sm btn-flat mx-1"
          to={`/transaction/edit/${row.id}`}
        >
          <FontAwesomeIcon icon="fa-edit" />
        </Link>
        <button
          className="btn btn-outline-danger btn-sm btn-flat"
          onClick={deleteRow}
        >
          <FontAwesomeIcon icon="fa-trash" />
        </button>
      </>
    ),
  },
];

const approvedAmount = () => {};

const deleteRow = () => {};

const Dashboard = () => {
  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    const response = serverApi.get("transaction/monthly", {});
    response.then((response) => {
      if (response.data.success) {
        setData(response.data.data.transaction);
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

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
            <Link
              className="btn btn-success btn-sm btn-flat me-1"
              to="/transaction/add"
            >
              <FontAwesomeIcon icon="fa-plus" /> Add Transaction
            </Link>
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
        <div className="row">
          <div className="col-12">
            {/* DataTable */}
            <DataTable
              className="mt-5"
              progressPending={loading}
              pagination
              columns={columns}
              data={data}
              selectableRows
              customStyles={customStyles}
              dense
            />
            {/* DataTable */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

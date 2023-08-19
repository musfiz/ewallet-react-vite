import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import serverApi from "../api/ServerApi";
import notify from "../utils/Toast.tsx";
import CustomDatatable from "../utils/Datatable.tsx";

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
      row.status == 1 ? 
      <>
        <h6><span className="badge bg-success">Approved</span></h6> 
      </> : 
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

const rowStyles =  [
  {
    when: row => row.type == 'Income',
    style: row => ({backgroundColor: '#d4edda', color: '#155724', borderColor: '#c3e6cb'})
    // style: row => ({ backgroundColor: row.isSpecial ? '#f8d7da' : '#f8d7da' }),
  },
  {
    when: row => row.type == 'Expense',
    style: row => ({backgroundColor: '#f8d7da', color: '#721c24', borderColor: '#f5c6cb'})
  },
  {
    when: row => row.type == 'Loan',
    style: row => ({backgroundColor: '#fff3cd ', color: '#856404', borderColor: '#d6d8db'})
  },
  {
    when: row => row.type == 'Lend',
    style: row => ({backgroundColor: '#e2e3e5', color: '#383d41', borderColor: '#d6d8db'})
  },
]

const approvedAmount = () => {};

const deleteRow = () => {};

const monthList =  ["January", "February", "March", "April", "May",
"June", "July", "August", "September", "October", "November", "December"];

const yearList = [];
for(let i= 2019; i <= 2030; i++){
  yearList.push(i);
}



const Dashboard = () => {
  const [transactionData, transactionSetData] = useState([]);
  const [accountData, accountSetData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');

  const option = {
    type: type,
    year: year,
    month: month
  }

  const fetchData = (option = {}) => {
    setLoading(true);
    const response = serverApi.get("transaction/monthly", option);
    response.then((response) => {
      setLoading(false);
      if (response.data.success) {
        transactionSetData(response.data.data.transaction);  
        accountSetData(response.data.data.account);    
      }
    });
  };

  const onChangeType = (e) => {
    setType(e.target.value)
  }

  const onChangeYear = (e) => {
    setYear(e.target.value)
  }

  const onChangeMonth = (e) => {
    setMonth(e.target.value)
  }

  const searchTransaction = () => {
    fetchData(option);
  }

  const resetTransaction = () => {
    setType('');
    setYear('');
    setMonth('');
    option.type = ''
    option.year = ''
    option.month = ''
    fetchData(option);
  }

  useEffect(() => {
    fetchData(option);
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
                <select className="form-select form-select-sm" onChange={onChangeType}>
                  <option value="">Transaction Type</option>
                  <option value="Income">Income</option>
                  <option value="Expense">Expense</option>
                  <option value="Loan">Loan</option>
                  <option value="Borrow">Borrow</option>
                </select>
              </div>
              <div className="col-auto gx-1">
                <select value={year} className="form-select form-select-sm" onChange={onChangeYear}>
                  <option value="">Select Year</option>  
                  {yearList.map((item)=> {
                    return(
                      <option key={item} value={item}>{item}</option>
                    )
                  })}
                </select>
              </div>
              <div className="col-auto gx-1">
                <select value={month} className="form-select form-select-sm" onChange={onChangeMonth}>
                  <option value="">Select Month</option>
                  {monthList.map((month, index) => {
                    return (
                      <option key={index} value={index+1}>{month}</option>
                    );
                  })}
                </select>
              </div>
              <div className="col-auto gx-1">
                <button className="btn btn-primary btn-sm btn-flat me-1" onClick={searchTransaction}>
                  <FontAwesomeIcon icon="fa-search" /> Search Transaction
                </button>
              </div>
              <div className="col g-0">
                <button className="btn btn-secondary btn-sm btn-flat" onClick={resetTransaction}>
                  <FontAwesomeIcon icon="fa-refresh" /> Reset
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">            
            <hr />
            <CustomDatatable columns={columns} data={transactionData} loading={loading} rowStyles={rowStyles}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

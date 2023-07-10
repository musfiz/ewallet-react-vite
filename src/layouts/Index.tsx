import Navbar from "../components/Navbar.tsx";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

import Login from "./Login";
import Dashboard from "../pages/Dashboard";
import AddTransaction from "../pages/AddTransaction";
import EditTransaction from "../pages/EditTransaction";
import LoanPayout from "../pages/LoanPayout";
import AddLoanPayout from "../pages/AddLoanPayout";
import LendReceive from "../pages/LendReceive";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import Feedback from "../pages/Feedback";
import DbRestore from "../pages/DbRestore";

const Index = () => {
  const [token, setToken] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const logout = () => {
    setToken(false);
    setUser({});
  };

  useEffect(() => {
    const getUser = cookies.get("user");
    const getToken = cookies.get("token");
    if (getToken && getUser) {
      setUser(getUser);
      setToken(true);
      navigate("/dashboard", { replace: true });
    } else {
      navigate("/");
    }
  }, []);

  if (token) {
    return (
      <>
        <Navbar />
        <div role="main" className="container">
          <div className="d-flex align-items-center p-3 my-3 bg-white rounded shadow-sm">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/transaction/add" element={<AddTransaction />} />
              <Route
                path="/transaction/edit/:id"
                element={<EditTransaction />}
              />
              <Route path="/loan/payout" element={<LoanPayout />} />
              <Route path="/loan/payout/add" element={<AddLoanPayout />} />
              <Route path="/lend/Receive" element={<LendReceive />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/db/restore" element={<DbRestore />} />
            </Routes>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </>
    );
  }
};

export default Index;

import Navbar from "../components/Navbar.tsx";
import { Route, Routes, Outlet, useNavigate } from "react-router-dom";
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

const Layout = () => {
  return (
    <>
      <Navbar />
      <div role="main" className="container">
        <div className="d-flex align-items-center p-3 my-3 bg-white rounded shadow-sm">
          <Outlet />
        </div>
      </div>
    </>
  );
};

const Index = () => {
  const navigate = useNavigate();
  const user = cookies.get("user");
  const logout = () => {
    cookies.remove("isAuth");
    cookies.remove("user");
  };

  useEffect(() => {
    if (!user) {
      logout();
      navigate("/", { replace: true });
    }
  }, [user]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transaction/add" element={<AddTransaction />} />
        <Route path="/transaction/edit/:id" element={<EditTransaction />} />
        <Route path="/loan/payout" element={<LoanPayout />} />
        <Route path="/loan/payout/add" element={<AddLoanPayout />} />
        <Route path="/lend/Receive" element={<LendReceive />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/db/restore" element={<DbRestore />} />
      </Route>
    </Routes>
  );
};

export default Index;

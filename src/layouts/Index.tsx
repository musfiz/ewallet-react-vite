import Navbar from "../components/Navbar.tsx";
import { Route, Routes } from "react-router-dom";
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
  return (
    <>
      <Navbar />
      <main role="main" className="container">
        <div className="d-flex align-items-center p-3 my-3 bg-white rounded shadow-sm">
          <Routes>
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
          </Routes>
        </div>
      </main>
    </>
  );
};

export default Index;

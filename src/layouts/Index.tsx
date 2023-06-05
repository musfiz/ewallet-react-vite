import Navbar from "../components/Navbar.tsx";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Feedback from "../pages/Feedback";

const Index = () => {
  return (
    <>
      <Navbar />
      <main role="main" className="container">
        <div className="d-flex align-items-center p-3 my-3 bg-white rounded shadow-sm">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </div>
      </main>
    </>
  );
};

export default Index;

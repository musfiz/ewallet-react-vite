import Login from "./layouts/Login";
import Index from "./layouts/Index";
import { useState } from "react";

const SignIn = () => {
  return (
    <>
      <Login />
    </>
  );
};

const Dashboard = () => {
  return (
    <>
      <Index />
    </>
  );
};

const App = () => {
  const [isLoggedIn] = useState(false);
  if (isLoggedIn) {
    return (
      <>
        <main role="main" className="container">
          <div className="d-flex align-items-center p-3 my-3 bg-white rounded shadow-sm">
            <Dashboard />
          </div>
        </main>
      </>
    );
  }
  return (
    <>
      <SignIn />
    </>
  );
};

export default App;

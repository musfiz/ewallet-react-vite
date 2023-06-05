import Login from "./layouts/Login";
import Index from "./layouts/Index";
import { useState } from "react";

const LoginPage = () => {
  return (
    <>
      <Login />
    </>
  );
};

const AdminPage = () => {
  return (
    <>
      <Index />
    </>
  );
};

const App = () => {
  const [isLoggedIn] = useState(true);
  if (isLoggedIn) {
    return (
      <>
        <AdminPage />
      </>
    );
  }
  return (
    <>
      <LoginPage />
    </>
  );
};

export default App;

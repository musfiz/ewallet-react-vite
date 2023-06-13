import Login from "./layouts/Login";
import Index from "./layouts/Index";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

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
  const [isToken, setToken] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    //check token is in cookie
    setToken(true);
    // setUser({});
  });

  const logout = () => {
    setToken(false);
    // cookies.remove("jwt_authorization");
    // setUser({});
  };

  if (isToken) {
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

import Login from "./layouts/Login";
import Index from "./layouts/Index";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const App = () => {
  const [token, setToken] = useState(false);
  const [user, setUser] = useState({});

  const LoginPage = () => {
    return (
      <>
        <Login change={handleState} />
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

  let handleState = (data) => {
    setToken(true);
    setUser(data.user);
    cookies.set("token", data.token);
    cookies.set("user", data.user);
  };

  useEffect(() => {
    const getUser = cookies.get("user");
    const getToken = cookies.get("token");
    setUser(getUser);
    setToken(true);
    if (!getUser || !getToken) {
      logout();
    }
  }, [token]);

  const logout = () => {
    setToken(false);
    setUser({});
  };

  if (token && user) {
    return (
      <>
        <AdminPage />
      </>
    );
  }
  if (!token && !user) {
    return (
      <>
        <LoginPage />
      </>
    );
  }
};

export default App;

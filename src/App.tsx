import Login from "./layouts/Login";
import Index from "./layouts/Index";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const App = () => {
  const [token, setToken] = useState(false);
  const [user, setUser] = useState({});

  const Page = () => {
    return (
      <>
        <Index user={user} />
      </>
    );
  };

  // const logout = () => {
  //   setToken(null);
  //   setUser({});
  // };

  // useEffect(() => {
  //   const getUser = cookies.get("user");
  //   const getToken = cookies.get("token");
  //   if (!getUser || !getToken) {
  //     logout();
  //   }
  //   setUser(getUser);
  //   setToken(true);
  // }, [token]);

  return (
    <>
      <Page />
    </>
  );
};

export default App;

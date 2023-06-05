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

const Admin = () => {
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
        <Admin />
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

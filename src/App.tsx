import Index from "./layouts/Index";
import { ToastContainer } from "react-toastify"

const Page = () => {
  return (
    <>
      <ToastContainer/>
      <Index />
    </>
  );
};

const App = () => {
  return (
    <>
      <ToastContainer/>
      <Page />
    </>
  );
};

export default App;

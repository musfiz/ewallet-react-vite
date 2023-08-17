import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const option:object = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
  theme: "colored",
}

const notify = (message:string, type:string = '') => {
  switch (type){
    case "success":
      return toast.success(<div><strong>{message}</strong></div>, option);
    case "info":
      return toast.info(<div><strong>{message}</strong></div>, option);
    case "warning":
      return toast.warning(<div><strong>{message}</strong></div>, option);
    case "error":
      return toast.error(<div><strong>{message}</strong></div>, option);
    default:
      return toast(<div>Toast type not defined!</div>, option);
  }
}

export default notify;
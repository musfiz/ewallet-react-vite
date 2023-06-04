import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <button onClick={() => setCounter((prevCounter) => prevCounter - 1)}>
        -
      </button>
      <h2>{counter}</h2>
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
        +
      </button>
    </>
  );
};

export default App;

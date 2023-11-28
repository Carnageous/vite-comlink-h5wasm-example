import { useEffect } from "react";

import { getH5Worker } from "./workers";
import "./App.css";

function App() {
  useEffect(() => {
    getH5Worker().then(async (worker) => {
      const resFromh5 = await worker.readExampleFile();
      console.log("result", resFromh5);
    });
  }, []);

  return <>See console :)</>;
}

export default App;

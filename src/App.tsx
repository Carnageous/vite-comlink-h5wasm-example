import { useEffect } from 'react';
import './App.css';
import { getH5Worker } from './workers';

function App() {
  useEffect(() => {
    getH5Worker().then(async (worker) => {
      const resFromh5 = await worker.readExampleFile();
      console.log('result', resFromh5.toString());
    });
  }, []);

  return <>See console :)</>;
}

export default App;

import './App.css';
import { useState } from 'react';
import Notify_page from './components/Notify_page';

function App() {

  const [curr, setcurr] = useState();

  return (
    <div className='main_page'>

      <Notify_page />
    </div>
  );
}

export default App;

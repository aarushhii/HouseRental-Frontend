
import './App.css';

import Sidebar from './components/sidebar/Sidebar';
import MainDash from './components/MainDash/MainDash';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<MainDash />} />
          <Route path="/Dashboard" element={<MainDash />} />
          {/* <Route path="/Tenants" element={<Tenants />} /> */}
        </Routes>
      </Sidebar>
    </BrowserRouter>


  );
};


export default App;

import './App.css';
import './pages/MainDash/MainDash.css';

import Sidebar from './components/sidebar/Sidebar';
import MainDash from './components/MainDash/MainDash';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import { AuthContext } from './context/AuthContext';


function App() {
  return (
    <Landing/>
  );
};


export default App;
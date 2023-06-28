import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SignIn from './pages/Login/signin';
import SignUp from './pages/Login/signup';
import AddProperty from './pages/Forms/addProperty/addProperty';
import MainDash from './components/MainDash/MainDash';
import Property from './pages/Property/Property';
import Complaints from './pages/Complaints/Complaints';
import AddTenant from './pages/Forms/AddTenant/addTenant';
import ComplaintsPage from './pages/Complaint/ComplaintsPage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import RaiseComplaint from './pages/Forms/raiseComplaint/raiseComplaint';



const router =createBrowserRouter([
  {
    path:"/",
    element:<App/>,
  },
  {
    path:"/dashboard",
    element:<MainDash/>,
  },
  {
    path:"/signup",
    element:<SignUp/>
  },
  {
    path:"/signin",
    element:<SignIn/>
  },
  {
    path:"/signin",
    element:<SignIn/>
  },
  {
    path:"/property",
    element:<Property />
  },
  {
    path:"/complaints",
    element:<ComplaintsPage />

  },
  {
    path:"/addProperty",
    element:<AddProperty />

  },
  {
    path:"/raiseComplaint",
    element:<RaiseComplaint />

  },
  {
    path:"/complaint",
    element:<Complaints />

  },
  {
    path:"/addtenant",
    element:<AddTenant />
  }


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < RouterProvider router={router} />
  </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SignIn from './pages/Login/signin';
import SignUp from './pages/Login/signup';
import addProperty from './pages/Forms/addProperty';
import MainDash from './components/MainDash/MainDash';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Property from './pages/Property/Property';
import AddTenant from './pages/Forms/AddTenant/addTenant';
import ComplaintsPage from './pages/Complaint/ComplaintsPage';

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
    path:"/property",
    element:<Property />
  },
  {
    path:"/complaints",
    element:<ComplaintsPage />
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
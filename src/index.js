import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import MainDash from './pages/MainDash/MainDash';
;
const router =createBrowserRouter([
  {
    path:"/",
    element:<MainDash/>,
  },
  {
    path:"/signup",
    element:<SignUp/>
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < RouterProvider router={router} />
  </React.StrictMode>
);
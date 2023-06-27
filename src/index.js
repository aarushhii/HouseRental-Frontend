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
import Property from './pages/Property/Property';
;
const router =createBrowserRouter([
  {
    path:"/",
    element:<MainDash/>,
  },
  {
    path:"/signup",
    element:<SignUp/>
  },
  {
    path:"/property",
    element:<Property />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < RouterProvider router={router} />
  </React.StrictMode>
);
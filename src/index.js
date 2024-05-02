import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './admin/home';
import Receive from './admin/receive';
import Disburse from './admin/disburse';
import Register from './admin/register';


const router = createBrowserRouter([

  

  {
    path: "/register", element: <Register/>

  },
  {
    path: "/disburse", element: <Disburse/>

  },
  {
    path: "/receive", element: <Receive/>

  },
  {
    path: "/", element: <Home/>

  },
 

]) 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

    </BrowserRouter>
    <RouterProvider router={router}/>
 

  </React.StrictMode>,
  document.getElementById('root')
);



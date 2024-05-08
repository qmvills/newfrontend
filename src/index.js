import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from './components/LoginForm/login';

import Home from './admin/home';
import Receive from './admin/receive';
import Disburse from './admin/disburse';
import Register from './admin/register';
import Addpayable from './admin/addpayable';

import First from './components/adminreceive/first';
import Second from './components/adminreceive/second';
import Third from './components/adminreceive/third';
import Fourth from './components/adminreceive/fourth';
import Irregular from './components/adminreceive/irregular';

import Thome from './treasurers/thome';
import Theader from './components/theader';
import Tdisburse from './treasurers/tdisburse';
import Treceive from './treasurers/treceive';

import Firstyear from './components/treasurerreceive/firstyear';
import Secondyear from './components/treasurerreceive/secondyear';
import Thirdyear from './components/treasurerreceive/thirdyear';
import Fourthyear from './components/treasurerreceive/fourthyear';
import YearList from './components/YearList';






const router = createBrowserRouter([



  {
    path: "/register", element: <Register />

  },
  {
    path: "/disburse", element: <Disburse />

  },
  {
    path: "/receive", element: <Receive />

  },
  {
    path: "/addpayable", element: <Addpayable />

  },
  {
    path: "/", element: <Home />

  },
  {
    path: "/Login", element: <App />

  },
  {
    path: "/first", element: <First />

  },
  {
    path: "/second", element: <Second />

  },
  {
    path: "/third", element: <Third />

  },
  {
    path: "/fourth", element: <Fourth />

  },




  
  {
    path: "/thome", element: <Thome/>

  },
  {
    path: "/theader", element: <Theader/>

  },
  {
    path: "/tdisburse", element: <Tdisburse/>

  },
  {
    path: "/treceive", element: <Treceive/>

  },


  {
    path: "/firstyear", element: <Firstyear/>

  },
  {
    path: "/secondyear", element: <Secondyear/>

  },
  {
    path: "/thirdyear", element: <Thirdyear/>

  },
  {
    path: "/fourthyear", element: <Fourthyear/>

  },
  {
    path: "/irregular", element: <Irregular/>

  },

  {
    path: "/yearlist", element: <YearList />

  },


 



])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

    </BrowserRouter>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);



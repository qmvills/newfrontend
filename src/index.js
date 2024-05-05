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
import Firstyear from './components/TreasurertList/firstyear';
import Secondyear from './components/TreasurertList/secondyear';
import Thirdyear from './components/TreasurertList/thirdyear';
import Fourthyear from './components/TreasurertList/fourthyear';

import Yearone from './components/adminlist/yearfour';
import Yeartwo from './components/adminlist/yeartwo';
import Yearthree from './components/adminlist/yearthree';
import Yearfour from './components/adminlist/yearfour';
import Irregular from './components/adminlist/irregular';


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
    path: "/", element: <Home />

  },
  {
    path: "/Login", element: <App />

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
    path: "/yearone", element: <Yearone/>

  },
  {
    path: "/yeartwo", element: <Yeartwo/>

  },
  {
    path: "/yearthree", element: <Yearthree/>

  },
  {
    path: "/yearfour", element: <Yearfour/>

  },

  {
    path: "/irregular", element: <Irregular/>

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



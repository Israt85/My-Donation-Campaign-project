import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Mainlayout from './Layout/Mainlayout/Mainlayout';
import Home from './Layout/Pages/Home/Home';
import Donation from './Layout/Pages/Donation/Donation';
import Statistics from './Layout/Pages/Statistics/Statistics';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('/Donate.json')
      },
      {
        path:"/donation",
        element: <Donation></Donation>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

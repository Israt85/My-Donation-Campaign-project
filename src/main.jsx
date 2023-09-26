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
import CardDetails from './Components/CardDetails/CardDetails';
import ErrorPage from './Components/ErrorPage/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('/Donate.json')
      },
      {
        path:"/donation",
        element: <Donation></Donation>,
        loader: () => fetch('/Donate.json')
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/card/:id",
        element: <CardDetails></CardDetails>,
        loader: () => fetch('/Donate.json'),
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

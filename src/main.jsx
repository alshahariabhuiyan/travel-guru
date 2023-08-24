import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Book from './Components/pages/Book/Book/Book';
import Main from './Components/Layout/Main/Main';
import DatePicker from './Components/pages/Book/Datepicker/DatePic';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import Login from './Components/pages/Login/Login';
import LogLay from './Components/Layout/LoginLay/LogLay';
import Register from './Components/pages/Register/Register';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
    ]
  },
  {
    path: '/book',
    element: <PrivateRoute><Book></Book></PrivateRoute>
  },
  {
    path: '/login',
    element: <LogLay></LogLay>,
    children: [
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/login/register',
        element:<Register></Register>
      }
    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

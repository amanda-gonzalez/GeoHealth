import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Map from './pages/map';
import Resources from './pages/Resources';
import AdminLoginForm from "./pages/AdminLogin";
import AdminRegister from "./pages/AdminRegi";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:'/map',
    element:<Map/>
  },
  {
    path:'/resources',
    element:<Resources/>
  },
  {
    path:'/adminlogin',
    element:<AdminLoginForm/>
  },
  {
    path:'/adminregister',
    element:<AdminRegister/>
  }

]);

const App = () => {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

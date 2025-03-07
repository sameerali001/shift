import React from "react";
import Delivery from "components/Delivery/Delivery";
import ForEnterprises from "components/ForEnterprises/ForEnterprises";
import Home from "components/Home/Home";
import Support from "components/Support/Support";
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Tables from "views/examples/Tables.js";
import Login from "components/Login/Login.jsx";  // Add this import
import Signup from "components/Signup/Signup";  // Add this import

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/admin",
  },
  {
    path: "/index",
    name: "Home",
    icon: "ni ni-home text-blue",
    component: <Home />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Workplace",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tables />,
    layout: "/admin",
  },
  // New routes
  {
    path: "/enterprise",
    name: "For Enterprise",
    icon: "ni ni-building text-success",
    component: <ForEnterprises />,
    layout: "/admin",
  },
  {
    path: "/partners",
    name: "Delivery Partners",
    icon: "ni ni-truck text-info",
    component: <Delivery />,
    layout: "/admin",
  },
  {
    path: "/support",
    name: "Support",
    icon: "ni ni-headphones text-warning",
    component: <Support />,
    layout: "/admin",
  },
  // Add Login and Signup routes
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-lock-circle-open text-blue", // Icon for Login
    component: <Login />,
    layout: "/auth",
  },
  {
    path: "/signup",
    name: "Signup",
    icon: "ni ni-user-add text-green", // Icon for Signup
    component: <Signup/>,
    layout: "/auth",
  },
];

export default routes;

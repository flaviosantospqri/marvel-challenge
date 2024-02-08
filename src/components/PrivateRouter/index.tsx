import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute: React.FC = () => {
  const loggedIn = localStorage.getItem("isAuth");
  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

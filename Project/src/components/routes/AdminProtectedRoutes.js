import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router";
import { Redirect } from "react-router-dom";

const AdminProtectedRoutes = ({ children, ...rest }) => {
  const adminInfo = useSelector((state) => state.adminLogin);
  if (!adminInfo) {
    return <Redirect to="/admin/login" />;
  }
  return <Route {...rest}>{children}</Route>;
};

export default AdminProtectedRoutes;

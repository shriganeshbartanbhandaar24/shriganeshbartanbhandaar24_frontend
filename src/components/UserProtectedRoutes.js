import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const UserProtectedRoutes = ({ children, ...rest }) => {
  const userInfo = useSelector((state) => state.userLogin);
  if (!userInfo) {
    return <Redirect to="/user/login" />;
  }
  return <Route {...rest}>{children}</Route>;
};

export default UserProtectedRoutes;

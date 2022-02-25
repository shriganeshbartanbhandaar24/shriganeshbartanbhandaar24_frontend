import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const UserDashboardPage = ({ history }) => {
  const { userInfo } = useSelector((state) => state.userLogin);

  console.log(userInfo);

  useEffect(() => {
    if (!userInfo) {
      history.push("/users/login");
    }
  }, [userInfo]);

  return <div>DashboardPage</div>;
};

export default UserDashboardPage;

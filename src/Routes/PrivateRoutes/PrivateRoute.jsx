import React, { useContext } from "react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext();
  console.log(user, loading);

  if (user) {
    return children;
  }
  return <div></div>;
};

export default PrivateRoute;

import React from "react";
import { Link, useRouteError } from "react-router-dom";
import ErrPic from "../../../public/imgaes/ErrPage/404.png";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return <div className=" rounded-lg border-red-100"></div>;
};

export default ErrorPage;

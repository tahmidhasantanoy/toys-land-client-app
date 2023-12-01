import React from "react";
import { Link, useRouteError } from "react-router-dom";
import ErrPic from "../../../public/imgaes/ErrPage/404.png";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div className=" rounded-lg border-red-100">
      <section className="flex items-center h-screen p-16 bg-blue-400  text-gray-900">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center .flex">
            <div className="mb-8 .font-extrabold .text-9xl .text-yellow-500">
              <span className="sr-only w-2/4">Error</span>

              <img src={ErrPic} alt="" />
            </div>
            <div>
              <p className="text-2xl  font-semibold md:text-3xl text-red-800 mb-8">
                Sorry ... <br />
                {error?.message}
              </p>
              <Link
                to="/"
                className="btn .btn-outline hover:btn-wide hover:text-white .text-yellow-300 rounded-full"
              >
                Back to homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;

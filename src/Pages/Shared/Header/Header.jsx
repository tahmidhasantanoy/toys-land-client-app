import React, { useContext } from "react";
import logo from "../../../../public/imgaes/logo/web-logo.png";
import p1 from "../../../../public/imgaes/logo/p1.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  console.log(user);

  const handleLogOut = () => {
    console.log("asci");
    logOut()
      .then(console.log("done"))
      .catch((err) => console.log(err.messsage));
  };

  return (
    <div>
      <div className="navbar bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">All Toys</Link>
              </li>
              <li>
                <Link to="/blogs">Blog</Link>
              </li>
              {user ? (
                <>
                  <li>
                    <Link to="/">My Toys</Link>
                  </li>
                  <li>
                    <Link to="/addtoys">Add Toys</Link>
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>
          </div>
          <Link to="/" className="btn">
            <div className="btn normal-case text-xl">
              <img className="w-36" src={logo} alt="" />
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">All Toys</Link>
            </li>
            <li>
              <Link to="/blogs">Blog</Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link to="/">My Toys</Link>
                </li>
                <li>
                  <Link to="/addtoys">Add Toys</Link>
                </li>
              </>
            ) : (
              ""
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="avatar navbar-end">
                <div className="w-12 rounded-full">
                  <img title="name" src={p1} />
                </div>
              </div>
            </>
          ) : (
            <Link
              to="/login"
              className=" btn-active font-medium hover:text-sky-400 rounded-sm p-2.5 m-0"
            >
              login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

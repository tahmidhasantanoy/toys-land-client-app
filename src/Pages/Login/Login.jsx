import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Welcome back to Toys Land</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLoginSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-3">
                <button className="btn btn-info hover:text-white hover:bg-cyan-600">
                  Login
                </button>
              </div>
            </form>
            <div className="card-body">
              <div className="divider">OR</div>

              <div>
                <div className="form-control mt-3">
                  <button
                    // onClick={}
                    className="btn btn-outline rounded-lg"
                  >
                    <FaGoogle style={{ fontSize: "1.5rem" }} className="mr-3" />
                    Sign in with Google
                  </button>
                </div>
              </div>
              <p className="mt-4 text-center">
                <Link to="/registration" className="text-info ">
                  Don't have an account?
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

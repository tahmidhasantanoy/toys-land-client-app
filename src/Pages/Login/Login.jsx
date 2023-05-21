import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Providers/AuthProvider";
import Title from "../../Title/Title";

const Login = () => {
  const { loginUser, loginWithGoogle } = useContext(AuthContext);
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const [displayName, setDisplayName] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // console.log(location);

  // console.log(displayName);

  const handleLoginSubmit = (event) => {
    setErr("");
    setSuccess("");
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();

    // console.log(email, password);

    loginUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        setSuccess("Successfully logged in to Toys land");
        navigate(from, { replace: true });
      })
      .catch((err) => setErr(err.message));
  };

  const handleGoogleSubmit = () => {
    loginWithGoogle()
      .then((res) => {
        const user = res.user;
        // console.log(user);
        setDisplayName(user.displayName);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <Title title={"login"}/>
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
                <p className="text-red-600">{err}</p>{" "}
                <p className="text-success">{success}</p>
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
                    onClick={handleGoogleSubmit}
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

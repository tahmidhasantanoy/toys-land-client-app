import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Title from "../../Title/Title";

const Registration = () => {
  const { createUser } = useContext(AuthContext);
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegisterSubmit = (event) => {
    setErr('')
    setSuccess('')
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;
    form.reset();

    console.log(name, email, password, photoUrl);

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        setSuccess("Your registration is complete");
      })
      .catch((err) => setErr(err.message));
  };
  return (
    <div>
      <Title title={"Register"}/>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Create your own account</h1>
            <p className="py-6">
              Already signed up, enter your details and start enjoying your
              Shopping
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegisterSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="input input-bordered"
                />
              </div>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="Enter your photo url"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-3">
                <p className="text-red-500">{err}</p>{" "}
                <p className="text-success">{success}</p>
                <button className="btn btn-info hover:text-white hover:bg-cyan-600">
                  Register
                </button>
              </div>
            </form>
            <div className="card-body">
              <p className="mt-4 text-center">
                Already have an account?
                <Link to="/login" className="text-info ">
                  login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;

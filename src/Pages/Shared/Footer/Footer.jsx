import React, { useContext } from "react";
import Nogod from "../../../../public/imgaes/Footer/nagad-removebg-preview.png";
import bkash from "../../../../public/imgaes/Footer/bkash-logo-FBB258B90F-seeklogo.com-removebg-preview.png";
import Rocket from "../../../../public/imgaes/Footer/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png";
import logo from "../../../../public/imgaes/logo/logo.png"
import { AuthContext } from "../../Providers/AuthProvider";

const Footer = () => {
  const { logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => console.log(err.messsage));
  };
  return (
    <footer className="footer p-10 bg-base-300 text-base-content .grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      <div>
        <span className="footer-title">Our payment services</span>
        <div className="flex">
          <img className="w-20 mr-2" src={Nogod} alt="" />
          <img className="w-16 mx-2" src={Rocket} alt="" />
          <img className="w-16 mx-2" src={bkash} alt="" />
        </div>
      </div>
      <div>
        <span className="footer-title">Our pages</span>
        <a className="link link-hover">Home page</a>
        <a className="link link-hover">All Toys</a>
        <a className="link link-hover">Blog</a>
      </div>
      <div>
        <span className="footer-title">My Account</span>
        <a className="link link-hover">My Toys</a>
        <a className="link link-hover">Add Toys</a>
        <p onClick={handleLogOut} className="link link-hover">
          Logout
        </p>
      </div>
      <div>
        <img className="avatar w-32 h-24"  src={logo} alt="" />
        <p>Order your favourite toys with us</p>
        <p className="">Bangabandhu road,Naogaon-sadar,Naogaon-6500</p>
        <p className="">Phone : +8801799624162</p>
        <p className="">Email : tahmid.hasan.tanoy@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;

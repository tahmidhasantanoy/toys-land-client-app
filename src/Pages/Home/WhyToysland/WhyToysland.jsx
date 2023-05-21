import React from "react";
import Title from "../../../Title/Title";

const WhyToysland = () => {
  return (
    <div className="py-12">
      <Title title={"Home"}/>
      <h3 className="text-white text-center font-bold text-4xl py-12">
      Why people find Toys Land awesome
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        <div className=" flex flex-col items-center p-1 mb-4">
          <div className="card w-72 h-48 bg-base-100 shadow-2xl">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-cyan-500 text-3xl m-2">10+ years</h2>
              <p className="text-gray-300">of developing & delivering awesome experiences around the world.</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center p-1 mb-4">
          <div className="card w-72 h-48 bg-base-100 shadow-2xl  text-neutral-content">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-cyan-500 text-3xl m-2">9 lines</h2>
              <p className="text-gray-300">of monthly discoveries for kids of all ages & interests!</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center p-1 mb-4">
          <div className="card w-72 h-48 bg-base-100 shadow-2xl  text-neutral-content">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-cyan-500 text-3xl m-2">1200+ hours</h2>
              <p className="text-gray-300">of thoughtful design & kid-testing behind every single crate.</p>
            </div>
          </div>
        </div>
        
        <div className=" flex flex-col items-center p-1 mb-4">
          <div className="card w-72 h-48 bg-base-100 shadow-2xl  text-neutral-content">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-cyan-500 text-3xl m-2">2000+ toys</h2>
              <p className="text-gray-300">to shop at the KiwiCo Store!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyToysland;

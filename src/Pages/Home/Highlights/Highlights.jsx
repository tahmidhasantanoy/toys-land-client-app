import React from "react";
import pinkCar from "../../../../public/imgaes/Highlights/pink-car.png";
import sportsCar from "../../../../public/imgaes/Highlights/sports-car.png";

const Highlights = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center py-12">
      <div className="flex flex-col items-center p-5">
        <div className="card card-compact w-96 bg-base-100 shadow-2xl">
          <figure>
            <img src={pinkCar} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex items-center ">
              <h2 className="card-title pr-1 ">Regular car!</h2>
              <div className="badge badge-warning ml-2">top selling</div>
            </div>
            <p>
              The Nissan Figaro is a front-engine, front-wheel drive, two-door,
              2+2, fixed-profile convertible manufactured by Nissan for model
              year 1991.
            </p>
            <div className="card-actions justify-center">
              <button className="btn btn-info btn-outline rounded-full">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center p-5">
        <div className="card card-compact w-96 bg-base-100 shadow-2xl">
          <figure>
            <img src={sportsCar} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex items-center">
              <h2 className="card-title">Sports Car!</h2>
              <div className="badge badge-accent ml-2">new arrival</div>
            </div>
            <p>
              The Scalextric Classic Street Cars are every bit as exciting as
              their modern counterparts
            </p>
            <div className="card-actions justify-center">
              <button className="btn btn-info btn-outline rounded-full">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;

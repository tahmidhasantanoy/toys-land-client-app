import React from "react";
import pinkCar from "../../../../public/imgaes/Highlights/pink-car.png";
import sportsCar from "../../../../public/imgaes/Highlights/sports-car.png";

const Highlights = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center py-12">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={pinkCar} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex items-center ">
          <h2 className="card-title pr-1">Regular car!</h2>
          <div className="badge badge-warning pl-1">top selling</div>
          </div>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-center">
            <button className="btn btn-info btn-outline rounded-full">Shop Now</button>
          </div>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={sportsCar} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex items-center">
          <h2 className="card-title">Sports Car!</h2>
          <div className="badge badge-accent pl-1">new arrival</div>
          </div>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-center">
            <button className="btn btn-info btn-outline rounded-full">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;

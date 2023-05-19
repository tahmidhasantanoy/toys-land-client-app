import React from "react";
import Banner1 from "../../../../public/imgaes/Banner/banner1.png";
import Banner2 from "../../../../public/imgaes/Banner/Banner2.png";
import Banner3 from "../../../../public/imgaes/Banner/Banner3.png";
import ShopByAge from "../ShopByAge/ShopByAge";

const Home = () => {
  return (
    <div className="bg-slate-800">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full ">
          <img src={Banner1} className="w-full rounded my-0" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle btn-outline">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle btn-outline">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={Banner2} className="w-full rounded" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle btn-outline">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle btn-outline">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={Banner3} className="w-full rounded" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle btn-outline">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle btn-outline">
              ❯
            </a>
          </div>
        </div>
      </div>
      {/* Banner end  */}
      <ShopByAge/>
    </div>
  );
};

export default Home;

import React from "react";
import kid1 from "../../../../public/imgaes/Shop By Age/kid1.jpg";
import kid2 from "../../../../public/imgaes/Shop By Age/kid2.jpg";
import kid3 from "../../../../public/imgaes/Shop By Age/kid3.jpg";
import kid4 from "../../../../public/imgaes/Shop By Age/kid4.jpg";
import kid5 from "../../../../public/imgaes/Shop By Age/kid5.jfif";

const ShopByAge = () => {
  return (
   <div className="py-12">
    <h3 className="text-white text-center font-bold text-4xl py-8">Shop By Age </h3>
     <div className="grid grid-cols-2 md:grid-cols-5 ">
        
        <div className="avatar flex flex-col items-center p-1">
          <div className="w-24 rounded-full">
            <img src={kid1} />
          </div>
          <p className="text-white">Birth to 24 Months</p>
        </div>
        <div className="avatar flex flex-col items-center p-1">
          <div className="w-24 rounded-full">
            <img src={kid2} />
          </div>
          <p className="text-white">2 to 5 years</p>
        </div>
        <div className="avatar flex flex-col items-center p-1">
          <div className="w-24 rounded-full">
            <img src={kid3} />
          </div>
          <p className="text-white">5 to 8 years</p>
        </div>
        <div className="avatar flex flex-col items-center p-1">
          <div className="w-24 rounded-full">
            <img src={kid4} />
          </div>
          <p className="text-white">8 to 13 years</p>
        </div>
        <div className="avatar flex flex-col items-center">
          <div className="w-24 rounded-full">
            <img src={kid5} />
          </div>
          <p className="text-white">14+ years</p>
        </div>
      </div>
   </div>
  );
};

export default ShopByAge;

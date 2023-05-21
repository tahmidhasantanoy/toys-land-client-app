import React from "react";
import { useLoaderData } from "react-router-dom";

const DetailsToy = () => {
  const oneToy = useLoaderData();

  const {
    SellerName,
    email,
    photoUrl,
    price,
    quantity,
    description,
    toyName,
    rating,
    subCategory,
  } = oneToy;

  console.log(oneToy);
  return (
    <div className="px-60 py-36 ">
      <div className="card card-side bg-base-300 shadow-2xl">
        <div className="flex flex-col md:flex-row">
          <div>
            <figure>
              <img
                className="w-96 h-96 rounded-md"
                src={photoUrl}
                alt="Movie"
              />
            </figure>
          </div>
          <div className="card-body">
            <h2 className="card-title text-4xl text-white">{toyName}</h2>
            <p>{description}</p>
            <div className="space-y-1 pt-4">
              <p className="text-1xl">
                <span className="text-1xl font-semibold">Seller : </span>{" "}
                {SellerName}
              </p>
              <p className="text-1xl">
                <span className="text-1xl font-semibold">Email : </span>
                {email}
              </p>
              <p className="text-1xl">
                <span className="text-1xl font-semibold">Sub-Category : </span>
                {subCategory}
              </p>
              <p className="text-1xl">
                <span className="text-1xl font-semibold">Price : </span>${price}
              </p>
              <p className="text-1xl">
                <span className="text-1xl font-semibold">Quantity : </span>
                {quantity}
              </p>
              <p className="text-1xl">
                <span className="text-1xl font-semibold">User ratting : </span>
                {rating}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsToy;

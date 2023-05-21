import React from "react";
import { useLoaderData } from "react-router-dom";
import ToyDEtails from "./ToyDEtails";

const AllToys = () => {
  const allToysData = useLoaderData();
  // console.log(allToysData);

  const { sellerName, quantity, price, subCategory, photoUrl } = allToysData;

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Toy image & Seller name</th>
              <th>toy Name</th>
              <th>Price</th>
              <th>Availabe Quantity</th>

              <th>Sub category</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          {allToysData.map((toy) => (
            <ToyDEtails key={toy._id} toy={toy}></ToyDEtails>
          ))}
        </table>
      </div>
    </div>
    // <div>
    //     {
    //         allToysData.map(toy => <ToyDEtails key={toy._id} toy={toy}></ToyDEtails>)
    //     }
    // </div>
  );
};

export default AllToys;

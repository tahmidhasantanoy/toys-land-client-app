import React from "react";
import { useLoaderData } from "react-router-dom";
import ToyDEtails from "./ToyDEtails";
import Title from "../../Title/Title";

const AllToys = () => {
  const allToysData = useLoaderData();


  return (
    <div>
      <Title title={"all toys"}/>
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
              <th></th>
            </tr>
          </thead>
          {allToysData.map((toy) => (
            <ToyDEtails key={toy._id} toy={toy}></ToyDEtails>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllToys;

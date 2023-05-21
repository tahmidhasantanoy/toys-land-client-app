import React from "react";
import { Link } from "react-router-dom";
import Title from "../../Title/Title";

const ToyDEtails = ({ toy }) => {
  console.log(toy);
  const { _id,SellerName, quantity, price, subCategory, photoUrl } = toy;
  console.log(toy.sellerName);
  console.log(photoUrl); //show here

  return (
    <tbody>
      <Title title={"all toys"}/>
      {/* row 1 */}
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className=".avatar">
              <div
                className="mask 
              mask-squircle w-24 h-24"
              >
                <img src={photoUrl} alt="Product image here" />
              </div>
            </div>
            <div>
              <div className="font-bold">{SellerName}</div>
              <div className="text-sm opacity-50">{quantity}</div>
            </div>
          </div>
        </td>
        <td>{toy.toyName}</td>
        <td> {price}</td>
        <td> Avaible - {quantity}</td>
        <td>{subCategory}</td>
        <th>
          <button className="btn btn-info btn-sm hover:text-white">
            <Link to={`/detailstoy/${_id}`}>details</Link>
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default ToyDEtails;

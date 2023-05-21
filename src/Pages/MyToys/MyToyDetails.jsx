import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Title from "../../Title/Title";

const MyToyDetails = ({ toy, handleDelete }) => {
  console.log(toy);

  const { _id, SellerName, quantity, price, subCategory, photoUrl } = toy;

  return (
    <>
      <tbody className="">
      <Title title={"my toy"}/>
        {/* row 1 */}
        <tr>
          <th className="">
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-circle btn-outline "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </th>
          <td>
            <div className="flex items-center space-x-3">
              <div className=".avatar">
                <div className="mask mask-squircle w-24 h-24">
                  <img src={photoUrl} alt="Product image here" />
                </div>
              </div>
              <div>
                <div className="font-bold">{SellerName}</div>
              </div>
            </div>
          </td>
          <td className="" style={{ marginLeft: "100px" }}>
            {price}
            <br />
          </td>
          <td className="">{quantity}</td>
          <td>{subCategory}</td>
          <th>
            <Link to={`/updatetoy/${_id}`}>
              <button className="btn btn-sm btn-info hover:text-white">Update</button>
            </Link>
          </th>
        </tr>
      </tbody>
    </>
  );
};

export default MyToyDetails;

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import MyToyDetails from "./MyToyDetails";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [mytoy, setMytoy] = useState([]);
  console.log(user?.email);
  console.log(mytoy);

  useEffect(() => {
    fetch(`http://localhost:5000/all-toys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMytoy(data))
      .catch((err) => console.log(err.message));
  }, [user]);

  return (
    <div className="overflow-x-auto w-full">
    <table className="table w-full">
      {/* head */}
      <thead>
        <tr>
          {/* <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th> */}
          <th>Delete toy</th>
          <th>Toy image & Seller name</th>
          <th>Toy price</th>
          <th>Available quantity</th>
          <th>Sub category</th>
          <th>Favorite Color</th>
          <th></th>
        </tr>
      </thead>
      {mytoy.map((toy) => (
        <MyToyDetails key={toy._id} toy={toy}></MyToyDetails>
      ))}
    </table>
  </div>
  );
};

export default MyToys;

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import MyToyDetails from "./MyToyDetails";
import Swal from "sweetalert2";
import Title from "../../Title/Title";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [mytoy, setMytoy] = useState([]);
  console.log(user?.email);
  console.log(mytoy);

  useEffect(() => {
    fetch(`https://toys-land-server-sandy.vercel.app/all-toys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMytoy(data))
      .catch((err) => console.log(err.message));
  }, [user]);

  const handleDelete = (delete_id) => {
    Swal.fire({
      title: "Do you want to delete this?",
      confirmButtonText: "ok",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Delete successfully!", "", "success");
        console.log(delete_id);

        //Route isn't found 404
        fetch(`https://toys-land-server-sandy.vercel.app/all-toys/${delete_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const remaining = mytoy.filter((toy) => toy._id !== delete_id);
            setMytoy(remaining);
          })
          .catch((err) => console.log(err.message));
      }
    });
  };

  return (
    <div className="overflow-x-auto w-full p-12">
      <Title title={"My toys"} />
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
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
          <MyToyDetails
            key={toy._id}
            toy={toy}
            handleDelete={handleDelete}
          ></MyToyDetails>
        ))}
      </table>
    </div>
  );
};

export default MyToys;

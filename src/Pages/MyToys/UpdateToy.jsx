import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Title from "../../Title/Title";

const UpdateToy = () => {
  const prevToyData = useLoaderData();
  const {
    _id,
    name,
    SellerName,
    email,
    price,
    subCategory,
    rating,
    quantity,
    photoUrl,
    description,
    toyName,
  } = prevToyData;
  console.log(prevToyData);

  const handleUpdateToys = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const SellerName = form.sellerName.value;
    const email = form.email.value;
    const price = parseInt(form.price.value);
    const subCategory = form.subCategory.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const photoUrl = form.photoUrl.value;
    const description = form.description.value;
    const toyName = form.toyname.value;
    // form.reset();

    console.log(
      name,
      SellerName,
      email,
      price,
      subCategory,
      rating,
      quantity,
      photoUrl,
      description,
      toyName
    );
    const updateToyInfo = {
      name,
      SellerName,
      email,
      price,
      subCategory,
      rating,
      quantity,
      photoUrl,
      description,
      toyName,
    };

    //add a toy data to db
    fetch(`https://toys-land-server-sandy.vercel.app/all-toys/${_id}`, {
      method: "PUT",  //here
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateToyInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire("Your toy information is Updated");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="px-40 py-20">
        <Title title={"update toy"}/>
      <h3 className="text-5xl text-center font-semibold text-slate-300 mb-12">
        Update your toy details information{" "}
      </h3>
      <form onSubmit={handleUpdateToys}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Seller name
            </label>
            <input
              type="text"
              name="sellerName"
              defaultValue={SellerName}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter seller name"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              defaultValue={email}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Price
            </label>
            <input
              type="number"
              name="price"
              defaultValue={price}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter the product price"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Sub Category
            </label>
            <input
              type="text"
              name="subCategory"
              defaultValue={subCategory}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Sub Category"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Rating
            </label>
            <input
              type="number"
              name="rating"
              defaultValue={rating}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter product rating"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Quantity
          </label>
          <input
            type="number"
            name="quantity"
            defaultValue={quantity}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter available quantity"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Picture Url
          </label>
          <input
            type="url"
            name="photoUrl"
            defaultValue={photoUrl}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter product image url"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Toy name
          </label>
          <input
            type="Toy name"
            name="toyname"
            defaultValue={toyName}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter product image url"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Description
          </label>
          <input
            type="text"
            name="description"
            defaultValue={description}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Deatils about the produc"
            required
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            I agree with the{" "}
            <a href="#" className="text-info hover:underline dark:text-info">
              terms and conditions
            </a>
            .
          </label>
        </div>
        <button className="btn btn-active btn-info text-white">Submit</button>
      </form>
    </div>
  );
};

export default UpdateToy;

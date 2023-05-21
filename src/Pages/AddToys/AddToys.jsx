import React from "react";
import Swal from "sweetalert2";

const AddToys = () => {
  const handleAddToys = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const SellerName = form.sellerName.value;
    const email = form.email.value;
    const price = parseInt(form.price.value)
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
    const newToyInfo = {
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
    fetch("http://localhost:5000/all-toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToyInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire("A new toy information is added");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="px-40 py-20">
      <h3 className="text-5xl text-center font-semibold text-slate-300 mb-12">
        Enter your products details information{" "}
      </h3>
      <form onSubmit={handleAddToys}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              //   for="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              //   id="first_name"
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label
              //   for="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Seller name
            </label>
            <input
              type="text"
              //   id="last_name"
              name="sellerName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter seller name"
              required
            />
          </div>
          <div>
            <label
              //   for="company"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              //   id="company"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              //   for="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price
            </label>
            <input
              type="number"
              //   id="phone"
              name="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter the product price"
              //   pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
          <div>
            <label
              //   for="website"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Sub Category
            </label>
            <input
              type="text"
              name="subCategory"
              //   id="website"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Sub Category"
              required
            />
          </div>
          <div>
            <label
              //   for="visitors"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Rating
            </label>
            <input
              type="number"
              name="rating"
              //   id="visitors"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter product rating"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            // for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Quantity
          </label>
          <input
            type="number"
            // id="email"
            name="quantity"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter available quantity"
            required
          />
        </div>
        <div className="mb-6">
          <label
            // for="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Picture Url
          </label>
          <input
            type="url"
            name="photoUrl"
            // id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter product image url"
            required
          />
        </div>
        <div className="mb-6">
          <label
            // for="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Toy name
          </label>
          <input
            type="Toy name"
            name="toyname"
            // id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter product image url"
            required
          />
        </div>
        <div className="mb-6">
          <label
            // for="confirm_password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <input
            type="text"
            name="description"
            // id="confirm_password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Deatils about the produc"
            required
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              //   id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label
            // for="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
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

export default AddToys;

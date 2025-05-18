import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";
import banner from "../assets/more/11.png";
import Swal from "sweetalert2";
const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    console.log(newCoffee);

      e.target.reset();
      

      fetch('http://localhost:3000/coffees', {
          method: 'POST',
          headers: {
              "Content-Type": "application/json",
          },
          body:JSON.stringify(newCoffee)

      })
          .then(res => res.json())
          .then(data => {
              if (data.insertedId) {
              Swal.fire({
  title: "Coffee Added Successfully!",
  icon: "success",
  draggable: true
});
          }
      })
  };
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="px-4 md:px-10 lg:px-20 py-10"
    >
      <Link
        to={"/"}
        className="font-rancho text-xl mb-8 flex items-center gap-2"
      >
        <FaArrowLeft />
        Back to home
      </Link>

      <div className="bg-[#F4F3F0] p-6 md:p-10 lg:px-28">
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-3xl md:text-4xl font-rancho">Add New Coffee</h1>
          <p className="text-sm md:text-base">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>

        <form onSubmit={handleAddCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            {/* Name */}
            <fieldset className="fieldset rounded-box">
              <label className="label text-lg">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full border-none focus:outline-0"
                placeholder="Enter coffee name"
              />
            </fieldset>

            {/* Chef */}
            <fieldset className="fieldset rounded-box">
              <label className="label text-lg">Price</label>
              <input
                type="text"
                name="price"
                className="input w-full border-none focus:outline-0"
                placeholder="Enter coffee Price"
              />
            </fieldset>

            {/* Supplier */}
            <fieldset className="fieldset rounded-box">
              <label className="label text-lg">Supplier</label>
              <input
                type="text"
                name="supplier"
                className="input w-full border-none focus:outline-0"
                placeholder="Enter coffee supplier"
              />
            </fieldset>

            {/* Taste */}
            <fieldset className="fieldset rounded-box">
              <label className="label text-lg">Taste</label>
              <input
                type="text"
                name="taste"
                className="input w-full border-none focus:outline-0"
                placeholder="Enter coffee taste"
              />
            </fieldset>

            {/* Category */}
            <fieldset className="fieldset rounded-box">
              <label className="label text-lg">Category</label>
              <input
                type="text"
                name="category"
                className="input w-full border-none focus:outline-0"
                placeholder="Enter coffee category"
              />
            </fieldset>

            {/* Details */}
            <fieldset className="fieldset rounded-box">
              <label className="label text-lg">Details</label>
              <input
                type="text"
                name="details"
                className="input w-full border-none focus:outline-0"
                placeholder="Enter coffee details"
              />
            </fieldset>
          </div>

          {/* Photo URL */}
          <fieldset className="fieldset rounded-box mt-5">
            <label className="label text-lg">Photo</label>
            <input
              type="text"
              name="photo"
              className="input w-full border-none focus:outline-0"
              placeholder="Enter photo URL"
            />
          </fieldset>

          {/* Submit button */}
          <input
            type="submit"
            value="Add Coffee"
            className="px-4 py-2 bg-[#E3B577] text-xl font-semibold font-rancho hover:cursor-pointer w-full mt-5 border-2 border-[#331A15] rounded-md"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;

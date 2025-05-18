import React from "react";
import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, Links } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, price, category, image } = coffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json"
          },
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success"
              });
                const remainingCoffees = coffees.filter(cof => cof._id !== _id);
                setCoffees(remainingCoffees);
                
            }
          });
      }
    });
  };

  return (
    <div className="flex items-center gap-10 justify-center bg-[#F5F4F1] p-10 mt-6 rounded-md">
      <div>
        <img src={image} alt={name} className="w-20 h-20 object-cover rounded" />
      </div>
      <div>
        <h2><span className="font-bold">Name</span> : {name}</h2>
        <h2><span className="font-bold">Category</span>: {category}</h2>
        <h2><span className="font-bold">Price</span> : {price} Taka</h2>
      </div>
      <div className="space-y-3 flex flex-col">
        <Link to={`/coffee/${_id}`}><FaEye fill="white" className="bg-[#D2B48C] p-2 text-3xl rounded" /></Link>
        <Link to={`/updateCoffee/${_id}`}><FaPen fill="white" className="bg-[#3C393B] p-2 text-3xl rounded" /></Link>
        <button onClick={() => handleDelete(_id)}><MdDelete fill="white" className="bg-[#EA4744] p-2 text-3xl rounded" /></button>
      </div>
    </div>
  );
};

export default CoffeeCard;
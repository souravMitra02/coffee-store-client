import React, { useState } from "react";
import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Users = () => {
  const initialUsers = useLoaderData();
  const [users, setusers] = useState(initialUsers);

  const handleUserDelete = (id) => {
    console.log("hello world", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
              if (data.deletedCount) {
                  const remainingUsers = users.filter(user => user._id !== id);
                  setusers(remainingUsers);
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="table table-zebra w-full min-w-[600px]">
        {/* head */}
        <thead className="bg-base-200">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Job</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user.name}</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
                  <td>{user.email}</td>
              <td>
                <div className="flex flex-col  sm:items-center sm:gap-2 space-y-2 sm:space-y-0">
                  <Link>
                    <FaEye
                      fill="white"
                      className="bg-[#D2B48C] p-2 text-3xl rounded"
                    />
                  </Link>
                  <Link>
                    <FaPen
                      fill="white"
                      className="bg-[#3C393B] p-2 text-3xl rounded"
                    />
                  </Link>
                  <button onClick={() => handleUserDelete(user._id)}>
                    <MdDelete
                      fill="white"
                      className="bg-[#EA4744] p-2 text-3xl rounded"
                    />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;

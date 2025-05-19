import React, { use } from "react";
import banner from "../assets/more/17.jpg";
import logo from "../assets/more/21.png";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = use(AuthContext);
  console.log(createUser);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...restFormData } = Object.fromEntries(
      formData.entries()
      );
      
      

    createUser(email, password)
      .then((result) => {
        console.log(result.user);

          const userProfile = {
              email,
              ...restFormData,
              creationTime: result.user?.metadata?.creationTime,
              lastSignInTime: result.user?.metadata?.lastSignInTime,
              
        }  
          
          
        // Save user profile to server
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Your Account is created.",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 relative"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Logo */}
      <div className="hidden md:block absolute md:top-16 md:left-76 z-20 transform -rotate-40">
        <img
          src={logo}
          alt="Logo"
          className="w-28 bg-white rounded-full p-2 shadow-xl border-4 border-[#331A15] transition duration-500 hover:rotate-3 hover:scale-105"
        />
      </div>

      {/* Form Card */}
      <div className="card bg-[#E3B577] w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto shrink-0 shadow-lg rounded-md z-10 mt-20 md:mt-32">
        <div className="card-body p-6 md:p-10">
          <form onSubmit={handleSignUp} className="space-y-4">
            <label className="label text-lg font-medium">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your Name"
            />
            <label className="label text-lg font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your Email"
            />
            <label className="label text-lg font-medium">Phone</label>
            <input
              type="text"
              defaultValue={"01**********"}
              name="number"
              className="input w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your Number"
            />
            <label className="label text-lg font-medium">Password</label>
            <input
              type="password"
              name="password"
              className="input w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover text-sm text-blue-600">
                Forgot password?
              </a>
            </div>
            <button className="btn px-4 py-2 bg-[#331A15] text-white text-xl font-semibold font-rancho hover:cursor-pointer w-full mt-5 border-2 border-[#331A15] rounded-md">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

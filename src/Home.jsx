// import React from "react";
// import { Button } from "./components/ui/button";
// import {Link} from "react-router-dom";
// const Home=() => {
//     return ( 
//         <div>
//     <div className="flex justify-center mt-10 bg-red-200">
//         <h1 className="text-4xl">Welcome to Fake Store</h1>
//         </div>
//         <div className="flex justify-center">
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Dy7OqwTp4XD7SMdvW6wxtGHU-Mqm_7dmtA&s" width="5000" height="6000"></img>
//         </div>
//         <div className="flex justify-center">
//         <Button className ="text-lg mt-5">
//            <Link  to={"/products"}>Shop Now </Link> 
//               </Button>
//         </div>
//         </div>
//     );
// };

// export default Home;




import React from "react";
import { Button } from "./components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/products"); // Navigate to the ProductsList page
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-pink-100">
      {/* Header */}
      <div className="flex justify-center mt-10 bg-red-200 w-full py-4">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Fake Store</h1>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mt-6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Dy7OqwTp4XD7SMdvW6wxtGHU-Mqm_7dmtA&s"
          width="400"
          height="400"
          alt="Fake Store"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Shop Now Button */}
      <div className="flex justify-center mt-5">
        <Button className="text-lg bg-purple-500 text-white px-6 py-3 rounded hover:bg-purple-600">
          <Link to={"/products"}>Shop Now</Link>
        </Button>
      </div>

      {/* Login Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg mt-10 w-[80%]">
        <h1 className="text-center text-2xl font-semibold text-gray-700 mb-4">
          ECOMMERCE WEBSITE
        </h1>

        <div className="flex justify-between">
          {/* Logo Section */}
          <div className="flex flex-col items-center justify-center w-1/2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdmbfXaN25UrQQUqMeowT18BHvbKLt6tvT_g&s" // Replace with your actual logo URL
              alt="Fake Store Logo"
              className="w-40 h-40 rounded-full shadow-lg"
            />
          </div>

          {/* Login Form */}
          <div className="w-1/2 p-6 bg-white rounded-lg border shadow-md">
            <h2 className="text-xl font-bold mb-2">Login →</h2>
            <p className="text-gray-600 text-sm">Gmail or Mobile Number</p>
            <input
              type="text"
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter your email or mobile"
            />

            <p className="text-gray-600 text-sm mt-2">Enter Valid OTP</p>
            <input
              type="text"
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter OTP"
            />

            <h3 className="text-lg font-bold mt-4">User Name:</h3>
            <input
              type="text"
              className="w-full p-2 border rounded mt-1"
              placeholder="First Name"
            />
            <input
              type="text"
              className="w-full p-2 border rounded mt-2"
              placeholder="Last Name"
            />

            <h3 className="text-lg font-bold mt-4">Location:</h3>
            <p className="text-gray-600 text-sm">Choose your Area:</p>
            <input
              type="text"
              className="w-full p-2 border rounded mt-1"
              placeholder="City / Area"
            />

            <p className="text-gray-600 text-sm mt-2">Pincode:</p>
            <input
              type="text"
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter Pincode"
            />

            <button
              onClick={handleSubmit} // Handle navigation
              className="mt-4 w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ question }) => {
  const navigate = useNavigate();

  function submitHandler() {
    navigate("/question1");
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-yellow-300 to-pink-300">
      <form className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center text-pink-600">
          Welcome Back!
        </h2>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-semibold mb-2"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            className="w-full border border-pink-300 rounded-md py-2 px-3 focus:outline-none"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 font-semibold mb-2"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full border border-pink-300 rounded-md py-2 px-3 focus:outline-none"
          />
        </div>
        <button
          className="w-full bg-pink-500 text-white font-semibold py-2 rounded-md hover:bg-pink-700"
          onClick={submitHandler}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Home;

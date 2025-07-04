import React, { useState } from "react";

const LoginPage = () => {
  const [email,setEmail]= useState("")
  const [password,setPassword] = useState("")

  const handleSubmit= (e)=>{
    e.preventDefault();
    console.log(email);
    console.log(password);
    
    
  }

  return (
    <>
      <div className=" flex min-h-screen bg-gray-100  gap-4">
        {/* Left Side Content */}
        <div className="hidden md:flex w-1/2 bg-white text-white  items-center justify-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Why Choose Us?</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-violet-500 font-bold">✔</span>
                <p className="ml-2 text-gray-600">Shorten links in seconds.</p>
              </li>
              <li className="flex items-center">
                <span className="text-violet-500 font-bold">✔</span>
                <p className="ml-2 text-gray-600">Track link performance.</p>
              </li>
              <li className="flex items-center">
                <span className="text-violet-500 font-bold">✔</span>
                <p className="ml-2 text-gray-600">Easy to use and free.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side Login Form */}
        <div className="w-full  md:w-1/2 bg-white p-8 flex items-center justify-center">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <h2 className="mt-6 text-4xl font-extrabold text-gray-900">
                Welcome Back
              </h2>
              <p className="mt-2 text-sm text-gray-600">Sign in to your account</p>
            </div>
            <form className="mt-8 space-y-6" action="#" method="post">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                  placeholder="Enter your password"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-violet-500 text-white font-semibold rounded-lg shadow-md hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-300 transition duration-300"
                >
                  Sign In
                </button>
              </div>
            </form>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <a href="/signup" className="text-violet-500 hover:underline">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

import React from "react";

const LoginPage = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-1/2 bg-black p-4 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-center text-blue-50 underline tracking-wide">Welcome Back</h1>
        </div>
        <div className="w-1/2 bg-white-50 p-4 flex items-center justify-center">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <h2 className="mt-6 text-4xl font-extrabold text-gray-900">Welcome Back</h2>
                    <p className="mt-2 text-sm text-gray-600">Sign in to your account</p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="post">
                  <div><label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                  <input id="email" name="email" type="email" autoComplete="email" required className="mt-1 block w-full px-4 py-2 border border-gray-700 rounded-md shadow-sm foucs:ring-indigo-500 focus:border-ingigo-500 sm:text-sm" /></div>

                  <div><label htmlFor="Password" className="block text-sm font-medium text-gray-700">Password</label>
                  <input id="password " name="password" type="password" required className="mt-1 block w-full px-4 py-2 border border-gray-700 rounded-md shadow-sm foucs:ring-ingigo-500 foucus:border-ingigo-500 sm:text-sm"/></div>
                </form> 
            </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

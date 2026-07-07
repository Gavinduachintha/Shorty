import React from "react";
import { LogIn } from 'lucide-react';

const SignInButton = () => {
  return (
    <>
      <div className="flex w-full justify-center">
        <button className="w-full  px-4 py-1 bg-[#6C47FF] hover:bg-[#5B3BE6] rounded  text-white shadow-md hover:shadow-lg transition-all duration-200">
          Sign In <LogIn className="ml-0.5 inline-block h-4 w-4" />
        </button>
      </div>
    </>
  );
};

export default SignInButton;

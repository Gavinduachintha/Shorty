'use client'
import React from "react";
import { Link3 } from "reicon-react";
const AddLinkButton = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full justify-center">
        <button className="w-full  px-4 py-1 bg-[#6C47FF] hover:bg-[#5B3BE6] rounded  text-white shadow-md hover:shadow-lg transition-all duration-200">
          Add <Link3 weight="Filled" className="h-5 w-5" />

        </button>
      </div>
    </>
  );
};

export default  AddLinkButton;
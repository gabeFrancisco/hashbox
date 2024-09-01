"use client";

import React, { useState } from "react";

interface InformationProps {
  title: string;
  text: string;
}

const Information = (props: InformationProps) => {
  return (
    <div className="pt-1 my-5 border-b border-gray-400 hover:bg-gray-100">
      <div className="flex flex-row justify-between py-1 cursor-pointer">
        <h2 className="text-xl">{props.title}</h2>
        <button
          className="px-2 py-1 text-gray-500 "
        >
        </button>
      </div>
      
        <div className="py-3 mt-1 mb-2 border-t border-gray-200 ">
          <p className="text-sm">{props.text}</p>
        </div>
      
    </div>
  );
};

export default Information;

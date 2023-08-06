"use client";

import React, { useState } from "react";

interface InformationProps {
  title: string;
  text: string;
}

const Information = (props: InformationProps) => {
  const [toggleView, setToggleView] = useState(false);
  const handleView = () => {
    toggleView ? setToggleView(false) : setToggleView(true);
    console.log(toggleView);
  };
  return (
    <div className="my-5 pt-1 px-3 border-gray-200 rounded hover:bg-gray-100 shadow">
      <div onClick={handleView} className="py-1 flex flex-row justify-between cursor-pointer">
        <h3 className="text-xl">{props.title}</h3>
        <button
          onClick={handleView}
          className=" text-gray-500 rounded px-2 py-1"
        >
          {toggleView ? "↑" : "↓"}
        </button>
      </div>
      {toggleView ? (
        <div className="mt-1 mb-2 py-3 border-t rounded border-gray-200">
          <p className="text-sm">{props.text}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Information;

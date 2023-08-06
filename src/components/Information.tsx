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
    <div className="my-5 pt-1 px-3 border border-gray-200 rounded-lg hover:bg-gray-100">
      <div onClick={handleView} className="py-1 flex flex-row justify-between cursor-pointer">
        <h3 className="text-xl">{props.title}</h3>
        <button
          onClick={handleView}
          className="border-b text-gray-500 rounded px-2 py-1"
        >
          {toggleView ? "↑" : "↓"}
        </button>
      </div>
      {toggleView ? (
        <div className="py-3 mt-1 border-t border-gray-200">
          <p>{props.text}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Information;

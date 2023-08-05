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
    <div className="my-5 py-2 px-3 border border-gray-200 rounded-lg">
      <div className="py-1 border-b border-gray-200 flex flex-row justify-between">
        <h3 className="text-xl">{props.title}</h3>
        <button
          onClick={handleView}
          className="border rounded-lg px-3 py-1 bg-blue-800 hover:bg-blue-900 text-white"
        >
          {toggleView ? "↑" : "↓"}
        </button>
      </div>
      {toggleView ? (
        <div className="py-3">
          <p>{props.text}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Information;

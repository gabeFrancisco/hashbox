"use client";

import React, { useEffect, useState } from "react";

const BCryptForm = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false)


  const handleOutput = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: input }),
    };

    setOutput("Loading...")
    
    fetch("/api/bcrypt", requestOptions)
    .then((res) => res.json())
    .then(data => setOutput(data));
  };

  return (
    <div>
      <div className="grid gap-5 grid-col-1">
        <div className="flex flex-col">
          <label>Enter a password:</label>
          <input
            className="w-full p-1 my-1 border border-gray-400 gray-400 -lg"
            type="text"
            name="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
          <small>
            A good password must have at least more than 8 characters, symbols
            and numbers.
          </small>
        </div>
        <div className="flex flex-col">
          <label>Output:</label>
          <textarea
            className="w-full p-1 my-1 border border-gray-400 gray-400 -lg"
            name="output"
            value={output}
            readOnly
          />
        </div>
        <button
          className="px-3 py-1 text-white bg-blue-800 border hover:bg-blue-900"
          type="button"
          onClick={handleOutput}
        >
          Generate password!
        </button>
      </div>
    </div>
  );
};

export default BCryptForm;

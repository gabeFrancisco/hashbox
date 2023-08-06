"use client";

import React, { useEffect, useState } from "react";

const BCryptForm = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleOutput = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: input }),
    };

    fetch("/api/bcrypt", requestOptions)
    .then((res) => res.json())
    .then(data => setOutput(data));
  };

  return (
    <div>
      <div className="grid grid-col-1 gap-5">
        <div className="flex flex-col">
          <label>Enter a password:</label>
          <input
            className="p-1 border-2 border-dashed my-3 border-gray-400 rounded-lg w-full"
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
            className="p-1 border-2 border-dashed my-3 border-gray-400 rounded-lg w-full"
            name="output"
            value={output}
            readOnly
          />
        </div>
        <button
          className="border rounded-lg px-3 py-1 bg-blue-800 hover:bg-blue-900 text-white"
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

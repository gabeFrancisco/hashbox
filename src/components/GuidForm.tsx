"use client";

import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";

const GuidForm = () => {
  const [guids, setGuids] = useState(['']);
  const [num, setNum] = useState(1);
  const generateGuid = () => {
    if (num < 1) {
      setNum(1);
    } else if (num > 30) {
      setNum(30);
    }
    const genGuids = [];
    for (let i = 0; i < num; i++) {
      genGuids.push(`${uuidv4().replace(",", "")}\n`);
    }
    console.log(genGuids)
    genGuids.join('')
    setGuids(genGuids);
  };
  return (
    <div>
      <form>
        <div className="grid grid-col gap-5 mr-3">
          <div className="">
            <label>Number of GUIDs(30 max):</label>
            <input
              type="number"
              className="border-2 border-dashed ml-3 border-gray-400 rounded-lg p-1"
              min={1}
              max={30}
              value={num}
              onChange={(e) => setNum(+e.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={generateGuid}
            className="border rounded-lg px-3 py-1 bg-blue-800 hover:bg-blue-900 text-white"
          >
            Generate GUID!
          </button>
          <div className="flex flex-col">
            <label htmlFor="result">Result:</label>
            <textarea
              className="p-1 border-2 my-3 border-dashed border-gray-400 rounded-lg w-full"
              name="result"
              id=""
              cols={30}
              rows={10}
              value={guids.join('')}
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GuidForm;

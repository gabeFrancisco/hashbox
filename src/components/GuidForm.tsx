"use client";

import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";

const GuidForm = () => {
  const [guid, setGuid] = useState("");
  const generateGuid = () => {
    setGuid(uuidv4());
  };
  return (
    <div>
      <form>
        <div className="grid grid-col gap-5">
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
              className="border-2 my-3 border-dashed border-gray-400 rounded-lg w-full"
              name="result"
              id=""
              cols={30}
              rows={10}
              value={guid}
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GuidForm;

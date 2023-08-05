import React from "react";

const Base64Form = () => {
  return (
    <div>
      <form>
        <div className="grid grid-col-1 gap-5">
          <div className="flex flex-col">
            <label>Enter input text:</label>
            <input
              type="text"
              className="p-1 border-2 border-dashed my-3 border-gray-400 rounded-lg w-full"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Base64Form;

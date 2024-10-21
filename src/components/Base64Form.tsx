"use client";

import React, { useState } from "react";

const Base64Form = () => {
  //Encode:
  const [encoder, setEncoder] = useState("");
  const [encodeResult, setEncodeResult] = useState("");
  const handleEncode = () => {
    setEncodeResult(btoa(encoder));
  };

  //Decode:
  const [decoder, setDecoder] = useState("");
  const [decodeResult, setDecodeResult] = useState("");
  const handleDecode = () => {
    setDecodeResult(atob(decoder));
  };

  const handleCopytoClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div>
      <h3 className="my-5 text-2xl text-blue-900">Encode:</h3>
      <form>
        <div className="grid gap-5 grid-col-1">
          <div className="flex flex-col">
            <label>Enter input text:</label>
            <div className="flex flex-row w-full">
              <button type="button" className="px-3 my-1 text-white bg-blue-800 rounded-tl rounded-bl hover:bg-blue-900">
                Paste
              </button>
              <textarea
                className="w-full p-1 my-1 border border-gray-400 gray-400 -lg"
                name="encoder"
                value={encoder}
                onChange={(e) => setEncoder(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label>Encoded result:</label>
            <div className="flex flex-row w-full">
              <button type="button" className="px-3 my-1 text-white bg-blue-800 rounded-tl rounded-bl hover:bg-blue-900" onClick={() => handleCopytoClipboard(encodeResult)}>
                Copy
              </button>
              <textarea
                className="w-full p-1 my-1 border border-gray-400 gray-400 -lg"
                name="endodeResult"
                value={encodeResult}
              />
            </div>
          </div>
          <button
            className="px-3 py-1 text-white bg-blue-800 border hover:bg-blue-900"
            type="button"
            onClick={handleEncode}
          >
            Encode!
          </button>
        </div>
      </form>

      <h3 className="my-5 text-2xl text-blue-900">Decode:</h3>
      <form>
        <div className="grid gap-5 grid-col-1">
          <div className="flex flex-col">
            <label>Enter input text:</label>
            <div className="flex flex-row w-full">
              <button type="button" className="px-3 my-1 text-white bg-blue-800 rounded-tl rounded-bl hover:bg-blue-900">
                Paste
              </button>
              <textarea
                className="w-full p-1 my-1 border border-gray-400 gray-400 -lg"
                name="encoder"
                value={decoder}
                onChange={(e) => setDecoder(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label>Decoded result:</label>
            <div className="flex flex-row w-full">
              <button  type="button" className="px-3 my-1 text-white bg-blue-800 rounded-tl rounded-bl hover:bg-blue-900">
                Copy
              </button>
              <textarea
                className="w-full p-1 my-1 border border-gray-400 gray-400 -lg"
                name="endodeResult"
                value={decodeResult}
              />
            </div>
          </div>
          <button
            className="px-3 py-1 text-white bg-blue-800 border -lg hover:bg-blue-900"
            type="button"
            onClick={handleDecode}
          >
            Decode!
          </button>
        </div>
      </form>
    </div>
  );
};

export default Base64Form;

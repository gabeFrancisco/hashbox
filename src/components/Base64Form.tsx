'use client'

import React, { useState } from "react";

const Base64Form = () => {

  //Encode:
  const [encoder, setEncoder] = useState('')
  const [encodeResult, setEncodeResult] = useState('');
  const handleEncode = () => {
    setEncodeResult(btoa(encoder));
  }

  //Decode:
  const [decoder, setDecoder] = useState('')
  const [decodeResult, setDecodeResult] = useState('');
  const handleDecode = () => {
    setDecodeResult(atob(decoder));
  }

  return (
    <div>
      <h3 className="text-2xl my-5 text-blue-900">Encode:</h3>
      <form>
        <div className="grid grid-col-1 gap-5">
          <div className="flex flex-col">
            <label>Enter input text:</label>
            <textarea
              className="p-1 border-2 border-dashed my-3 border-gray-400 rounded-lg w-full"
              name="encoder"
              value={encoder}
              onChange={e => setEncoder(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label>Encoded result:</label>
            <textarea
              className="p-1 border-2 border-dashed my-3 border-gray-400 rounded-lg w-full"
              name="endodeResult"
              value={encodeResult}
            />
          </div>
          <button
              className="border rounded-lg px-3 py-1 bg-blue-800 hover:bg-blue-900 text-white"
              type="button"
              onClick={handleEncode}
            >
              Encode!
            </button>
        </div>
      </form>


      <h3 className="text-2xl my-5 text-blue-900">Decode:</h3>
      <form>
        <div className="grid grid-col-1 gap-5">
          <div className="flex flex-col">
            <label>Enter input text:</label>
            <textarea
              className="p-1 border-2 border-dashed my-3 border-gray-400 rounded-lg w-full"
              name="encoder"
              value={decoder}
              onChange={e => setDecoder(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label>Decoded result:</label>
            <textarea
              className="p-1 border-2 border-dashed my-3 border-gray-400 rounded-lg w-full"
              name="endodeResult"
              value={decodeResult}
            />
          </div>
          <button
              className="border rounded-lg px-3 py-1 bg-blue-800 hover:bg-blue-900 text-white"
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

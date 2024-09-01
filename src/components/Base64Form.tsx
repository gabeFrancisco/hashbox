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
      <h3 className="my-5 text-2xl text-blue-900">Encode:</h3>
      <form>
        <div className="grid gap-5 grid-col-1">
          <div className="flex flex-col">
            <label>Enter input text:</label>
            <textarea
              className="w-full p-1 my-1 border border-gray-400 gray-400 -lg"
              name="encoder"
              value={encoder}
              onChange={e => setEncoder(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label>Encoded result:</label>
            <textarea
              className="w-full p-1 my-1 border border-gray-400 gray-400 -lg"
              name="endodeResult"
              value={encodeResult}
            />
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
            <textarea
              className="w-full p-1 my-1 border border-gray-400 gray-400 -lg"
              name="encoder"
              value={decoder}
              onChange={e => setDecoder(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label>Decoded result:</label>
            <textarea
              className="w-full p-1 my-1 border border-gray-400 gray-400 -lg"
              name="endodeResult"
              value={decodeResult}
            />
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

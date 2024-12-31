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

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div>
      <h3 className="my-5 text-2xl text-blue-900">Encode:</h3>
      <form>
        <div className="grid gap-5 grid-col-1">
          <div className="flex flex-col">
            <label>Enter input text:</label>
            <div className="flex flex-row w-full">
              <button
                onClick={() => {
                  navigator.clipboard
                    .readText()
                    .then((text) => setEncoder(text));
                }}
                type="button"
                className="rounded-tr-none rounded-br-none btn-primary"
              >
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
              <button
                type="button"
                className="rounded-tr-none rounded-br-none btn-primary"
                onClick={() => handleCopyToClipboard(encodeResult)}
              >
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
            className="btn-primary"
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
              <button
                type="button"
                onClick={() =>
                  navigator.clipboard
                    .readText()
                    .then((text) => setDecoder(text))
                }
                className="rounded-tr-none rounded-br-none btn-primary"
              >
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
              <button
                type="button"
                onClick={() => handleCopyToClipboard(decodeResult)}
                className="rounded-br-none prounded-tr-none btn-primary"
              >
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
            className="btn-primary"
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

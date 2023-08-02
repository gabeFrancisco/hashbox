"use client";

import { useFormik } from "formik";
import React, { useState } from "react";
import { sha1, sha256, sha384, sha512 } from "crypto-hash";

const HashForm = () => {
  const [output, setOutput] = useState("");
  const formik = useFormik({
    initialValues: {
      type: "sha256",
      input: "",
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      switch(values.type){
        case 'sha1':
          await sha1(values.input).then((result) => setOutput(result));
          break;
        case 'sha256':
          await sha256(values.input).then((result) => setOutput(result));
          break;
        case 'sha384':
          await sha384(values.input).then((result) => setOutput(result));
          break;
        case 'sha512':
          await sha512(values.input).then((result) => setOutput(result));
          break;
      }
    },
  });
  return (
    <div>
      <form>
        <div className="grid grid-col-1 gap-5">
          <div className="flex flex-col">
            <label>Enter input text:</label>
            <textarea
              className="p-1 border-2 border-dashed my-3 border-gray-400 rounded-lg w-full"
              name="input"
              onChange={formik.handleChange}
              value={formik.values.input}
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label htmlFor="type">Hash Type:</label>
            <fieldset>
              <div className="flex flex-row my-3">
                <div className="mr-3">
                  <input
                    type="radio"
                    className="mx-1"
                    name="type"
                    value="sha1"
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="">SHA-1</label>
                </div>
                <div className="mr-3">
                  <input
                    type="radio"
                    className="mx-1"
                    name="type"
                    value="sha256"
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="">SHA-256</label>
                </div>
                <div className="mr-3">
                  <input
                    type="radio"
                    className="mx-1"
                    name="type"
                    value="sha384"
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="">SHA-384</label>
                </div>
                <div className="mr-3">
                  <input
                    type="radio"
                    className="mx-1"
                    name="type"
                    value="sha512"
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="">SHA-512</label>
                </div>
              </div>
            </fieldset>
          </div>
          <div>
            <button
              type="button"
              onClick={() => formik.handleSubmit()}
              className="border rounded-lg px-3 py-1 bg-blue-800 hover:bg-blue-900 text-white"
            >
              Generate!
            </button>
          </div>
          <div className="flex flex-col">
            <label>Output:</label>
            <textarea
              className="p-1 border-2 my-3 border-dashed border-gray-400 rounded-lg w-full"
              name="input"
              value={output}
              rows={10}
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HashForm;

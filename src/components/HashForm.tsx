"use client";

import { useFormik } from "formik";
import React, { useState } from "react";
import { sha1, sha256, sha384, sha512 } from "crypto-hash";

const HashForm = () => {
  const [output, setOutput] = useState("");
  const formik = useFormik({
    initialValues: {
      type: "",
      input: "",
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      await sha512(values.input).then((result) => setOutput(result));
    },
  });
  return (
    <div>
      <form>
        <div className="grid grid-col-1 gap-5">
          <div className="flex flex-col">
            <label>Enter input text:</label>
            <textarea
              className="border-2 my-3 border-gray-400 rounded-lg w-full"
              name="input"
              onChange={formik.handleChange}
              value={formik.values.input}
            ></textarea>
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
              className="border-2 my-3 border-gray-400 rounded-lg w-full"
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

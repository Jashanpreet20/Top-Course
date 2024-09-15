import React from "react";
import { FaSpinner } from "react-icons/fa";
export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen gap-y-2">
      <FaSpinner className="text-blue-700 text-5xl animate-spin" />
      <h1 className="text-5xl text-blue-700 font-bold">Please wait</h1>
    </div>
  );
}

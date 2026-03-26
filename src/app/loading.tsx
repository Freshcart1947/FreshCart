import React from "react";
import { FaSpinner } from "react-icons/fa";

export default function Loading() {
  return (

    <div className="min-h-screen flex justify-center items-center bg-white/50">

      <FaSpinner className="animate-spin text-primary-600 text-5xl" />
    </div>
  );
}

import React from "react";
import { HiPlus } from "react-icons/hi";

export default function AddToCartBtn() {
  return (
    <button className="mt-5 w-full bg-primary-600 hover:bg-primary-700 text-white py-3.5 rounded-xl flex items-center justify-center gap-2.5 transition-all duration-300 shadow-lg shadow-emerald-100 hover:shadow-emerald-200 cursor-pointer active:scale-95">
      <HiPlus className="text-xl  transition-transform duration-300" />
      <span className="text-sm font-bold uppercase tracking-wide">
        Add to Cart
      </span>
    </button>
  );
}

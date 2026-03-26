"use client"
import { ProductDetails } from "@/interfaces/productDetails.interface";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function QuantityCounter({
  product,
}: {
  product: ProductDetails;
}) {
  return (
    <div className="flex items-center gap-6 mb-8">
      <div className="flex items-center border-2 border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm">
        {/* Minus btn*/}
        <button
          className="px-5 py-3 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all disabled:opacity-30 disabled:hover:bg-transparent"
          disabled={true}
        >
          <FaMinus size={14} />
        </button>

        {/* حقل الرقم */}
        <input
          type="number"
          min={1}
          max={product.data.quantity}
          value={1}
          readOnly
          className="w-16 text-center border-0 focus:ring-0 focus:outline-none text-lg font-medium"
        />

        {/* Plus*/}
        <button className="px-5 py-3 text-gray-400 hover:bg-primary-50 hover:text-primary-600 transition-all">
          <FaPlus size={14} />
        </button>
      </div>

      <div className="flex flex-col">
        <span className="text-sm font-bold text-gray-900">
          {product.data.quantity} available
        </span>
        <span className="text-[10px] text-green-500 font-medium uppercase tracking-wider">
          In Stock
        </span>
      </div>
    </div>
  );
}

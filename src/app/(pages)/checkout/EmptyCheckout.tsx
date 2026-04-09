import React from "react";
import Link from "next/link";
import { FaBagShopping } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";

export default function EmptyCheckout() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Icon Container */}
        <div className="relative mb-8">
          <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center mx-auto shadow-inner transform -rotate-12 border border-gray-100">
            <FaBagShopping className="w-14 h-14 text-gray-300" />
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-0 right-1/4 w-4 h-4 bg-primary-100 rounded-full animate-bounce"></div>
          <div className="absolute bottom-4 left-1/4 w-3 h-3 bg-primary-200 rounded-full"></div>
        </div>

        {/* Text Content */}
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Your cart is empty
        </h2>
        <p className="text-gray-500 mb-10 leading-relaxed text-lg">
          Your checkout session is currently empty because you haven't added any
          items to your cart yet.
        </p>

        {/* Action Button */}
        <Link
          href="/products"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 px-10 rounded-2xl font-bold hover:from-primary-700 hover:to-primary-800 transition-all shadow-xl shadow-primary-600/20 active:scale-[0.98] group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>Continue Shopping</span>
        </Link>

        {/* Footer Support Info */}
        <div className="mt-12 text-sm text-gray-400">
          <p>
            Need help?{" "}
            <Link href="/contact" className="text-primary-600 hover:underline">
              Contact our support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

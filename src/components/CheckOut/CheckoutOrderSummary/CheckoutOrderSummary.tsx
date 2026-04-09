"use client";
import useCart from "@/hooks/useCart/useCart";
import { CartResponse } from "@/interfaces/cart.interface";
import React from "react";
import { FaBox, FaTruck } from "react-icons/fa";
import { FaBagShopping, FaShieldHalved } from "react-icons/fa6";
import { getCart } from "@/services/cart/getCart/getCart";

export default function CheckoutOrderSummary({
  res,
  isLoading,
}: {
  res: CartResponse;
  isLoading: boolean;
}) {
  const { numOfCartItems, data } = res;
  const { products, totalCartPrice } = data;

  const shippingThreshold = 500;
  const shippingCost = totalCartPrice > shippingThreshold ? 0 : 50;
  const finalTotal = totalCartPrice + shippingCost;

  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm sticky top-24">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-4 text-white">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <FaBagShopping /> Order Summary
          </h2>
          <p className="text-primary-100 text-sm mt-1">
            {numOfCartItems} items
          </p>
        </div>

        <div className="p-5">
          {/* Scrollable Items List */}
          <div className="space-y-3 max-h-56 overflow-y-auto mb-5 pr-1 custom-scrollbar">
            {products.map((item) => (
              <div
                key={item._id}
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="w-14 h-14 rounded-lg bg-white p-1 border border-gray-100 shrink-0">
                  <img
                    alt={item.product.title}
                    className="w-full h-full object-contain"
                    src={item.product.imageCover}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {item.product.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {item.count} × {item.price} EGP
                  </p>
                </div>
                <p className="text-sm font-bold text-gray-900 shrink-0">
                  {item.price * item.count}
                </p>
              </div>
            ))}
          </div>

          <hr className="border-gray-100 my-4" />

          {/* Pricing Details */}
          <div className="space-y-3">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span className="font-medium text-gray-900">
                {totalCartPrice} EGP
              </span>
            </div>

            <div className="flex justify-between text-gray-600">
              <span className="flex items-center gap-2">
                <FaTruck className="text-gray-400" /> Shipping
              </span>
              {/* التعديل في عرض الشحن */}
              {shippingCost === 0 ? (
                <span className="text-green-600 font-bold flex items-center gap-1">
                  FREE
                </span>
              ) : (
                <span className="font-medium text-gray-900">
                  {shippingCost} EGP
                </span>
              )}
            </div>

            {/* رسالة تشجيعية لو الشحن مش مجاني */}
            {shippingCost > 0 && (
              <p className="text-[11px] text-orange-600 bg-orange-50 p-2 rounded-lg border border-orange-100">
                Add <b>{shippingThreshold - totalCartPrice} EGP</b> more for{" "}
                <b>FREE Shipping!</b>
              </p>
            )}

            <hr className="border-gray-100" />

            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-gray-900">Total</span>
              <div className="text-right">
                <span className="text-2xl font-bold text-primary-600">
                  {finalTotal}
                </span>
                <span className="text-sm text-gray-500 ml-1">EGP</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button
            type="submit"
            disabled={isLoading}
            className=" cursor-pointer w-full mt-6 bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 rounded-xl font-bold hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg shadow-primary-600/20 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Processing...</span>
              </>
            ) : (
              <>
                <FaBox />
                <span>Place Order</span>
              </>
            )}
          </button>

          {/* Trust Badges */}
          <div className="flex items-center justify-center gap-4 mt-4 py-3 border-t border-gray-100">
            <div className="flex items-center gap-1.5 text-[10px] text-gray-500 uppercase tracking-wider font-bold">
              <FaShieldHalved className="text-green-500 text-xs" />
              <span>Secure</span>
            </div>
            <div className="w-px h-4 bg-gray-200"></div>
            <div className="flex items-center gap-1.5 text-[10px] text-gray-500 uppercase tracking-wider font-bold">
              <FaTruck className="text-blue-500 text-xs" />
              <span>Fast Delivery</span>
            </div>
            <div className="w-px h-4 bg-gray-200"></div>
            <div className="flex items-center gap-1.5 text-[10px] text-gray-500 uppercase tracking-wider font-bold">
              <FaBox className="text-orange-500 text-xs" />
              <span>Easy Returns</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

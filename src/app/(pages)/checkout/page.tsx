"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaReceipt,
  FaArrowLeft,
} from "react-icons/fa6";
import CheckoutForm from "@/components/CheckOut/CheckoutForm/CheckoutForm";
import useCart from "@/hooks/useCart/useCart";
import { CartResponse } from "@/interfaces/cart.interface";
import { getCart } from "@/services/cart/getCart/getCart";
import Loading from "@/app/loading";
import EmptyCheckout from "./EmptyCheckout";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const { data: res, isLoading } = useCart<CartResponse>(getCart, ["cart"]);

  if (isLoading || !res) {
    return <Loading />;
  }

  if(res.data.products.length === 0){
    return <EmptyCheckout/>
  }
  

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb & Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <span className="bg-gradient-to-br from-primary-600 to-primary-700 text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-primary-600/20">
                  <FaReceipt size={22} />
                </span>
                Complete Your Order
              </h1>
              <p className="text-gray-500 mt-2">
                Review your items and complete your purchase
              </p>
            </div>
            <Link
              className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-primary-50 transition-all"
              href="/cart"
            >
              <FaArrowLeft /> Back to Cart
            </Link>
          </div>
        </div>

        <CheckoutForm res={res} paymentMethod ={paymentMethod} setPaymentMethod={setPaymentMethod}  />
      </div>
    </div>
  );
}

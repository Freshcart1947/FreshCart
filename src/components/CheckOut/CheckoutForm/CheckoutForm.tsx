"use client";
import React, { useState } from "react";
import CheckoutOrderSummary from "../CheckoutOrderSummary/CheckoutOrderSummary";
import {
  FaCity,
  FaCreditCard,
  FaHouseUser,
  FaMoneyBill,
  FaPhone,
  FaWallet,
  FaCheck,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { CartResponse } from "@/interfaces/cart.interface";
import { onlinePayment } from "@/services/checkout/payment/onlinePayment/onlinePayment";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { cashPayment } from "@/services/checkout/payment/cashPayment/cashpayment";
import { zodResolver } from "@hookform/resolvers/zod";
import { shippingSchema } from "@/schema/shipping.schema";

interface CheckoutFormProps {
  res: CartResponse;
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
}

export interface ShippingFormData {
  city: string;
  details: string;
  phone: string;
}

export default function CheckoutForm({
  res,
  paymentMethod,
  setPaymentMethod,
}: CheckoutFormProps) {
  const { cartId } = res;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  // استخراج الـ errors من الـ formState
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormData>({
    resolver: zodResolver(shippingSchema),
    defaultValues: {
      details: "",
      phone: "",
      city: "",
    },
  });

  async function handleCheckout(values: ShippingFormData) {
    setIsLoading(true);
    try {
      if (paymentMethod === "cash") {
        const data = await cashPayment(cartId, values);
        if (data.status === "success") {
          toast.success("Order placed successfully!");
          router.push("/allorders");
        } else {
          toast.error("Something Went Wrong");
        }
      } else if (paymentMethod === "card") {
        const URL = await onlinePayment(cartId, values);
        if (URL) {
          router.push(URL);
        } else {
          toast.error("Something Went Wrong");
        }
      }
    } catch (err) {
      toast.error("An error occurred during checkout");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(handleCheckout)}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <FaHouseUser /> Shipping Address
              </h2>
              <p className="text-primary-100 text-sm mt-1">
                Where should we deliver your order?
              </p>
            </div>

            <div className="p-6 space-y-5">
              {/* City Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  City <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div
                    className={`absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${errors.city ? "bg-red-50 text-red-500" : "bg-gray-100 text-gray-500"}`}
                  >
                    <FaCity />
                  </div>
                  <input
                    {...register("city")}
                    className={`w-full px-4 py-3.5 pl-14 border-2 rounded-xl focus:outline-none transition-all ${
                      errors.city
                        ? "border-red-300 focus:border-red-500 focus:ring-red-50"
                        : "border-gray-200 focus:border-primary-500 focus:ring-primary-50"
                    }`}
                    placeholder="e.g. Cairo, Alexandria, Giza"
                    type="text"
                  />
                </div>
                {errors.city && (
                  <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium">
                    {errors.city.message}
                  </p>
                )}
              </div>

              {/* Street Address Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Street Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div
                    className={`absolute left-4 top-4 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${errors.details ? "bg-red-50 text-red-500" : "bg-gray-100 text-gray-500"}`}
                  >
                    <FaLocationDot />
                  </div>
                  <textarea
                    {...register("details")}
                    rows={3}
                    className={`w-full px-4 py-3.5 pl-14 border-2 rounded-xl focus:outline-none transition-all resize-none ${
                      errors.details
                        ? "border-red-300 focus:border-red-500 focus:ring-red-50"
                        : "border-gray-200 focus:border-primary-500 focus:ring-primary-50"
                    }`}
                    placeholder="Street name, building number, floor, apartment..."
                  ></textarea>
                </div>
                {errors.details && (
                  <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium">
                    {errors.details.message}
                  </p>
                )}
              </div>

              {/* Phone Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div
                    className={`absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${errors.phone ? "bg-red-50 text-red-500" : "bg-gray-100 text-gray-500"}`}
                  >
                    <FaPhone />
                  </div>
                  <input
                    {...register("phone")}
                    className={`w-full px-4 py-3.5 pl-14 border-2 rounded-xl focus:outline-none transition-all ${
                      errors.phone
                        ? "border-red-300 focus:border-red-500 focus:ring-red-50"
                        : "border-gray-200 focus:border-primary-500 focus:ring-primary-50"
                    }`}
                    placeholder="01xxxxxxxxx"
                    type="tel"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Payment Method Section (Unchanged logic) */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <FaWallet /> Payment Method
              </h2>
              <p className="text-primary-100 text-sm mt-1">
                Choose how you'd like to pay
              </p>
            </div>
            <div className="p-6 space-y-4">
              <button
                type="button"
                onClick={() => setPaymentMethod("cash")}
                className={` cursor-pointer w-full p-5 rounded-xl border-2 transition-all flex items-center gap-4 group ${paymentMethod === "cash" ? "border-primary-500 bg-primary-50/50" : "border-gray-100 hover:border-primary-200"}`}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${paymentMethod === "cash" ? "bg-primary-600 text-white" : "bg-gray-100 text-gray-400"}`}
                >
                  <FaMoneyBill size={24} />
                </div>
                <div className="flex-1 text-left">
                  <h3
                    className={`font-bold ${paymentMethod === "cash" ? "text-primary-700" : "text-gray-900"}`}
                  >
                    Cash on Delivery
                  </h3>
                  <p className="text-sm text-gray-500 mt-0.5">
                    Pay when your order arrives
                  </p>
                </div>
                {paymentMethod === "cash" && (
                  <div className="w-7 h-7 rounded-full bg-primary-600 text-white flex items-center justify-center">
                    <FaCheck size={12} />
                  </div>
                )}
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod("card")}
                className={` cursor-pointer w-full p-5 rounded-xl border-2 transition-all flex items-center gap-4 group ${paymentMethod === "card" ? "border-primary-500 bg-primary-50/50" : "border-gray-100 hover:border-primary-200"}`}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${paymentMethod === "card" ? "bg-primary-600 text-white" : "bg-gray-100 text-gray-400"}`}
                >
                  <FaCreditCard size={24} />
                </div>
                <div className="flex-1 text-left">
                  <h3
                    className={`font-bold ${paymentMethod === "card" ? "text-primary-700" : "text-gray-900"}`}
                  >
                    Pay Online
                  </h3>
                  <p className="text-sm text-gray-500 mt-0.5">
                    Secure payment via Stripe/Card
                  </p>
                </div>
                {paymentMethod === "card" && (
                  <div className="w-7 h-7 rounded-full bg-primary-600 text-white flex items-center justify-center">
                    <FaCheck size={12} />
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>

        <CheckoutOrderSummary isLoading={isLoading} res={res} />
      </div>
    </form>
  );
}

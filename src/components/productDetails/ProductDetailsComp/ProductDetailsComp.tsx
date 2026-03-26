import { ProductDetails } from "@/interfaces/productDetails.interface";
import React from "react";
import {
  FaBolt,
  FaMinus,
  FaPlus,
  FaRegHeart,
  FaShippingFast,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";
import ProductDetailsImages from "./ProductDetailsImages";
import QuantityCounter from "../QuantityCounter/QuantityCounter";

export default function ProductDetailsComp({
  product,
}: {
  product: ProductDetails;
}) {
  return (
    <>
      <section id="product-detail" className="my-10">
        <div className="relative flex flex-col lg:flex-row gap-10 items-start">
          <ProductDetailsImages product={product} />

          <div className="lg:w-2/3 w-full space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary-50 text-primary-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  {product.data.category.name}
                </span>
                <span className="text-gray-300">/</span>
                <span className="text-gray-500 text-sm font-medium">
                  {product.data.brand.name}
                </span>
              </div>

              <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
                {product.data.title}
              </h1>

              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star}>
                        {product.data.ratingsAverage >= star ? (
                          <FaStar />
                        ) : (
                          <FaStar className="text-gray-300" />
                        )}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.data.ratingsAverage} (
                    {product.data.ratingsQuantity} reviews)
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-black text-gray-900">
                  {product.data.price} EGP
                </span>
                <p className="text-gray-600 mt-6 leading-relaxed text-lg italic">
                  {product.data.description}
                </p>
              </div>

              <QuantityCounter product={product} />

              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <button className=" cursor-pointer flex-[3] bg-primary-600 text-white py-4 rounded-xl font-bold hover:bg-primary-700 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-lg shadow-primary-600/20">
                  <FaShoppingCart />
                  Add to Cart
                </button>

                <button className=" cursor-pointer flex-[2] bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-black active:scale-95 transition-all flex items-center justify-center gap-3">
                  <FaBolt />
                  Buy Now
                </button>
              </div>

              <div className="mb-8">
                <button className=" cursor-pointer w-full border-2 border-gray-100 text-gray-700 py-4 rounded-xl font-bold hover:border-primary-200 hover:text-primary-600 hover:bg-primary-50 transition-all flex items-center justify-center gap-2">
                  <FaRegHeart />
                  Add to Wishlist
                </button>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center italic">
                    <FaShippingFast />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">
                      Fast Delivery
                    </p>
                    <p className="text-[10px] text-gray-500 uppercase">
                      2-3 Business Days
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center italic">
                    <FaArrowRotateLeft />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">
                      30 Days Return
                    </p>
                    <p className="text-[10px] text-gray-500 uppercase">
                      Easy Returns
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center italic">
                    <RiSecurePaymentLine />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">
                      Secure Payment
                    </p>
                    <p className="text-[10px] text-gray-500 uppercase">
                      100% Protected
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

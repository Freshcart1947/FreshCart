"use client";
import { Product } from "@/interfaces/products.interface";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart, FaStar, FaEye } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";
import { LuRefreshCw } from "react-icons/lu"; // أيقونة الـ Compare/Rotate اللي في الـ HTML
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative">
        <Link href={`/products/${product._id}`} className="block">
          <Image
            src={product?.imageCover}
            alt={product?.title}
            width={400}
            height={400}
            className="w-full h-60 object-contain bg-white transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Action Buttons (Top Right) */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2">
          <button className="bg-white h-8 w-8 rounded-full flex items-center justify-center transition shadow-sm text-gray-600 hover:text-red-500 cursor-pointer">
            <FaRegHeart size={16} />
          </button>
          <button className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 shadow-sm cursor-pointer">
            <LuRefreshCw size={16} />
          </button>
          <Link
            href={`/products/${product._id}`}
            className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 shadow-sm"
          >
            <FaEye size={16} />
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-1">
        <div className="text-xs text-gray-500 mb-1">
          {product?.category?.name || "Category"}
        </div>

        <h3 className="font-medium mb-1 cursor-pointer" title={product.title}>
          <Link
            href={`/products/${product._id}`}
            className="line-clamp-2 hover:text-primary-600 transition-colors"
          >
            {product.title}
          </Link>
        </h3>

        {/* Ratings */}
        <div className="flex items-center mb-2">
          <div className="flex text-amber-400 mr-2">
            {/* دي بتعمل Stars بناءً على الـ rating */}
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={
                  i < Math.floor(product.ratingsAverage)
                    ? "text-yellow-400"
                    : "text-gray-200"
                }
                size={14}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">
            {product.ratingsAverage} ({product.ratingsQuantity || 0})
          </span>
        </div>

        {/* Price & Add to Cart (Bottom Row) */}
        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="text-lg font-bold text-gray-800">
              {product.priceAfterDiscount || product.price} EGP
            </span>
          </div>

          <AddToCartBtn
            id={product._id}
            className=" cursor-pointer h-10 w-10 rounded-full flex items-center justify-center transition bg-primary-600 text-white hover:bg-primary-700 active:scale-90"
          >
            <HiPlus size={20} />
          </AddToCartBtn>
        </div>
      </div>
    </div>
  );
}

import { Product } from "@/interfaces/products.interface";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { HiPlus } from "react-icons/hi";
import { IoEyeOutline } from "react-icons/io5";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product._id}`}
      className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
    >
      <div className="relative overflow-hidden">
        <Image
          src={product?.imageCover}
          alt={product?.title}
          width={450}
          height={450}
          className="w-full h-60 object-contain p-4 transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <button
            className=" cursor-pointer bg-white p-2.5 rounded-full shadow-md text-gray-600 hover:text-red-500 transition-colors"
            title="Add to wishlist"
          >
            <FaRegHeart className="text-lg" />
          </button>
          <button className=" cursor-pointer bg-white p-2.5 rounded-full shadow-md text-gray-600 hover:text-primary-600 transition-colors">
            <FaArrowsRotate className="text-lg" />
          </button>
          <Link
            href={`/products/${product._id}`}
            className=" cursor-pointer bg-white p-2.5 rounded-full shadow-md text-gray-600 hover:text-primary-600 transition-colors"
          >
            <IoEyeOutline className="text-lg" />
          </Link>
        </div>
      </div>

      <div className="p-4">
        <header>
          <span className="text-xs text-emerald-600 font-semibold">
            {product?.category?.name}
          </span>
          <h3 className="font-medium text-gray-800 line-clamp-1 mt-1">
            {product?.title}
          </h3>
        </header>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400 text-sm" />
            <span className="text-xs text-gray-500">
              {product?.ratingsAverage}
            </span>
          </div>
          <span className="text-base font-bold text-gray-900">
            {product?.price} EGP
          </span>
        </div>

        <button className=" cursor-pointer w-full mt-4 bg-emerald-600 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors active:scale-95">
          <HiPlus className="text-xl" />
          <span className="text-sm font-medium">Add to Cart</span>
        </button>
      </div>
    </Link>
  );
}

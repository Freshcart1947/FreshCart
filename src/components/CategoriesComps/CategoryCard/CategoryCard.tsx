import Link from "next/link";
import Image from "next/image";
import { Category } from "@/interfaces/categories.interface";



export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/categories/${category._id}`}
      className="group bg-white rounded-2xl border border-gray-100 p-4 sm:p-6 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-50 mb-4">
        <Image
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          src={category.image}
        />
      </div>

      <h3 className="font-bold text-gray-900 text-center group-hover:text-blue-600 transition-colors">
        {category.name}
      </h3>

      <div className="flex justify-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-xs text-blue-600 flex items-center gap-1">
          View Subcategories
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}

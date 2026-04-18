"use client";

import Loading from "@/app/loading";
import ProductCard from "@/components/productCard/ProductCard";
import FilterSidebar from "../FilterSidebar/FilterSidebar";
import { getAllProducts } from "@/services/poducts/getAllProducts/getAllProducts";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface SearchCompProps {
  allCategories: any[];
  allBrands: any[];
}

export default function SearchComp({
  allCategories,
  allBrands,
}: SearchCompProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const page = Number(searchParams.get("page")) || 1;
  const queryString = searchParams.toString();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", queryString, page],
    queryFn: () => getAllProducts(queryString),
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <FilterSidebar brands={allBrands} categories={allCategories} />

        <div className="flex-1 min-h-[400px]">
          {isLoading ? (
            <div className="h-full flex items-center justify-center">
              <Loading />
            </div>
          ) : isError ? (
            <div className="text-center py-20 text-red-500 font-medium bg-red-50 rounded-2xl border border-red-100">
              Oops! Something went wrong while fetching products.
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {(data?.data?.length ?? 0) > 0 ? (
                  data?.data.map((product: any) => (
                    <ProductCard key={product._id} product={product} />
                  ))
                ) : (
                  <div className="col-span-full text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                    <p className="text-gray-500 text-xl font-light">
                      No products found matching your search or filters.
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

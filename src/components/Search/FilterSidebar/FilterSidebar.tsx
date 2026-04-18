"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

interface FilterSidebarProps {
  categories: any[];
  brands: any[];
}

export default function FilterSidebar({
  categories,
  brands,
}: FilterSidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { register, watch, reset , getValues } = useForm({
    defaultValues: {
      brand: searchParams.getAll("brand") || [],
      category: searchParams.getAll("category") || [],
      minPrice: searchParams.get("price[gte]") || "",
      maxPrice: searchParams.get("price[lte]") || "",
    },
  });
  console.log(searchParams.getAll("category"));

  const brand = watch("brand");
  const category = watch("category");
  const minPrice = watch("minPrice");
  const maxPrice = watch("maxPrice");

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("brand");
    params.delete("category");
    params.delete("minPrice");
    params.delete("maxPrice");
    brand?.forEach((b) => params.append("brand", b));
    category?.forEach((c) => params.append("category", c));
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);

    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }, [brand, category, minPrice, maxPrice]);

  const values = getValues()
  console.log(values);
  
  

  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div className="bg-white rounded-2xl border border-gray-100 p-6 sticky top-24 shadow-sm">
        <div className="space-y-6">
          {/* Categories */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 border-b pb-2">
              Categories
            </h3>
            <div className="space-y-2 max-h-52 overflow-y-auto pr-2 custom-scrollbar">
              {categories?.map((cat) => (
                <label
                  key={cat._id}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    value={cat._id}
                    {...register("category")}
                    className="w-4 h-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                    {cat.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Price Range */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 border-b pb-2">
              Price Range
            </h3>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <label className="text-[10px] uppercase font-bold text-gray-400 mb-1 block">
                  Min (EGP)
                </label>
                <input
                  {...register("minPrice")}
                  placeholder="0"
                  type="number"
                  className="w-full px-2 py-1.5 rounded-lg border border-gray-200 text-sm focus:border-emerald-500 outline-none"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase font-bold text-gray-400 mb-1 block">
                  Max (EGP)
                </label>
                <input
                  {...register("maxPrice")}
                  placeholder="Max"
                  type="number"
                  className="w-full px-2 py-1.5 rounded-lg border border-gray-200 text-sm focus:border-emerald-500 outline-none"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {[500, 1000, 5000].map((price) => (
                <button
                  key={price}
                  type="button"
                  onClick={() => reset({ ...getValues(), maxPrice: String(price) })}
                  className="px-2 py-1 rounded-md text-[11px] font-medium bg-gray-50 text-gray-500 hover:bg-emerald-50 hover:text-emerald-600 border border-gray-100 transition-all"
                >
                  Under {price}
                </button>
              ))}
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Brands */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 border-b pb-2">
              Brands
            </h3>
            <div className="space-y-2 max-h-52 overflow-y-auto pr-2 custom-scrollbar">
              {brands?.map((brand) => (
                <label
                  key={brand._id}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    value={brand._id}
                    {...register("brand")}
                    className="w-4 h-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                    {brand.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <hr className="border-gray-100" />

          <button
            type="button"
            onClick={() =>
              reset({ brand: [], category: [], minPrice: "", maxPrice: "" })
            }
            className="w-full py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-black transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      </div>
    </aside>
  );
}

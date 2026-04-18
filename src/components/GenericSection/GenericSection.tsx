import React, { ReactNode } from "react";

interface GenericSectionProps<T> {
  fn: () => Promise<T[] | { data: T[] } | any>;
  title: string;
  highlightText?: string;
  renderItem: (item: T) => ReactNode;
  gridCols?: string; 
}

export default async function GenericSection<T>({
  fn,
  title,
  highlightText,
  renderItem,
  gridCols = "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6",
}: GenericSectionProps<T>) {
  const result = await fn();
  const items = Array.isArray(result) ? result : result?.data;

  return (
    <section className="py-12 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-10 w-1.5 bg-gradient-to-b from-emerald-500 to-emerald-700 rounded-full shadow-sm"></div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">
            {title}{" "}
            {highlightText && (
              <span className="text-emerald-600">{highlightText}</span>
            )}
          </h2>
        </div>

        <div className={`grid ${gridCols} gap-6 md:gap-8`}>
          {items?.map((item: any, index: number) => (
            <div
              key={item._id || index}
              className="transform transition-all duration-300 hover:-translate-y-2"
            >
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

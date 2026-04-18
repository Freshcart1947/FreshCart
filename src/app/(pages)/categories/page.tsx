import PageDescription from "@/components/PageDescription/PageDescription";
import { getAllCategories } from "@/services/categories/getAllCategories/getAllCategories";
import { FaLayerGroup } from "react-icons/fa";
import CategoryCard from "@/components/CategoriesComps/CategoryCard/CategoryCard";

export default async function categories() {
  const allCategories = await getAllCategories();

  return (
    <>
      <PageDescription
        icon={<FaLayerGroup />}
        page={"All Categories"}
        description={"Browse our wide range of product categories"}
      />
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {allCategories.data.map((category) => (
            <CategoryCard key={category._id} category={category} />
          ))}
        </div>
      </div>
    </>
  );
}

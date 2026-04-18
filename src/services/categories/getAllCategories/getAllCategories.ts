import { AllCategories } from "@/interfaces/categories.interface";

export async function getAllCategories(): Promise<AllCategories> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/categories`);
  const data = await response.json();
  return data;
}
import { AllProducts } from "@/interfaces/products.interface";

export async function getAllProducts():Promise<AllProducts> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/products`,
  );
  const data = await response.json();
  return data
}
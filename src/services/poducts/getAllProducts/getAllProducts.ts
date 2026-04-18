import { AllProducts } from "@/interfaces/products.interface";

export async function getAllProducts(queryString: string = ""): Promise<AllProducts> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products?${queryString}`);
  const data = await response.json();
  return data;
}

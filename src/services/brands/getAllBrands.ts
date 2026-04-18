import { AllBrands } from "@/interfaces/brands.interface";

export async function getAllBrands(): Promise<AllBrands> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/brands`);
  const data = await response.json();
  return data;
}
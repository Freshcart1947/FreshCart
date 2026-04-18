import { SpecificCategory } from "@/interfaces/categories.interface";

export async function getSpecificCategory(id: string): Promise<SpecificCategory> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/categories/${id}`,
    {
      next: {
        revalidate: 10,
      },
    },
  );
  const data = await response.json();
  return data;
}

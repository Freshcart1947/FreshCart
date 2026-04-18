

export async function getSpecificCategory(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/brands/${id}`,
    {
      next: {
        revalidate: 10,
      },
    },
  );
  const data = await response.json();
  return data;
}

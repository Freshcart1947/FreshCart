'use client'
import { useQuery } from "@tanstack/react-query";

export default function useCart<T>(fn: () => Promise<T>, key: string[]) {
  const { data, isLoading, isFetched, isError } = useQuery<T>({
    queryKey: key,
    queryFn: fn,
  });

  return { data, isLoading, isFetched, isError };
}

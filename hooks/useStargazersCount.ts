import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function useStargazersCount(initial?: number) {
  const { data, error, isLoading } = useSWR<{
    count: number | null;
  }>("/api/github/stars", fetcher, {
    fallbackData: initial != null ? { count: initial } : undefined,
    revalidateOnFocus: false,
  });

  return {
    count: data?.count ?? null,
    isLoading,
    error,
  };
}

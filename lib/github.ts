export async function fetchStargazersCount(): Promise<number> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch("https://api.github.com/repos/shuttle-hq/shuttle", {
    headers,
    // Avoid Next.js fetch caching surprises when called server-side
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  const json = await res.json();
  return json.stargazers_count ?? 0;
}

const HIRO_API = "https://api.hiro.so";

export async function getLatestBlock() {
  const res = await fetch(
    `${HIRO_API}/extended/v2/blocks?limit=1`,
    {
      next: {
        revalidate: 600, // 10 minutes
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch latest block");
  }

  const data = await res.json();

  return data.results[0];
}
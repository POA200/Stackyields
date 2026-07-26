export async function getZestYield() {
  try {
    return {
      name: "Zest",
      status: "Live",
      category: "Bitcoin Lending",
      apy: 6.7,
      tvl: "$15.2M",
    };
  } catch {
    return null;
  }
}
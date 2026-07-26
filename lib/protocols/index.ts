import { getBitflowYield } from "./bitflow";
import { getZestYield } from "./zest";

export async function getProtocols() {
  const [bitflow, zest] = await Promise.all([
    getBitflowYield(),
    getZestYield(),
  ]);

  return [
    bitflow,
    zest,
    {
      name: "Hermetica",
      category: "Synthetic Dollar",
      apy: 12.1,
      tvl: "$8.6M",
      status: "Coming Soon",
    },
    {
      name: "StackingDAO",
      category: "Liquid Stacking",
      apy: 5.3,
      tvl: "$23.4M",
      status: "Coming Soon",
    },
  ].filter(Boolean);
}
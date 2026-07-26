import { ArrowUpRight } from "lucide-react";

type ProtocolCardProps = {
  name: string;
  category: string;
  apy: string;
  tvl: string;
  status: string;
};

export function ProtocolCard({
  name,
  category,
  apy,
  tvl,
  status,
}: ProtocolCardProps) {
  const isLive = status === "Live";

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-orange-500/40 hover:bg-zinc-900">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="mt-1 text-sm text-zinc-400">{category}</p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            isLive
              ? "bg-emerald-500/15 text-emerald-400"
              : "bg-zinc-700 text-zinc-300"
          }`}
        >
          {status}
        </span>
      </div>

      <div className="mt-8 space-y-4">
        <div>
          <p className="text-sm text-zinc-500">Estimated APY</p>
          <p className="text-3xl font-bold text-orange-400">{apy}</p>
        </div>

        <div className="flex items-center justify-between border-t border-zinc-800 pt-4">
          <div>
            <p className="text-xs text-zinc-500">TVL</p>
            <p className="font-medium">{tvl}</p>
          </div>

          <button className="flex items-center gap-2 text-sm text-orange-400 transition hover:text-orange-300">
            View Details
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

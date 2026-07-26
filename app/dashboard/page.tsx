import { MetricCard } from "@/components/dashboard/metric-card";
import { ProtocolCard } from "@/components/dashboard/protocol-card";
import { getLatestBlock } from "@/lib/hiro";
import { getProtocols } from "@/lib/protocols";

export default async function DashboardPage() {
  const block = await getLatestBlock();
  const protocols = await getProtocols();

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="text-4xl font-bold">StackYields Dashboard</h1>

        <p className="mt-2 text-zinc-400">
          Live Stacks network metrics and protocol integrations.
        </p>

        <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            title="Latest Block"
            value={block.height.toLocaleString()}
            subtitle="Current chain tip"
            badge="LIVE"
          />

          <MetricCard
            title="Burn Block"
            value={block.burn_block_height.toLocaleString()}
            subtitle="Bitcoin block"
          />

          <MetricCard
            title="Transactions"
            value={block.tx_count}
            subtitle="Latest block"
          />

          <MetricCard
            title="Network"
            value="Healthy"
            subtitle="Hiro API Connected"
            badge="ONLINE"
          />
        </section>

        <section className="mt-14">
          <h2 className="mb-6 text-2xl font-semibold">Yield Opportunities</h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {protocols.map(
              (protocol) =>
                protocol && (
                  <ProtocolCard
                    key={protocol.name}
                    name={protocol.name}
                    category={protocol.category}
                    apy={protocol.apy.toString()}
                    tvl={protocol.tvl}
                    status={protocol.status}
                  />
                ),
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

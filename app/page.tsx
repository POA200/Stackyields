import block from "./data/latest-block.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-5xl px-8 py-20">
        <h1 className="text-5xl font-bold">StackYields</h1>

        <p className="mt-3 text-lg text-zinc-400">
          Unified Yield Infrastructure for the Stacks Ecosystem
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 p-6">
            <h2 className="mb-4 text-xl font-semibold">
              Latest Stacks Network Snapshot
            </h2>

            <div className="space-y-3">
              <p>
                <span className="text-zinc-500">Latest Block</span>
                <br />
                <strong>{block.height}</strong>
              </p>

              <p>
                <span className="text-zinc-500">Burn Block</span>
                <br />
                <strong>{block.burn_block_height}</strong>
              </p>

              <p>
                <span className="text-zinc-500">Transactions</span>
                <br />
                <strong>{block.tx_count}</strong>
              </p>

              <p>
                <span className="text-zinc-500">Timestamp</span>
                <br />
                <strong>{block.block_time_iso}</strong>
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 p-6">
            <h2 className="mb-4 text-xl font-semibold">
              Upcoming Integrations
            </h2>

            <div className="space-y-2">
              <p>🟢 Hiro API (validated)</p>
              <p>🟡 Bitflow</p>
              <p>🟡 Zest</p>
              <p>⚪ StackingDAO</p>
              <p>⚪ Hermetica</p>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-4 text-sm text-yellow-200">
          <strong>Development Preview:</strong> This initial release validates
          the application's architecture using Stacks blockchain data. Protocol
          integrations and live yield aggregation are currently in development.
        </div>
      </div>
    </main>
  );
}

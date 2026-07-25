import block from "./data/latest-block.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-8 py-20">
        {/* Hero */}
        <section>
          <h1 className="text-6xl font-bold tracking-tight">StackYields</h1>

          <p className="mt-5 max-w-3xl text-xl leading-relaxed text-zinc-400">
            The discovery layer for Stacks-native stacking and sBTC yield
            opportunities. Compare providers, explore strategies, and monitor
            the ecosystem from one unified dashboard.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/POA200/stackyields"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:opacity-90"
            >
              View GitHub
            </a>

            <span className="rounded-xl border border-zinc-700 px-5 py-3 text-zinc-300">
              MVP Preview
            </span>
          </div>
        </section>

        {/* Cards */}
        <section className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h2 className="mb-5 text-2xl font-semibold">Live Stacks Network</h2>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-zinc-500">Latest Block</p>
                <p className="text-xl font-bold">{block.height}</p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Burn Block</p>
                <p className="text-xl font-bold">{block.burn_block_height}</p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Transactions</p>
                <p className="text-xl font-bold">{block.tx_count}</p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Timestamp</p>
                <p className="font-medium">
                  {new Date(block.block_time_iso).toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h2 className="mb-5 text-2xl font-semibold">Protocol Coverage</h2>

            <div className="space-y-3 text-lg">
              <p>🟢 Hiro API (Integrated)</p>
              <p>🟡 Bitflow</p>
              <p>🟡 Zest Protocol</p>
              <p>⚪ StackingDAO</p>
              <p>⚪ Hermetica</p>
              <p>⚪ Additional Providers</p>
            </div>
          </div>
        </section>

        {/* Development Status */}
        <section className="mt-10 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6">
          <h3 className="text-lg font-semibold text-emerald-400">
            Development Status
          </h3>

          <p className="mt-3 leading-7 text-zinc-300">
            StackYields is currently in active development. This MVP validates
            the project's architecture using live Stacks blockchain data and
            establishes the foundation for protocol adapters, unified yield
            aggregation, comparison tools, and embeddable widgets.
          </p>
        </section>

        {/* Roadmap */}
        <section className="mt-14">
          <h2 className="text-3xl font-bold">Roadmap</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-zinc-800 p-5">
              ✅ Foundation MVP
            </div>

            <div className="rounded-xl border border-zinc-800 p-5">
              🔄 Live Protocol Adapters
            </div>

            <div className="rounded-xl border border-zinc-800 p-5">
              🔄 Yield Comparison Dashboard
            </div>

            <div className="rounded-xl border border-zinc-800 p-5">
              🔄 Strategy Simulator
            </div>

            <div className="rounded-xl border border-zinc-800 p-5">
              🔄 Embeddable Widgets
            </div>

            <div className="rounded-xl border border-zinc-800 p-5">
              🔄 Public API
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500">
          Built with Next.js • TypeScript • Tailwind CSS • Hiro API
        </footer>
      </div>
    </main>
  );
}

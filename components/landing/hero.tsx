import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-28 text-center">
      <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
        Public Good • Open Source • Built for Stacks
      </div>

      <h1 className="mt-8 max-w-5xl text-6xl font-bold tracking-tight md:text-7xl">
        The Discovery Layer for
        <span className="block text-orange-400">
          Stacks Yield Opportunities
        </span>
      </h1>

      <p className="mt-8 max-w-3xl text-xl leading-8 text-zinc-400">
        Compare stacking pools, discover sBTC yield strategies, and monitor the
        Stacks ecosystem from one beautifully designed dashboard.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link href="/dashboard">
          <Button size="lg">
            Launch Dashboard
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>

        <a
          href="https://github.com/POA200/stackyields"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" size="lg">
            View Source
          </Button>
        </a>
      </div>
    </section>
  );
}

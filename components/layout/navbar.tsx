import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold tracking-tight">
          StackYields
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <a href="#features" className="hover:text-white transition">
            Features
          </a>

          <a href="#providers" className="hover:text-white transition">
            Providers
          </a>

          <a href="#roadmap" className="hover:text-white transition">
            Roadmap
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/POA200/stackyields"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">GitHub</Button>
          </a>

          <Link href="/dashboard">
            <Button>Launch App</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

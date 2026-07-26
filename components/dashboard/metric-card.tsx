type MetricCardProps = {
  title: string;
  value: string | number;
  subtitle?: string;
  badge?: string;
};

export function MetricCard({ title, value, subtitle, badge }: MetricCardProps) {
  return (
    <div className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-orange-500/40 hover:bg-zinc-900">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-zinc-400">{title}</p>

        {badge && (
          <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-xs font-medium text-emerald-400">
            {badge}
          </span>
        )}
      </div>

      <h2 className="mt-5 text-4xl font-bold tracking-tight">{value}</h2>

      {subtitle && <p className="mt-3 text-sm text-zinc-500">{subtitle}</p>}
    </div>
  );
}

export default function Work() {
  const projects = [
    {
      title: 'Flux Analytics',
      tag: 'SaaS Website',
      color: 'from-blue-500/40 to-sky-400/30',
      desc: 'A conversion-first marketing site with motion and a robust CMS.',
    },
    {
      title: 'North & East',
      tag: 'Luxury E‑commerce',
      color: 'from-emerald-500/40 to-teal-400/30',
      desc: 'Minimal storefront with editorial pacing and premium product interaction.',
    },
    {
      title: 'Orbit Ledger',
      tag: 'Fintech Brand',
      color: 'from-fuchsia-500/40 to-pink-400/30',
      desc: 'Identity and site for a new finance platform — confident, clear, modern.',
    },
  ]

  return (
    <section id="work" className="bg-[#0b0f14] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between">
          <h2 className="text-white text-3xl sm:text-4xl font-semibold">Selected work</h2>
          <a href="#contact" className="text-sm text-white/70 hover:text-white">All projects →</a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
              <div className={`h-40 bg-gradient-to-br ${p.color}`} />
              <div className="p-6">
                <div className="text-[11px] uppercase tracking-wider text-white/50">{p.tag}</div>
                <h3 className="mt-1 text-white text-xl font-medium">{p.title}</h3>
                <p className="mt-2 text-white/60">{p.desc}</p>
                <div className="mt-4 inline-flex items-center text-sm text-white/70 group-hover:text-white">View case study →</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

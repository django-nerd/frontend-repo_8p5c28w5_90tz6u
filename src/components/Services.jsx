export default function Services() {
  const items = [
    {
      title: 'Brand & Identity',
      desc:
        'Positioning, visual identity systems, and design languages that scale across every touchpoint.',
    },
    {
      title: 'Web Design',
      desc:
        'Elegant, minimal interfaces crafted for clarity and conversion — always accessible and on-brand.',
    },
    {
      title: 'Web Development',
      desc:
        'High-performance, SEO-friendly sites using modern stacks. Built fast, optimized, and maintainable.',
    },
    {
      title: 'Design Systems',
      desc:
        'Reusable components, tokens, and documentation so your team ships consistently and confidently.',
    },
  ]

  return (
    <section id="services" className="bg-[#0b0f14]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="text-white text-3xl sm:text-4xl font-semibold">Capabilities</h2>
          <p className="text-white/60 max-w-xl">
            We combine strategic thinking with refined design and engineering to build brands and websites that perform.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div key={item.title} className="group rounded-xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition-colors">
              <div className="flex items-start justify-between">
                <h3 className="text-white text-xl font-medium">{item.title}</h3>
                <div className="h-6 w-6 rounded bg-gradient-to-br from-sky-400 to-blue-600 opacity-70 group-hover:opacity-100" />
              </div>
              <p className="mt-3 text-white/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

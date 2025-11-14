const logos = [
  { name: 'Apex', svg: '<svg viewBox="0 0 40 12" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><rect width="6" height="12" rx="2"/><rect x="10" width="6" height="12" rx="2"/><rect x="20" width="6" height="12" rx="2"/><rect x="30" width="6" height="12" rx="2"/></svg>' },
  { name: 'Nova', svg: '<svg viewBox="0 0 40 12" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><circle cx="6" cy="6" r="5"/><circle cx="20" cy="6" r="5"/><circle cx="34" cy="6" r="5"/></svg>' },
  { name: 'Pulse', svg: '<svg viewBox="0 0 40 12" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M0 6h6l2-4 4 8 2-4h6l2-4 4 8 2-4h6" stroke="currentColor" strokeWidth="2" fill="none"/></svg>' },
  { name: 'Vanta', svg: '<svg viewBox="0 0 40 12" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M2 10L8 2l6 8 6-8 6 8 6-8" stroke="currentColor" strokeWidth="2" fill="none"/></svg>' },
]

export default function Logos() {
  return (
    <section className="bg-[#0b0f14] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-xs uppercase tracking-widest text-white/40 mb-6">Trusted by teams who value design and performance</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center text-white/40 hover:text-white/70 transition-colors">
              <span className="sr-only">{logo.name}</span>
              <div className="h-6 opacity-70" dangerouslySetInnerHTML={{ __html: logo.svg }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

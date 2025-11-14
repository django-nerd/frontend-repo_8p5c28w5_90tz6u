import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden bg-[#0b0f14]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.18),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0f14]/30 to-[#0b0f14]" />

      <div className="relative z-10 h-full mx-auto max-w-7xl px-6 flex items-end pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] tracking-wider uppercase text-white/70">
            High-end websites & digital brands
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] text-white">
            We craft stunning, high-performance digital experiences
          </h1>
          <p className="mt-5 text-white/70 text-base sm:text-lg">
            Innerloopstudios partners with forward-thinking teams to design and build websites that are as fast as they are beautiful.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-500 text-white font-medium px-5 py-3 text-sm">
              Start a project
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-md border border-white/15 text-white hover:bg-white/10 font-medium px-5 py-3 text-sm">
              See our work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

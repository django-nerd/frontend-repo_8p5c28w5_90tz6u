import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0f14]">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Services />
        <Work />
        <Contact />
        <footer className="bg-[#0b0f14] border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">© {new Date().getFullYear()} Innerloopstudios. All rights reserved.</p>
            <div className="text-white/60 text-sm">Made with precision. Built for performance.</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App

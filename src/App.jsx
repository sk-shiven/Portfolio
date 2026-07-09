import React, { useState } from 'react';
import DecryptedLoader from './components/DecryptedLoader';
import StaggeredNav from './components/StaggeredNav';
import TerminalHero from './components/TerminalHero';
import ScrollRevealText from './components/ScrollRevealText';
import CardSwap, { Card } from './components/CardSwap';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-zinc-950 text-white min-h-screen font-sans selection:bg-green-500/30">
      {loading && <DecryptedLoader onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <>
          <StaggeredNav />
          <TerminalHero />
          
          <main className="relative z-10">
            {/* About Section */}
            <section id="about" className="min-h-screen py-32 px-8 flex items-center justify-center border-b border-zinc-900">
              <div className="max-w-5xl">
                <ScrollRevealText text="I BUILD DIGITAL EXPERIENCES THAT LIVE AT THE INTERSECTION OF DESIGN AND ENGINEERING" />
              </div>
            </section>

            {/* Projects Section */}
            <section id="work" className="min-h-screen py-32 border-b border-zinc-900 relative overflow-hidden bg-zinc-900/20">
              <div className="max-w-7xl mx-auto px-8 relative z-10">
                <h2 className="text-sm font-mono text-zinc-500 mb-12 tracking-widest uppercase">Selected Works</h2>
                
                <div style={{ height: '600px', position: 'relative' }}>
                  <CardSwap
                    cardDistance={60}
                    verticalDistance={70}
                    delay={5000}
                    pauseOnHover={true}
                  >
                    <Card className="p-8 flex flex-col justify-between">
                      <h3 className="text-2xl font-bold">Project Alpha</h3>
                      <p className="text-zinc-400">Next.js, Framer Motion, Tailwind</p>
                    </Card>
                    <Card className="p-8 flex flex-col justify-between border-green-500/30">
                      <h3 className="text-2xl font-bold text-green-400">Project Beta</h3>
                      <p className="text-zinc-400">React Three Fiber, GSAP</p>
                    </Card>
                    <Card className="p-8 flex flex-col justify-between border-blue-500/30">
                      <h3 className="text-2xl font-bold text-blue-400">Project Gamma</h3>
                      <p className="text-zinc-400">Vite, Vue, Tailwind</p>
                    </Card>
                  </CardSwap>
                </div>
              </div>
            </section>
            
            {/* Contact Section */}
            <section id="contact" className="min-h-screen py-32 px-8 flex flex-col items-center justify-center text-center">
              <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8">LET'S TALK</h2>
              <a href="mailto:hello@example.com" className="text-xl md:text-2xl font-mono text-green-400 hover:text-green-300 underline underline-offset-8 transition-colors">
                hello@example.com
              </a>
            </section>
          </main>
        </>
      )}
    </div>
  );
}

export default App;

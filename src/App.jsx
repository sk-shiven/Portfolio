import React, { useState } from 'react';
import DecryptedLoader from './components/DecryptedLoader';

// Global Features
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import TopNav from './components/TopNav';
import StatusFooter from './components/StatusFooter';
import NomineeBadge from './components/NomineeBadge';

// Sections
import Hero from './components/Hero';
import LogoMarquee from './components/LogoMarquee';
import CardSwap, { Card } from './components/CardSwap';
import ScrollRevealText from './components/ScrollRevealText';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <SmoothScroll>
      <div className="bg-black text-white min-h-screen font-sans overflow-hidden relative">
        <CustomCursor />
        <StatusFooter />
        <NomineeBadge />
        
        {loading && <DecryptedLoader onComplete={() => setLoading(false)} />}
        
        {!loading && (
          <>
            <TopNav />
            <Hero />
            <LogoMarquee />
            
            <main className="relative z-10 pb-16">
              {/* Projects Section - 01/WORK */}
              <section id="work" className="min-h-screen py-32 border-t border-zinc-900 relative bg-zinc-950">
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                  <h2 className="text-sm font-mono text-zinc-500 mb-12 tracking-widest uppercase">01 / Selected Works</h2>
                  
                  <div style={{ height: '600px', position: 'relative' }}>
                    <CardSwap
                      cardDistance={60}
                      verticalDistance={70}
                      delay={5000}
                      pauseOnHover={true}
                    >
                      <Card className="p-8 flex flex-col justify-between border-white/10 bg-zinc-900">
                        <h3 className="text-2xl font-bold">Project Alpha</h3>
                        <p className="text-zinc-400">Next.js, Framer Motion, Tailwind</p>
                      </Card>
                      <Card className="p-8 flex flex-col justify-between border-green-500/30 bg-zinc-900">
                        <h3 className="text-2xl font-bold text-[#C3FFFC]">Project Beta</h3>
                        <p className="text-zinc-400">React Three Fiber, GSAP</p>
                      </Card>
                      <Card className="p-8 flex flex-col justify-between border-blue-500/30 bg-zinc-900">
                        <h3 className="text-2xl font-bold text-blue-400">Project Gamma</h3>
                        <p className="text-zinc-400">Vite, Vue, Tailwind</p>
                      </Card>
                    </CardSwap>
                  </div>
                </div>
              </section>

              {/* Articles Section - 02/ARTICLES */}
              <section id="articles" className="min-h-screen py-32 px-8 flex items-center justify-center border-t border-zinc-900 bg-zinc-950">
                <div className="max-w-5xl text-center text-zinc-600 font-mono">
                  [ ARTICLES SECTION CONTENT ]
                </div>
              </section>

              {/* Lab Section - 03/LAB */}
              <section id="lab" className="min-h-screen py-32 px-8 flex items-center justify-center border-t border-zinc-900 bg-black">
                <div className="max-w-5xl text-center text-zinc-600 font-mono">
                  [ LAB SECTION CONTENT ]
                </div>
              </section>

              {/* About Section - 04/ABOUT */}
              <section id="about" className="min-h-screen py-32 px-8 flex items-center justify-center border-t border-zinc-900 bg-zinc-950">
                <div className="max-w-5xl">
                  <ScrollRevealText text="I BUILD DIGITAL EXPERIENCES THAT LIVE AT THE INTERSECTION OF DESIGN AND ENGINEERING" />
                </div>
              </section>
              
              {/* Contact Section - 05/CONTACT */}
              <section id="contact" className="min-h-[80vh] py-32 px-8 flex flex-col items-center justify-center text-center border-t border-zinc-900 bg-black">
                <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8">LET'S TALK</h2>
                <a href="mailto:hello@example.com" className="text-xl md:text-2xl font-mono text-[#C3FFFC] hover:text-white underline underline-offset-8 transition-colors">
                  hello@example.com
                </a>
              </section>
            </main>
          </>
        )}
      </div>
    </SmoothScroll>
  );
}

export default App;

import React, { useState } from 'react';
import DecryptedLoader from './components/DecryptedLoader';

// Global Features
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import TopNav from './components/TopNav';
import StatusFooter from './components/StatusFooter';

// Sections
import Hero from './components/Hero';
import LogoMarquee from './components/LogoMarquee';
import ScrollRevealText from './components/ScrollRevealText';
import ParallaxHeading from './components/ParallaxHeading';
import ProjectCard from './components/ProjectCard';
import ArticleRow from './components/ArticleRow';
import LabCard from './components/LabCard';
import ExperienceItem from './components/ExperienceItem';
import FoundationItem from './components/FoundationItem';
import CompetencyAccordion from './components/CompetencyAccordion';
import ToolkitItem from './components/ToolkitItem';
import MegaContactLink from './components/MegaContactLink';
import { Layers, Terminal, MonitorSmartphone, Cpu } from 'lucide-react';
import ContactForm from './components/ContactForm';
import SiteFooter from './components/SiteFooter';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <SmoothScroll>
      <div className="bg-background text-white min-h-screen font-sans overflow-hidden relative">
        <CustomCursor />
        <StatusFooter />

        {loading && <DecryptedLoader onComplete={() => setLoading(false)} />}

        {!loading && (
          <>
            <TopNav />
            <Hero />
            <LogoMarquee />

            <main className="relative z-10 pb-16">

              {/* WORK SECTION */}
              <ParallaxHeading word1="WORK" word2="FEATURED" metaLeft="01" metaRight="2023-2026" />
              <section id="work" className="py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 flex flex-col gap-16">
                  <ProjectCard
                    category="E-Commerce" year="2025" title="Aura Store"
                    description="A high-performance storefront with WebGL product viewers and seamless transitions."
                    stats={[{ value: "300%", label: "Conversion" }, { value: "<1s", label: "Load Time" }]}
                    bgColor="bg-zinc-900"
                  />
                  <ProjectCard
                    category="Fintech" year="2024" title="Vault UI"
                    description="Dark-mode native dashboard for institutional traders."
                    stats={[{ value: "2M+", label: "Users" }, { value: "100%", label: "Uptime" }]}
                    bgColor="bg-zinc-800"
                  />
                  <ProjectCard
                    category="Web3" year="2024" title="Nexus Protocol"
                    description="Decentralized exchange interface focusing on micro-interactions."
                    stats={[{ value: "$5B", label: "Volume" }, { value: "0.1s", label: "Latency" }]}
                    bgColor="bg-zinc-950"
                  />
                  <ProjectCard
                    category="Agency" year="2023" title="Studio XYZ"
                    description="Award-winning portfolio featuring custom cursor logic and infinite scroll."
                    stats={[{ value: "4", label: "Awards" }, { value: "10k", label: "Visits" }]}
                    bgColor="bg-zinc-900"
                  />
                </div>
              </section>

              {/* ARTICLES SECTION */}
              <ParallaxHeading word1="ARTICLES" word2="RECENT" metaLeft="02" metaRight="WRITING" />
              <section id="articles" className="py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 border-t border-zinc-900">
                  <ArticleRow number="001" date="OCT 2025" readTime="5 MIN" title="Mastering Framer Motion Springs" subtitle="How to avoid 'bouncy' animations and achieve a premium feel." />
                  <ArticleRow number="002" date="SEP 2025" readTime="8 MIN" title="The OKLCH Color Space" subtitle="Why I stopped using hex codes for design systems." />
                  <ArticleRow number="003" date="AUG 2025" readTime="6 MIN" title="Building Custom Cursors" subtitle="Performance considerations and accessibility fallbacks." />
                  <ArticleRow number="004" date="JUL 2025" readTime="12 MIN" title="WebGL for Frontend Devs" subtitle="A gentle introduction to shaders." />

                  <ArticleRow disabled number="005" date="TBA" readTime="-" title="Advanced React Server Components" subtitle="Mental models for the new era." />
                  <ArticleRow disabled number="006" date="TBA" readTime="-" title="CSS Grid Architectures" subtitle="Asymmetric layouts." />
                  <ArticleRow disabled number="007" date="TBA" readTime="-" title="Micro-interactions Audit" subtitle="Evaluating 10 top agency sites." />
                  <ArticleRow disabled number="008" date="TBA" readTime="-" title="Designing for Developers" subtitle="Creating DX-first interfaces." />
                </div>
              </section>

              {/* LAB SECTION */}
              <ParallaxHeading word1="LAB" word2="EXPERIMENTS" metaLeft="03" metaRight="PLAYGROUND" />
              <section id="lab" className="py-24 bg-background px-4 sm:px-8">
                <div className="max-w-7xl mx-auto flex flex-col gap-4">
                  <LabCard />
                  <LabCard
                    number="002"
                    title="ACTUAL-MCP"
                    description="A modern context provider interface with real-time state visualization."
                    tags={["TypeScript", "MCP", "WebSockets"]}
                    highlighted={false}
                  />
                  <div className="w-full border-t border-b border-zinc-900 py-6 px-8 flex justify-between items-center text-white hover:bg-white/[0.02] transition-colors cursor-pointer mt-8">
                    <span className="font-mono text-xs md:text-sm tracking-widest uppercase truncate mr-4">ALL CODE : GITHUB.COM/TYPE0LABS-DEV</span>
                    <span className="font-mono text-xs md:text-sm tracking-widest uppercase text-zinc-400 flex items-center gap-2 whitespace-nowrap">VISIT <span className="text-xl leading-none">↗</span></span>
                  </div>
                </div>
              </section>

              {/* ABOUT SECTION */}
              <ParallaxHeading word1="ABOUT" word2="ME" metaLeft="04" metaRight="PROFILE" />
              <section id="about" className="min-h-screen py-32 px-4 sm:px-8 flex flex-col justify-center bg-background border-t border-zinc-900">
                <div className="max-w-7xl mx-auto w-full">

                  {/* Top Grid: Media & Text */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start w-full mb-32">
                    {/* Media Placeholder */}
                    <div className="w-full aspect-square bg-white rounded-[2rem] relative p-8 flex items-start justify-start shadow-2xl">
                      <div className="text-[#C3FFFC] bg-zinc-900 p-2 rounded-full cursor-pointer hover:scale-110 transition-transform">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                      </div>
                    </div>

                    {/* Text & Experience */}
                    <div className="flex flex-col w-full">
                      <div className="mb-16">
                        <ScrollRevealText text="I BUILD DIGITAL EXPERIENCES THAT LIVE AT THE INTERSECTION OF DESIGN AND ENGINEERING" />
                      </div>

                      {/* Experience / Study List */}
                      <div className="flex flex-col w-full">
                        <h3 className="font-mono text-xs tracking-widest text-zinc-600 uppercase mb-8">Experience & Education</h3>
                        <div className="flex flex-col mb-12">
                          <ExperienceItem name="Type0 Labs" role="Senior Engineer" year="2024-PRESENT" />
                          <ExperienceItem name="Vercel" role="Frontend Architect" year="2022-2024" />
                          <ExperienceItem name="Google" role="Creative Developer" year="2020-2022" />
                          <ExperienceItem name="Studio XYZ" role="Design Engineer" year="2019-2020" />
                          <ExperienceItem name="MIT Media Lab" role="Research Fellow" year="2018-2019" />
                          <ExperienceItem name="RISD" role="MFA Graphic Design" year="2016-2018" />
                          <ExperienceItem name="Stanford" role="BS Computer Science" year="2012-2016" />
                        </div>

                        {/* Download Resume Button */}
                        <div>
                          <a href="#" className="inline-block border border-white rounded-full px-8 py-4 text-xs font-mono tracking-widest uppercase hover:bg-white hover:text-black transition-colors">
                            DOWNLOAD RESUME/CV
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Grid: Core Foundations */}
                  <div className="w-full">
                    <h3 className="font-mono text-xs tracking-widest text-zinc-600 uppercase mb-8">Core Foundations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                      <FoundationItem number="01" title="Engineering" description="Deep knowledge of React, Next.js, and modern TypeScript ecosystems to build scalable systems." />
                      <FoundationItem number="02" title="Interaction" description="Fluid motion and physics-based animations using Framer Motion and GSAP." />
                      <FoundationItem number="03" title="Design Systems" description="OKLCH-based color spaces, clamp-driven typography, and brutalist aesthetics." />
                      <FoundationItem number="04" title="Performance" description="Optimized bundles, WebGL rendering, and zero-layout-shift architectural patterns." />
                    </div>
                  </div>

                  {/* Competencies Accordion */}
                  <div className="w-full mt-32">
                    <h3 className="font-mono text-xs tracking-widest text-zinc-600 uppercase mb-8">Core Competencies</h3>
                    <div className="flex flex-col">
                      <CompetencyAccordion icon={Terminal} title="Frontend Architecture" />
                      <CompetencyAccordion icon={MonitorSmartphone} title="Creative Development" />
                      <CompetencyAccordion icon={Layers} title="Design Engineering" />
                      <CompetencyAccordion icon={Cpu} title="Systems Integration" />
                    </div>
                  </div>

                  {/* Toolkit Grid */}
                  <div className="w-full mt-32">
                    <h3 className="font-mono text-xs tracking-widest text-zinc-600 uppercase mb-8">Toolkit</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <ToolkitItem iconUrl="https://cdn.simpleicons.org/figma/ffffff" name="Figma" />
                      <ToolkitItem iconUrl="https://cdn.simpleicons.org/react/ffffff" name="React" />
                      <ToolkitItem iconUrl="https://cdn.simpleicons.org/nodedotjs/ffffff" name="Node.js" />
                      <ToolkitItem iconUrl="https://cdn.simpleicons.org/tailwindcss/ffffff" name="Tailwind" />
                      <ToolkitItem iconUrl="https://cdn.simpleicons.org/framer/ffffff" name="Framer" />
                      <ToolkitItem iconUrl="https://cdn.simpleicons.org/greensock/ffffff" name="GSAP" />
                      <ToolkitItem iconUrl="https://cdn.simpleicons.org/typescript/ffffff" name="TypeScript" />
                      <ToolkitItem iconUrl="https://cdn.simpleicons.org/vercel/ffffff" name="Vercel" />
                    </div>
                  </div>

                </div>
              </section>

              {/* CONTACT SECTION */}
              <ParallaxHeading word1="LET'S" word2="TALK" metaLeft="05" metaRight="CONTACT" />
              <section id="contact" className="min-h-[80vh] pt-32 flex flex-col items-center justify-center bg-background border-t border-zinc-900 w-full">
                <div className="w-full flex flex-col">
                  <MegaContactLink title="EMAIL" href="mailto:shiven.kath.work@gmail.com" />
                  <MegaContactLink title="LINKEDIN" href="https://www.linkedin.com/in/shiven-kathuria-work-url/" />
                  <MegaContactLink title="GITHUB" href="https://github.com/sk-shiven" />
                </div>

                <div className="w-full flex justify-center py-24 px-4 sm:px-8 border-t-2 border-zinc-900">
                  {/* <ContactForm /> */}
                </div>
              </section>
            </main>

            <SiteFooter />
          </>
        )}
      </div>
    </SmoothScroll>
  );
}

export default App;

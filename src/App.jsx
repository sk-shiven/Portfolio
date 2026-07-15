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

              {/* ARTICLES SECTION */}
              <ParallaxHeading word1="ARTICLES" word2="RECENT" metaLeft="02" metaRight="WRITING" />
              <section id="articles" className="py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 border-t border-zinc-900">
                  <ArticleRow disabled number="001" date="TBA" readTime="-" title="ACT-R and SOAR models" subtitle="Cognitive Architecture" />
                  <ArticleRow disabled number="002" date="TBA" readTime="-" title="Symbolic AI vs. Connectionist AI" subtitle="Cognitive Architecture" />
                </div>
              </section>

              {/* LAB SECTION */}
              <ParallaxHeading word1="PROJECTS" word2="SHOWCASE" metaLeft="03" metaRight="PLAYGROUND" />
              <section id="projects" className="py-24 bg-background px-4 sm:px-8">
                <div className="max-w-7xl mx-auto flex flex-col gap-4">
                  <LabCard />
                  <LabCard
                    number="002"
                    title="POSIX-like Unix shell"
                    description="An advanced interactive CLI shell supporting command execution, multi-stage pipelines, job control, and complex I/O redirection."
                    tags={["Java", "Shell", "Operating System"]}
                    highlighted={false}
                    githubLink='https://github.com/sk-shiven/CodeCrafters-Java-Shell'
                  />
                  <a href="https://github.com/sk-shiven" target="_blank" rel="noreferrer" className="w-full border-t border-b border-zinc-900 py-6 px-8 flex justify-between items-center text-white hover:bg-white/[0.02] transition-colors cursor-pointer mt-8 block">
                    <span className="font-mono text-xs md:text-sm tracking-widest uppercase truncate mr-4">ALL CODE : github.com/sk-shiven</span>
                    <span className="font-mono text-xs md:text-sm tracking-widest uppercase text-zinc-400 flex items-center gap-2 whitespace-nowrap">VISIT <span className="text-xl leading-none">↗</span></span>
                  </a>
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
                          <ExperienceItem name="Unfitrd Media" role="Chief Article Writer" year="2023-2024" />
                          <ExperienceItem name="E-Cell IIT-B" role="Eureka Junior Leader" year="2023" />
                          <ExperienceItem name="Brand Bengaluru" role="Youth Ideathon Finalist" year="2022" />
                          <ExperienceItem name="BITs Pilani" role="Bachelor's Computer Science" year="2025-2029" />
                          <ExperienceItem name="Presidency Bangalore" role="Diploma in Non-Medical Sciences" year="2021-2025" />

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
              <ParallaxHeading word1="LET'S" word2="TALK!" metaLeft="05" metaRight="CONTACT" />
              <section id="contact" className="min-h-[80vh] pt-32 flex flex-col items-center justify-center bg-background border-t border-zinc-900 w-full">
                <div className="w-full flex flex-col">
                  <MegaContactLink title="EMAIL" href="mailto:shiven.kath.work@gmail.com" />
                  <MegaContactLink title="LINKEDIN" href="https://www.linkedin.com/in/shiven-kathuria-work-url/" />
                  <MegaContactLink title="GITHUB" href="https://github.com/sk-shiven" />
                </div>

                <div className="w-full flex justify-center py-24 px-4 sm:px-8 border-t-2 border-zinc-900">
                  <ContactForm />
                </div>
              </section>
            </main>

            <SiteFooter />
          </>
        )}
      </div>
    </SmoothScroll >
  );
}

export default App;

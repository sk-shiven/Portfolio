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
import Folder from './components/Folder';
// import FoundationItem from './components/FoundationItem';
import CompetencyAccordion from './components/CompetencyAccordion';
import ToolkitItem from './components/ToolkitItem';
import MegaContactLink from './components/MegaContactLink';
import { Layers, Terminal, Brain, Cpu } from 'lucide-react';
import ContactForm from './components/ContactForm';
import SiteFooter from './components/SiteFooter';
import CircularGallery from './components/CircularGallery';

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
                  <LabCard
                    number="003"
                    title="CQRS and GDS Integration"
                    description="Backend architecture built using the Command Query Responsibility Segregation (CQRS) pattern to decouple high-frequency writes from sub-millisecond read models."
                    tags={["SQL Inno DB", "Apache Kafka", "Redis"]}
                    highlighted={false}
                    githubLink='https://github.com/sk-shiven/Airline-DB-CQRS-System'
                  />
                  <LabCard
                    number="004"
                    title="Data-Cleanup RL Agent"
                    description="A containerized reinforcement learning environment designed to frame messy tabular data preparation as a sequential decision problem."
                    tags={["Pydantic v2", "FastAPI", "Docker"]}
                    highlighted={false}
                    githubLink='https://github.com/sk-shiven/Data-Cleanup'
                  />
                  <LabCard
                    number="005"
                    title="Icebreaker"
                    description="An interactive platform for social connection, featuring a crowdsourced library of icebreaker questions, a voting system to highlight community favorites, and AI-powered question generation."
                    tags={["Typescript", "Vite React", "Gemini API"]}
                    highlighted={false}
                    githubLink='https://github.com/sk-shiven/Ice_Breaker_V1'
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
                    <div className="w-full aspect-square rounded-[2rem] relative flex items-center justify-center overflow-hidden">
                      <CircularGallery
                        bend={3}
                        textColor="#ffffff"
                        borderRadius={0.05}
                        scrollEase={0.02}
                        fontUrl="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap"
                        font="normal 14px 'Special Elite'"
                      />
                    </div>

                    {/* Text & Experience */}
                    <div className="flex flex-col w-full items-center lg:items-start">
                      <div className="mb-16">
                        <ScrollRevealText text="I  build things to understand them. Then I write about what broke." />
                      </div>

                    </div>
                  </div>

                  {/* Experience / Study List Centered */}
                  <div className="flex flex-col w-full items-center mb-32">
                    <h3 className="font-mono text-xs tracking-widest text-zinc-600 uppercase mb-8 text-center">Experience & Education</h3>
                    <div className="flex flex-col items-center justify-center w-full" style={{ height: '300px', position: 'relative' }}>
                      <Folder
                        size={3}
                        color="#27272a"
                        className="mt-16"
                        items={[
                          <div className="p-2 w-full h-full flex flex-col items-center justify-center text-center">
                            <h4 className="text-zinc-900 font-bold text-[7px] uppercase mb-1 tracking-wider">Brand Bengaluru</h4>
                            <p className="text-[5px] text-zinc-700 leading-tight">Youth Ideathon Finalist<br />2022</p>
                          </div>,
                          <div className="p-2 w-full h-full flex flex-col items-center justify-center text-center">
                            <h4 className="text-zinc-900 font-bold text-[7px] uppercase mb-1 tracking-wider">E-Cell IIT-B</h4>
                            <p className="text-[5px] text-zinc-700 leading-tight">Eureka Junior Leader<br />2023</p>
                          </div>,
                          <div className="p-2 w-full h-full flex flex-col items-center justify-center text-center">
                            <h4 className="text-zinc-900 font-bold text-[7px] uppercase mb-1 tracking-wider">BITs Pilani</h4>
                            <p className="text-[5px] text-zinc-700 leading-tight">Bachelor's Computer Science<br />2025-2029</p>
                          </div>,
                          <div className="p-2 w-full h-full flex flex-col items-center justify-center text-center">
                            <h4 className="text-zinc-900 font-bold text-[7px] uppercase mb-1 tracking-wider">Nlog-N</h4>
                            <p className="text-[5px] text-zinc-700 leading-tight">Programming Club Member<br />2025</p>
                          </div>,
                          <div className="p-2 w-full h-full flex flex-col items-center justify-center text-center">
                            <h4 className="text-zinc-900 font-bold text-[7px] uppercase mb-1 tracking-wider">The Hustle Challenge</h4>
                            <p className="text-[5px] text-zinc-700 leading-tight">Runner up<br />2025</p>
                          </div>,
                          <div className="p-2 w-full h-full flex flex-col items-center justify-center text-center">
                            <h4 className="text-zinc-900 font-bold text-[7px] uppercase mb-1 tracking-wider">Ascent - SST Fest</h4>
                            <p className="text-[5px] text-zinc-700 leading-tight">Build Sprint and VC Pitch winner<br />2026</p>
                          </div>
                        ]}
                      />
                    </div>
                  </div>

                  {/* Competencies Accordion */}
                  <div className="w-full mt-32">
                    <h3 className="font-mono text-xs tracking-widest text-zinc-600 uppercase mb-8">Core Competencies</h3>
                    <div className="flex flex-col">
                      <CompetencyAccordion icon={Terminal} title="System Architecture" />
                      <CompetencyAccordion icon={Layers} title="Database Structuring" />
                      <CompetencyAccordion icon={Cpu} title="AUI Integration" />
                      <CompetencyAccordion icon={Brain} title="Agentic Memory Persistence Layers" />
                    </div>
                  </div>

                  {/* Toolkit Grid */}
                  <div className="w-full mt-32">
                    <h3 className="font-mono text-xs tracking-widest text-zinc-600 uppercase mb-8">Toolkit</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <ToolkitItem iconUrl="https://cdn.simpleicons.org/python/ffffff" name="Python" />
                      <ToolkitItem iconUrl="https://cdn.simpleicons.org/pytorch/ffffff" name="PyTorch" />
                      <ToolkitItem iconUrl="https://cdn.simpleicons.org/tensorflow/ffffff" name="TensorFlow" />
                      <ToolkitItem iconUrl="https://cdn.simpleicons.org/postgresql/ffffff" name="SQL" />
                      <ToolkitItem iconUrl="https://cdn.simpleicons.org/nodedotjs/ffffff" name="Node.js" />
                      <ToolkitItem iconUrl="https://cdn.simpleicons.org/typescript/ffffff" name="TypeScript" />
                      <ToolkitItem iconUrl="https://cdn.simpleicons.org/react/ffffff" name="React" />
                      <ToolkitItem iconUrl="https://cdn.simpleicons.org/figma/ffffff" name="Figma" />
                      <ToolkitItem iconUrl="https://cdn.simpleicons.org/mongodb/ffffff" name="MongoDB" />
                      <ToolkitItem iconUrl="https://cdn.simpleicons.org/neo4j/ffffff" name="Neo4j" />
                      <ToolkitItem iconUrl="https://cdn.simpleicons.org/docker/ffffff" name="Docker" />
                      <ToolkitItem iconUrl="https://cdn.simpleicons.org/kubernetes/ffffff" name="Kubernetes" />
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

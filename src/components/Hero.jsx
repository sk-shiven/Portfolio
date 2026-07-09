import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax effects
  const textY = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section id="hero" className="relative min-h-[100dvh] w-full overflow-hidden bg-black flex items-center pt-24 pb-12">
      {/* Background/Right side portrait */}
      <motion.div 
        className="absolute top-0 right-0 w-[80%] md:w-[50%] h-[120%] opacity-60 md:opacity-100 pointer-events-none mix-blend-screen"
        style={{ y: imageY }}
      >
        <img 
          src="/hero.png" 
          alt="Monochromatic halftone portrait" 
          className="w-full h-full object-cover object-left-top grayscale"
        />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 flex flex-col justify-between h-full min-h-[70vh]">
        
        {/* Top/Subtitle */}
        <div className="mt-8">
          <p className="font-mono text-sm tracking-[0.25em] text-zinc-400 uppercase">
            Staff Design Engineer
          </p>
          <p className="mt-4 text-zinc-500 font-sans max-w-sm text-sm leading-relaxed">
            Crafting high-fidelity interfaces and digital systems. Merging precise engineering with expressive, kinetic design.
          </p>
        </div>

        {/* Main Heading */}
        <motion.div 
          className="my-auto mt-16 md:mt-auto flex flex-col tracking-tighter"
          style={{ y: textY }}
        >
          <h1 className="text-fluid-h1 font-sans font-bold leading-[0.8] mb-0" 
              style={{ WebkitTextStroke: '2px white', color: 'transparent' }}>
            MAURICIO
          </h1>
          <h1 className="text-fluid-h1 font-sans font-bold leading-[0.8]" style={{ color: '#C3FFFC' }}>
            JUBA.
          </h1>
        </motion.div>

        {/* Details Row */}
        <div className="mt-auto mb-16 flex flex-col md:flex-row gap-4 md:gap-8 font-mono text-[10px] md:text-xs text-zinc-400 uppercase tracking-widest">
          <div className="flex items-center gap-4">
            <span>10+ YEARS SHIPPING SYSTEMS</span>
            <span className="text-[#C3FFFC] text-[8px]">◆</span>
          </div>
          <div className="flex items-center gap-4">
            <span>BASED IN SÃO PAULO - BRAZIL</span>
            <span className="text-[#C3FFFC] text-[8px] hidden md:inline">◆</span>
          </div>
          <div>
            <span>OPEN TO GLOBAL RELOCATION</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

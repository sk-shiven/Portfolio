import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxHeading = ({ word1, word2, metaLeft, metaRight }) => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Stiff spring feel via tight transforms, tied directly to scroll
  const x1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full overflow-hidden py-16 sm:py-24 border-y border-zinc-900 bg-background flex flex-col justify-center items-center"
    >
      {/* Metadata Labels */}
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 text-xs font-mono text-zinc-500 uppercase tracking-widest">
        {metaLeft}
      </div>
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 text-xs font-mono text-zinc-500 uppercase tracking-widest text-right">
        {metaRight}
      </div>

      <div className="flex flex-col items-center justify-center w-full leading-none font-bold select-none" style={{ fontSize: 'clamp(2.5rem, 12vw, 15rem)' }}>
        <motion.div 
          style={{ x: x1 }}
          className="text-[#C3FFFC] whitespace-nowrap -mb-[2%]"
        >
          {word1}
        </motion.div>
        
        <motion.div 
          style={{ 
            x: x2,
            WebkitTextStroke: '2px white',
            color: 'transparent'
          }}
          className="whitespace-nowrap"
        >
          {word2}
        </motion.div>
      </div>
    </div>
  );
};

export default ParallaxHeading;

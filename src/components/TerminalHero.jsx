import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TerminalHero = () => {
  const [text, setText] = useState('');
  const fullText = `> init system...
> loading assets...
> decrypting portfolio...
> access granted.

Hello, World.
I'm a CS Student exploring the ways how Engineered Intelligence interacts with Humans.
`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <section className="h-screen w-full flex items-center justify-center bg-zinc-950 text-green-400 p-8 font-mono overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-zinc-950/80 to-zinc-950 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl z-10"
      >
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg overflow-hidden shadow-2xl backdrop-blur-sm">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-900">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-xs text-zinc-500">guest@portfolio ~</span>
          </div>
          <div className="p-6 h-[300px] overflow-y-auto">
            <pre className="whitespace-pre-wrap text-sm md:text-base leading-relaxed">
              {text}
              <span className="animate-pulse">_</span>
            </pre>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TerminalHero;

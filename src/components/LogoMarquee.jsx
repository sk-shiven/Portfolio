import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: 'Dell', url: 'https://cdn.simpleicons.org/dell/18181b' },
  { name: 'Audi', url: 'https://cdn.simpleicons.org/audi/18181b' },
  { name: 'Santander', url: 'https://cdn.simpleicons.org/santander/18181b' },
  { name: 'Bradesco', url: 'https://cdn.simpleicons.org/bradesco/18181b' },
  { name: 'Volkswagen', url: 'https://cdn.simpleicons.org/volkswagen/18181b' },
  { name: 'Dell', url: 'https://cdn.simpleicons.org/dell/18181b' },
  { name: 'Audi', url: 'https://cdn.simpleicons.org/audi/18181b' },
  { name: 'Santander', url: 'https://cdn.simpleicons.org/santander/18181b' },
  { name: 'Bradesco', url: 'https://cdn.simpleicons.org/bradesco/18181b' },
  { name: 'Volkswagen', url: 'https://cdn.simpleicons.org/volkswagen/18181b' },
];

const LogoMarquee = () => {
  return (
    <section className="py-24 bg-zinc-200 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-8 mb-12 text-center">
        <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-zinc-600">
          SOME OF THE COMPANIES I'VE WORKED WITH
        </h3>
      </div>

      <div className="relative flex overflow-hidden">
        {/* We use two identical motion.divs side by side to create the seamless loop */}
        <motion.div
          className="flex flex-shrink-0 gap-24 items-center pr-24"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {logos.map((logo, index) => (
            <React.Fragment key={`logo-1-${index}`}>
              <img
                src={logo.url}
                alt={logo.name}
                className="h-10 md:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div style={{ display: 'none' }} className="h-12 w-auto opacity-70 flex items-center justify-center font-bold text-xl text-zinc-900 font-sans tracking-tighter">
                {logo.name}
              </div>
            </React.Fragment>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-shrink-0 gap-24 items-center pr-24"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {logos.map((logo, index) => (
            <React.Fragment key={`logo-2-${index}`}>
              <img
                src={logo.url}
                alt={logo.name}
                className="h-10 md:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div style={{ display: 'none' }} className="h-12 w-auto opacity-70 flex items-center justify-center font-bold text-xl text-zinc-900 font-sans tracking-tighter">
                {logo.name}
              </div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoMarquee;

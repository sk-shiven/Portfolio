import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const NAV_LINKS = [
  { id: 'work', label: '01/WORK' },
  { id: 'articles', label: '02/ARTICLES' },
  { id: 'lab', label: '03/LAB' },
  { id: 'about', label: '04/ABOUT' },
  { id: 'contact', label: '05/CONTACT' },
];

const TopNav = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    NAV_LINKS.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }} // Wait for loader
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between mix-blend-difference text-white pointer-events-none"
    >
      {/* Logo */}
      <div className="font-sans font-bold text-lg pointer-events-auto">
        MJ
      </div>

      {/* Nav Links */}
      <nav className="hidden md:flex gap-8 pointer-events-auto">
        {NAV_LINKS.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-xs font-sans uppercase tracking-widest transition-colors ${
                isActive ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {link.label} {isActive && ']'}
            </a>
          );
        })}
      </nav>

      {/* Get In Touch Button */}
      <div className="pointer-events-auto">
        <button className="bg-white text-black px-5 py-2 rounded-full text-xs font-sans font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-colors">
          Get In Touch
        </button>
      </div>
    </motion.header>
  );
};

export default TopNav;

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from 'framer-motion';

const StatusFooter = () => {
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress to a string like "000" to "100"
  const scrollString = useTransform(scrollYProgress, (val) => {
    return Math.min(100, Math.max(0, Math.round(val * 100))).toString().padStart(3, '0');
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseXStr = useTransform(mouseX, (v) => Math.round(v).toString().padStart(4, '0'));
  const mouseYStr = useTransform(mouseY, (v) => Math.round(v).toString().padStart(4, '0'));

  const [time, setTime] = useState('');
  const [activeSection, setActiveSection] = useState('01 - WORK');

  useEffect(() => {
    // Track Mouse
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Track Time
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    // Track Active Section (simple scroll spy for footer)
    const sections = [
      { id: 'work', label: '01 - WORK' },
      { id: 'articles', label: '02 - ARTICLES' },
      { id: 'lab', label: '03 - LAB' },
      { id: 'about', label: '04 - ABOUT' },
      { id: 'contact', label: '05 - CONTACT' }
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const match = sections.find(s => s.id === entry.target.id);
            if (match) setActiveSection(match.label);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(timeInterval);
      observer.disconnect();
    };
  }, [mouseX, mouseY]);

  const scrollText = useMotionTemplate`SCRL ${scrollString}`;
  const cursorText = useMotionTemplate`CRSR [${mouseXStr},${mouseYStr}]`;

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 bg-black text-white px-8 py-2 flex items-center justify-between font-mono text-[10px] tracking-widest border-t border-zinc-900 pointer-events-none mix-blend-difference">
      {/* Left: Scroll & Cursor */}
      <div className="flex gap-6 w-1/3">
        <motion.span>{scrollText}</motion.span>
        <motion.span>{cursorText}</motion.span>
      </div>

      {/* Center: Active Section */}
      <div className="w-1/3 text-center">
        {activeSection}
      </div>

      {/* Right: Theme & Time */}
      <div className="w-1/3 text-right flex justify-end gap-6">
        <span>THEME #C3FFFC</span>
        <span>[{time}]</span>
      </div>
    </footer>
  );
};

export default StatusFooter;

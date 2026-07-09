import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CHARS = '!@#$%^&*()_+{}:"<>?|[];\',./`~';

const DecryptedLoader = ({ onComplete }) => {
  const [text, setText] = useState('LOADING');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let iterations = 0;
    const target = 'PORTFOLIO';
    
    const interval = setInterval(() => {
      setText(target.split('').map((letter, index) => {
        if (index < iterations) {
          return target[index];
        }
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      }).join(''));

      if (iterations >= target.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(onComplete, 500); // Wait for fade out before unmounting
        }, 800);
      }

      iterations += 1 / 3;
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950 text-white font-mono text-4xl md:text-6xl tracking-widest"
        >
          {text}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DecryptedLoader;

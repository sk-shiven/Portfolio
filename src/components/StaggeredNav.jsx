import React from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

const StaggeredNav = () => {
  const links = ['WORK', 'ABOUT', 'SKILLS', 'CONTACT'];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { ease: 'easeOut' } }
  };

  return (
    <motion.nav
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-6 mix-blend-difference text-white"
    >
      <motion.div variants={itemVariants} className="font-mono text-xl tracking-tighter font-bold">
        S.K.
      </motion.div>

      <ul className="hidden md:flex gap-8 font-mono text-sm tracking-widest">
        {links.map((link) => (
          <motion.li key={link} variants={itemVariants}>
            <a href={`#${link.toLowerCase()}`} className="hover:text-green-400 transition-colors">
              {link}
            </a>
          </motion.li>
        ))}
      </ul>

      <motion.button variants={itemVariants} className="md:hidden">
        <Menu />
      </motion.button>
    </motion.nav>
  );
};

export default StaggeredNav;
